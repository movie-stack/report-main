import "./App.css";
import React, { useEffect, useState } from "react";
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Card,
    CardGroup,
    CardDeck,
    Button,
} from "react-bootstrap";


export const Dashboard = () => {
    const [countUsers, setCountUsers] = useState(0);
    useEffect(() => {
        async function contarUsers() {
            let response = await fetch("http://localhost:3000/users/count");
            response = await response.json();
            setCountUsers(response.count);
        }
        contarUsers();
    }, []);

    const [countActors, setCountActor] = useState(0);
    useEffect(() => {
        async function contarActors() {
            let response = await fetch("http://localhost:3000/actors/count");
            response = await response.json();
            setCountActor(response.count);
        }
        contarActors();
    }, []);

    const [countSeries, setCountSerie] = useState(0);
    useEffect(() => {
        async function contarSeries() {
            let response = await fetch("http://localhost:3000/series/count");
            response = await response.json();
            setCountSerie(response.count);
        }
        contarSeries();
    }, []);

    const [countMovies, setCountMovies] = useState(0);
    useEffect(() => {
        async function contarMovies() {
            let response = await fetch("http://localhost:3000/movies/count");
            response = await response.json();
            setCountMovies(response.count);
        }
        contarMovies();
    }, []);

    const [countLists, setCountLists] = useState(0);
    useEffect(() => {
        async function contarLists() {
            let response = await fetch("http://localhost:3000/lists/count");
            response = await response.json();
            setCountLists(response.count);
        }
        contarLists();
    }, []);

    const [countListMovie, setCountListMovie] = useState(0);
    useEffect(() => {
        async function contarListMovies() {
            let response = await fetch("http://localhost:3000/list-movies/count");
            response = await response.json();
            setCountListMovie(response.count);
        }
        contarListMovies();
    }, []);

    const [countListSerie, setCountListSeries] = useState(0);
    useEffect(() => {
        async function contarListSeries() {
            let response = await fetch("http://localhost:3000/list-series/count");
            response = await response.json();
            setCountListSeries(response.count);
        }
        contarListSeries();
    }, []);

    const [countActorMovie, setCountActorMovie] = useState(0);
    useEffect(() => {
        async function contarActorMovie() {
            let response = await fetch("http://localhost:3000/movie-actors/count");
            response = await response.json();
            setCountActorMovie(response.count);
        }
        contarActorMovie();
    }, []);

    const [countActorSerie, setCountActorSerie] = useState(0);
    useEffect(() => {
        async function contarActorSerie() {
            let response = await fetch("http://localhost:3000/serie-actors/count");
            response = await response.json();
            setCountActorSerie(response.count);
        }
        contarActorSerie();
    }, []);


    return (
        <>
            <CardDeck>
                <Card bg="light">
                    <Card.Title >
                        <p align="center"><font face = "Georgia" size="+9">Movie Stack</font></p>
                    </Card.Title>
                    <Card.Text><p align="center"><font size="4">Create your own list with the movies and series you like the most!</font></p></Card.Text>
                </Card>
            </CardDeck>
            <br></br>
            <CardDeck>
                <CardGroup>
                    <Card style={{ width: "12rem" }}>
                        <Card.Header>Users</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Utilizadores: {countUsers}
                            </Card.Title>
                            <Card.Text>
                                Existem {countUsers} utilizadores registados
                            </Card.Text>
                            <Button href="#users" variant="primary">
                                Ver utilizadores
                            </Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: "12rem" }}>
                        <Card.Header>Actors</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Atores: {countActors}
                            </Card.Title>
                            <Card.Text>
                                Existem {countActors} Atores Registados
                            </Card.Text>
                            <Button href="#actors" variant="primary">
                                Ver Atores
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "12rem" }}>
                        <Card.Header>Series</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Séries: {countSeries}
                            </Card.Title>
                            <Card.Text>
                                Existem {countSeries} Séries
                            </Card.Text>
                            <Button href="#series" variant="primary">
                                Ver Séries
                            </Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </CardDeck>
            <br></br>
            <CardDeck>
                <CardGroup>
                    <Card style={{ width: "12rem" }}>
                        <Card.Header>Movies</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Filmes: {countMovies}
                            </Card.Title>
                            <Card.Text>
                                Existem {countMovies}  Filmes
                            </Card.Text>
                            <Button href="#movies" variant="primary">
                                Ver Filmes
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "12rem" }}>
                        <Card.Header>Lists</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Listas: {countLists}
                            </Card.Title>
                            <Card.Text>
                                Existem {countLists} Listas de Filmes e Séries
                            </Card.Text>
                            <Button href="#lists" variant="primary">
                                Ver Listas de Filmes
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "12rem" }}>
                        <Card.Header>Movies in Lists</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Listas de filmes: {countListMovie}
                            </Card.Title>
                            <Card.Text>
                                Existem {countListMovie} Filmes presentes em listas
                            </Card.Text>
                            <Button href="#list-movies" variant="primary">
                                Ver Listas de Filmes
                            </Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </CardDeck>
            <br />
            <CardDeck>
                <CardGroup>
                    <Card style={{ width: "12rem" }}>
                        <Card.Header>Series in Lists</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Listas de Series: {countListSerie}
                            </Card.Title>
                            <Card.Text>
                                Existem {countListSerie} Séries presentes em listas
                            </Card.Text>
                            <Button href="#list-series" variant="primary">
                                Ver Listas de Series
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "12rem" }}>
                        <Card.Header>Actors in Movies</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Atores em Filmes: {countActorMovie}
                            </Card.Title>
                            <Card.Text>
                                Existem {countActorMovie} Atores presentes em Filmes
                            </Card.Text>
                            <Button href="#movie-actors" variant="primary">
                                Ver Atores em Filmes
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: "12rem" }}>
                        <Card.Header>Actors in Series</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                Atores em Series: {countActorSerie}
                            </Card.Title>
                            <Card.Text>
                                Existem {countActorSerie} Atores presentes em Series
                            </Card.Text>
                            <Button href="#serie-actors" variant="primary">
                                Ver Atores em Series
                            </Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </CardDeck>
        </>
    );
};