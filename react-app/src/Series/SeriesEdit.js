import {
    Edit, SimpleForm, TextInput, DateInput, NumberInput, Create,
    
} from "react-admin";
export const SeriesEdit = props => (
    <Edit {...props}>
        <SimpleForm>
           
            <TextInput source="name" />
            <DateInput source="release_date" />
            <NumberInput source="rating" />
            <TextInput source="genre" />
            <NumberInput source="seasons" />
        </SimpleForm>
    </Edit>
);

export const SeriesCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <DateInput source="release_date" />
            <NumberInput source="rating" />
            <TextInput source="genre" />
            <NumberInput source="seasons" />
        </SimpleForm>
    </Create>);