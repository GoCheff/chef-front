import { S } from "./styles";

interface StatusTagProps {
  status: string;
}

function StatusTag({ status }: StatusTagProps) {
  const statusType = {
    open: "Selecionando pratos",
    sent: "Aguardando aprovação",
    approved: "Aguardando pagamento",
    rejected: "Recusado",
    paid: "Pago",
    delivered: "Finalizado",
  };

  return (
    <S.C.StatusTag $status={status}>
      {statusType[status as keyof typeof statusType]}
    </S.C.StatusTag>
  );
}

export { StatusTag };
