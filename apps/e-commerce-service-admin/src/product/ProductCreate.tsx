import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="stock" source="stock" />
      </SimpleForm>
    </Create>
  );
};
