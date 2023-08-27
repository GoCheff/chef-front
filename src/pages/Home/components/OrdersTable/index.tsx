import { useContext, useState } from "react";

import { toast } from "../../../../libs";

import { services } from "../../../../services";

import { Button, Table } from "../../../../ui/layouts";

import { UserContext } from "../../../../context";

import { headers } from "../../data";

import { CartType, ResponseType } from "../../../../entities";

import { StatusTag } from "../StatusTag";

import { S } from "./styles";

interface OrdersTableProps {
  orders:
    | {
        id: number;
        status: CartType["status"];
      }[]
    | null;
  loading?: boolean;
  setNeedRetry: (value: boolean) => void;
}

function OrdersTable({ orders, loading, setNeedRetry }: OrdersTableProps) {
  const { token } = useContext(UserContext);
  const [loadingAction, setLoadingAction] = useState<string | null>(null);

  async function handleClick(type: "approve" | "refuse", id: number) {
    setLoadingAction(type);

    try {
      const { message } = await services.carts[type]({
        token,
        id,
      });

      setNeedRetry(true);
      toast.success(message);
    } catch (error) {
      const { message: errorMessage } = error as ResponseType<{}>;

      toast.error(errorMessage);
    }

    setLoadingAction(null);
  }

  const data = (orders || []).map((order) => {
    return {
      id: order.id,
      status: <StatusTag status={order.status} />,
      _options: order.status === "sent" && (
        <div style={{ display: "flex", gap: "10px" }}>
          <Button
            size="small"
            theme="success"
            loading={loadingAction === "approve"}
            disabled={loadingAction !== null}
            onClick={() => handleClick("approve", order.id)}
          >
            Aprovar
          </Button>
          <Button
            size="small"
            theme="danger"
            loading={loadingAction === "refuse"}
            disabled={loadingAction !== null}
            onClick={() => handleClick("refuse", order.id)}
          >
            Reprovar
          </Button>
        </div>
      ),
    };
  });

  return (
    <S.C.Section>
      <Table headers={headers} data={data} loading={loading} />
    </S.C.Section>
  );
}

export { OrdersTable };
