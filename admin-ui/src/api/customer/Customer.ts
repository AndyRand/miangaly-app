export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  surname: string | null;
  moneyTotal: string | null;
  dateBirth: Date | null;
  subscriptionDate: Date | null;
  newField: string | null;
};
