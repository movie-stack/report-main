import {
    Edit, SimpleForm, TextInput, BooleanInput, PasswordInput, Create,
    
} from "react-admin";
export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            
            <TextInput source="username" />
            <TextInput source="email" />
            <BooleanInput source="verified" />
            <PasswordInput source="password" />
        </SimpleForm>
    </Edit>

);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
        <TextInput source="username" />
            <TextInput source="email" />
            <BooleanInput source="verified" />
            <PasswordInput source="password" />
        </SimpleForm>
    </Create>);