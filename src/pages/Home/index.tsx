import { HomeTitle, OrdersTable } from "./components";

import { Icon } from "../../ui/components";

import { S } from "./styles";

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

  return (
    <S.Container>
      <Icon name="logo" size="150px" fill="primary" />
      <HomeTitle />
      <OrdersTable orders={orders} />
    </S.Container>
  );
}

export { HomePage };
