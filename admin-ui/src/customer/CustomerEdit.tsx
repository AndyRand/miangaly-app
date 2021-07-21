import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Surname" source="surname" />
        <TextInput label="Money Total" source="moneyTotal" />
        <DateTimeInput label="Date Birth" source="dateBirth" />
        <DateTimeInput label="Subscription Date" source="subscriptionDate" />
        <TextInput label="NewField" source="newField" />
      </SimpleForm>
    </Edit>
  );
};
