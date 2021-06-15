import {
    Edit, SimpleForm, TextInput, DateInput, ReferenceInput, SelectInput, Create,

} from "react-admin";

export const ListEdit = props => (
    <Edit {...props}>
        <SimpleForm>

            <TextInput source="name" />
            <TextInput source="description" />
            <DateInput source="creation_date" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="id" /></ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const ListCreate = props => (
    <Create {...props}>
        <SimpleForm>

            <TextInput source="name" />
            <TextInput source="description" />
            <DateInput source="creation_date" />
        </SimpleForm>
    </Create>);