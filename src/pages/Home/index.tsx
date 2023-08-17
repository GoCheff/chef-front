import { OrdersTable } from "./components";

function HomePage(): JSX.Element {
  const orders = [
    {
      id: 1,
      status: "open",
    },
    {
      id: 2,
      status: "sent",
    },
    {
      id: 3,
      status: "approved",
    },
    {
      id: 4,
      status: "rejected",
    },
    {
      id: 5,
      status: "paid",
    },
    {
      id: 6,
      status: "delivered",
    },
  ];

  return <OrdersTable orders={orders} />;
}

export { HomePage };
