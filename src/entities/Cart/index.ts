type CartType = {
  id: number;
  customerId: number;
  status:
    | "open"
    | "sent"
    | "approved"
    | "rejected"
    | "paid"
    | "canceled"
    | "delivered";
  locale: string;
  eventDate: Date;
  phoneContact: string;
  observation: string;
  createdAt: Date;
  updatedAt: Date | null;
  deletedAt: Date | null;
};

export type { CartType };
