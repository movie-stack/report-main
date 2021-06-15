import {
    List, Datagrid, TextField, DateField, EditButton, Filter, TextInput,


} from "react-admin";


const PostFilter = (props) =>
    <Filter {...props}>
        <TextInput label="Name" source="name" alwaysOn />
    </Filter>



export const ActorList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="birthdate" />
            <TextField source="gender" />
            <EditButton />

        </Datagrid>
    </List>
);
