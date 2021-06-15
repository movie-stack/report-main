import {List, Datagrid, TextField,  ReferenceField,
} from "react-admin";
export const MovieActorsList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="movieId" reference="movies"><TextField source="name" /></ReferenceField>
            <ReferenceField source="actorId" reference="actors"><TextField source="name" /></ReferenceField>
        </Datagrid>
    </List>
);
