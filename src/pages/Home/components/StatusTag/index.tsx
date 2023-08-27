import { CartType } from "../../../../entities";

import { S } from "./styles";

interface StatusTagProps {
  status: CartType["status"];
}

function StatusTag({ status }: StatusTagProps) {
  const statusType = {
    open: "Selecionando pratos",
    sent: "Aguardando aprovação",
    approved: "Aguardando pagamento",
    rejected: "Recusado",
    paid: "Pago",
    delivered: "Finalizado",
  } as Record<CartType["status"], string>;

  return <S.C.StatusTag $status={status}>{statusType[status]}</S.C.StatusTag>;
}

export { StatusTag };
