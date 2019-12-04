import React, {Component} from 'react';
import nanoid from 'nanoid';
import Container from "reactstrap/es/Container";
import List from "./components/List/list";

import Form from "./components/Form/form";
import 'bootstrap/dist/css/bootstrap.min.css';
import NorrisApp from "./components/NorrisApp/norrisApp";


class App extends Component {
    state = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : {
        text: '',
        movies: [
            {title: 'Movie name', id: nanoid()},
            {title: 'Movie name', id: nanoid()},
        ],
        jokes: [],
    };
    async componentDidMount() {
        // const joke = await fetch('https://api.chucknorris.io/jokes/random');
        // if(joke.ok) {
        //     const json = await joke.json();
        //     console.log(json);
        // }
        localStorage.setItem('movies', JSON.stringify(this.state))
    }
    componentDidUpdate() {
        localStorage.setItem('movies', JSON.stringify(this.state))
        // console.log('apdated');
    }


    render() {
        return (
            <Container className="bg-light p-5 mx-auto my-3 border rounded">
                <Form
                    onClick={this.addMovie}
                    onChange={this.changeText}
                />
                <List
                    movies={this.state.movies}
                    remove={this.removeMovie}
                    edit={this.editMovie}
                />
                <NorrisApp/>
            </Container>
        );
    }
    changeText = event => this.setState({text: event.target.value});
    editMovie = (id, event) => {
        const movies = [...this.state.movies];
        const index = movies.findIndex(movie => movie.id === id);
        const movie = movies[index];
        movie.title = event.target.value;
        console.log(movies);


        this.setState({movies: movies})
    };
    addMovie = () => {
        if(this.state.text.length > 0) {
            const movies = [...this.state.movies];
            movies.push({title: this.state.text, id: nanoid()});
            this.setState({movies})
        }
    };
    removeMovie = id => {
        const movies = [...this.state.movies];
        const index = movies.findIndex(movie => movie.id === id);
        movies.splice(index, 1);
        this.setState({movies});
    }
}

export default App;