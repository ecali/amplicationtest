import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EntitytestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="label" source="label" />
      </SimpleForm>
    </Create>
  );
};
