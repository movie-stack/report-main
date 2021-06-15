import { Admin, Resource, } from "react-admin";
import lb4Provider from "react-admin-lb4";
import { ActorList } from "./Actors/ActorsList";
import { ActorEdit } from "./Actors/ActorsEdit";
import { ActorCreate } from "./Actors/ActorsEdit";
import { MovieList } from "./Movies/MoviesList";
import { MovieEdit } from "./Movies/MovieEdit";
import { MovieCreate } from "./Movies/MovieEdit";
import { SerieList } from "./Series/SeriesList";
import { SeriesEdit } from "./Series/SeriesEdit";
import { SeriesCreate } from "./Series/SeriesEdit";
import { UserList } from "./Users/UsersList";
import { UserEdit } from "./Users/UsersEdit";
import { UserCreate } from "./Users/UsersEdit";
import { ListList } from "./Lists/ListsList";
import { ListEdit } from "./Lists/ListsEdit";
import { ListCreate } from "./Lists/ListsEdit";
import { ListSeriesList } from "./ListSeriesList";
import { ListMoviesList } from "./ListMoviesList";
import { MovieActorsList } from "./MovieActorsList";
import { SerieActorList } from "./SerieActorsList";




import {Dashboard} from "./dashboard";
import FaceIcon from '@material-ui/icons/Face';
import User from '@material-ui/icons/AccountCircle';
import MovieIcon from '@material-ui/icons/Movie';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import LowPriorityIcon from '@material-ui/icons/LowPriority';

const dataProvider = lb4Provider("http://localhost:3000");
const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="series" icon = {MovieIcon} list={SerieList}  edit={SeriesEdit} create={SeriesCreate}/>
    <Resource name="actors" icon= {FaceIcon} list={ActorList} edit={ActorEdit} create={ActorCreate} />
    <Resource name="movies" icon = {LocalMoviesIcon} list={MovieList} edit={MovieEdit} create={MovieCreate}/>
    <Resource name="users" icon= {User} list={UserList} edit= {UserEdit} create={UserCreate}/>
    <Resource name="lists" icon = {PlaylistPlayIcon} list={ListList} edit={ListEdit} create={ListCreate}/>
    <Resource name="list-series" icon = {LowPriorityIcon} list={ListSeriesList} />
    <Resource name="list-movies" icon = {LowPriorityIcon} list={ListMoviesList} />
    <Resource name="movie-actors" icon = {LowPriorityIcon} list={MovieActorsList} />
    <Resource name="serie-actors" icon = {LowPriorityIcon} list={SerieActorList} />
  </Admin>
);
export default App;

