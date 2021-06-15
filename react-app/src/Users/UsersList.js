import {List, Datagrid, TextField, EmailField, BooleanField, EditButton,Filter, TextInput,
} from "react-admin";


const PostFilter = (props) =>
    <Filter {...props}>
        <TextInput label="Name" source="username" alwaysOn />
    </Filter>


export const UserList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <EmailField source="email" />
            <BooleanField source="verified" />
            <EditButton />
        
        </Datagrid>
    </List>
);
