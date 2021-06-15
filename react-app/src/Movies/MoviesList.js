import {
    List, Datagrid, TextField, DateField, NumberField, EditButton,Filter, TextInput,
    
} from "react-admin";

const PostFilter = (props) =>
    <Filter {...props}>
        <TextInput label="Name" source="name" alwaysOn />
    </Filter>
export const MovieList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="release_date" />
            <NumberField source="rating" />
            <TextField source="genre" />
            <EditButton />
        </Datagrid>
    </List>
);