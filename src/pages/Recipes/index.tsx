import { useContext, useState } from "react";

import { UserContext } from "../../context";

import { RecipesTable } from "./components";

import { useAsync } from "../../hooks";

import { services } from "../../services";

function RecipesPage(): JSX.Element {
  const { token } = useContext(UserContext);
  const [needRetry, setNeedRetry] = useState(true);

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
