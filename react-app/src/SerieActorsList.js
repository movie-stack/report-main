import {List, Datagrid, TextField,  ReferenceField, 
} from "react-admin";
export const SerieActorList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="serieId" reference="series"><TextField source="name" /></ReferenceField>
            <ReferenceField source="actorId" reference="actors"><TextField source="name" /></ReferenceField>
        </Datagrid>
    </List>
);
