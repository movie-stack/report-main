import {
    Edit, SimpleForm, TextInput, DateInput, Create,

} from "react-admin";

const PostTitle = ({ record }) => <span> {record ? (String(record.gender) === 'Male' ? `Ator ${record.name} ` : `Atriz ${record.name}`) : ''}</span>

export const ActorEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>

            <TextInput source="name" />
            <DateInput source="birthdate" />
            <TextInput source="gender" />
        </SimpleForm>
    </Edit>

    
);

export const ActorCreate = props => (
    <Create {...props}>
        <SimpleForm>

            <TextInput source="name" />
            <DateInput source="birthdate" />
            <TextInput source="gender" />
        </SimpleForm>
    </Create>);