import {List, Datagrid, TextField, NumberField, DateField, EditButton,Filter, TextInput,
    } from "react-admin";


    const PostFilter = (props) =>
    <Filter {...props}>
        <TextInput label="Name" source="name" alwaysOn />
    </Filter>

    export const SerieList = props => (
        <List filters={<PostFilter />} {...props}>
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <DateField source="release_date" />
                <NumberField source="rating" />
                <TextField source="genre" />
                <NumberField source="seasons" />
                <EditButton/>
            </Datagrid>
        </List>
   );
   