import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Surname" source="surname" />
        <TextInput label="Money Total" source="moneyTotal" />
        <DateTimeInput label="Date Birth" source="dateBirth" />
        <DateTimeInput label="Subscription Date" source="subscriptionDate" />
        <TextInput label="NewField" source="newField" />
      </SimpleForm>
    </Create>
  );
};
