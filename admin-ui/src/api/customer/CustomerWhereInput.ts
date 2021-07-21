import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  surname?: StringNullableFilter;
  moneyTotal?: StringNullableFilter;
  dateBirth?: DateTimeNullableFilter;
  subscriptionDate?: DateTimeNullableFilter;
};
