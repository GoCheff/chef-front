import { Button, Table } from "../../../../ui/layouts";

import { headers } from "../../data";

import { S } from "./styles";
import { StatusTag } from "../StatusTag";

interface OrdersTableProps {
  orders: {
    id: number;
    status: string;
  }[];
}

function OrdersTable({ orders }: OrdersTableProps) {
  const data = orders.map((order) => {
    return {
      id: order.id,
      status: <StatusTag status={order.status} />,
      _options: order.status === "sent" && (
        <div style={{ display: "flex", gap: "10px" }}>
          <Button size="small">Aprovar</Button>
          <Button size="small">Recusar</Button>
        </div>
      ),
    };
  });

  return (
    <S.C.Section>
      <Table headers={headers} data={data} />
    </S.C.Section>
  );
}

export { OrdersTable };
