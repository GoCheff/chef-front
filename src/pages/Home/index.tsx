import { useContext, useState } from "react";

import { UserContext } from "../../context";

import { services } from "../../services";

import { OrdersTable } from "./components";

import { useAsync } from "../../hooks";

function HomePage(): JSX.Element {
  const { token } = useContext(UserContext);
  const [needRetry, setNeedRetry] = useState(true);

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
