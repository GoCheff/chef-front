import { useContext, useEffect, useState } from "react";

import { UserContext } from "../../context";

import { services } from "../../services";

import { OrdersTable } from "./components";

import { useAsync } from "../../hooks";

function HomePage(): JSX.Element {
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

  const { data: orders, loading } = useAsync({
    fn: async () => {
      if (!needRetry) return null;

      setNeedRetry(false);

      const { data } = await services.carts.getAll({ token });

      return data;
    },
    deps: [needRetry],
  });

  return (
    <OrdersTable
      orders={orders}
      loading={loading}
      setNeedRetry={setNeedRetry}
    />
  );
}

export { HomePage };
