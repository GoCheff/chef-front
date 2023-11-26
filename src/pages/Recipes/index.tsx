import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../context";

import { RecipesTable } from "./components";

import { useAsync } from "../../hooks";

import { services } from "../../services";

function RecipesPage(): JSX.Element {
  const { token, logout } = useContext(UserContext);
  const [needRetry, setNeedRetry] = useState(true);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "s" || e.key === "S") {
        logout();
        window.location.reload();
      }
    };

    window.addEventListener("keydown", listener);

    return () => window.removeEventListener("keydown", listener);
  });

  const { data: recipes, loading } = useAsync({
    fn: async () => {
      if (!needRetry) return null;

      setNeedRetry(false);

      const { data } = await services.foodPlates.getAll({ token });

      return data;
    },
    deps: [needRetry],
  });

  return (
    <RecipesTable
      recipes={recipes}
      loading={loading}
      setNeedRetry={setNeedRetry}
    />
  );
}

export { RecipesPage };
