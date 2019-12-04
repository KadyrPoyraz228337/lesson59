import React, {Component} from 'react';
import nanoid from 'nanoid';
import Container from "reactstrap/es/Container";
import List from "./components/List/list";

import Form from "./components/Form/form";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    state = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : {
        text: '',
        movies: [
            {title: 'Movie name', id: nanoid()},
            {title: 'Movie name', id: nanoid()},
        ]
    };
    componentDidMount() {
        localStorage.setItem('movies', JSON.stringify(this.state))
    }

    render() {
        return (
            <Container className="bg-light p-5 border rounded">
                <Form
                    onClick={this.addMovie}
                    onChange={this.changeText}
                />
                <List
                    movies={this.state.movies}
                    remove={this.removeMovie}
                />
            </Container>
        );
    }
    changeText = event => this.setState({text: event.target.value});
    addMovie = () => {
        if(this.state.text.length > 0) {
            const movies = [...this.state.movies];
            movies.unshift({title: this.state.text, id: nanoid()});
            this.setState({movies})
        }
    };
    removeMovie = id => {
        const movies = [...this.state.movies];
        const index = movies.findIndex(movie => movie.id = id);
        movies.splice(index, 1);
        this.setState({movies});
    }
}

export default App;