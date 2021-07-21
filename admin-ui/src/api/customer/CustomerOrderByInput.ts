import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  surname?: SortOrder;
  moneyTotal?: SortOrder;
  dateBirth?: SortOrder;
  subscriptionDate?: SortOrder;
};
