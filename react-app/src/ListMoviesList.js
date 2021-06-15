import {List, Datagrid, TextField,  ReferenceField, Filter, TextInput,
} from "react-admin";

const PostFilter = (props) =>
    <Filter {...props}>
        <TextInput label="List Name" source="listId" alwaysOn />
    </Filter> 
export const ListMoviesList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="listId" reference="lists"><TextField source="name" /></ReferenceField>
            <ReferenceField source="movieId" reference="movies"><TextField source="name" /></ReferenceField>
        </Datagrid>
    </List>
);
