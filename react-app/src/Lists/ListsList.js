import {List, Datagrid, TextField,  ReferenceField, DateField, EditButton, Filter, TextInput,
} from "react-admin";

const PostFilter = (props) =>
    <Filter {...props}>
        <TextInput label="Name" source="name" alwaysOn />
    </Filter>


export const ListList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <DateField source="creation_date" />
            <ReferenceField source="userId" reference="users"><TextField source="id" /></ReferenceField>
            <EditButton/>
        </Datagrid>
    </List>
);
