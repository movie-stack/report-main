import {
    Edit, SimpleForm, TextInput, DateInput, NumberInput, Create, 
    
} from "react-admin";

export const MovieEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            
            <TextInput source="name" />
            <DateInput source="release_date" />
            <NumberInput source="rating" />
            <TextInput source="genre" />
        </SimpleForm>
    </Edit>);

export const MovieCreate = props => (
    <Create {...props}>
        <SimpleForm>

             <TextInput source="name" />
            <DateInput source="release_date" />
            <NumberInput source="rating" />
            <TextInput source="genre" />
        </SimpleForm>
    </Create>);