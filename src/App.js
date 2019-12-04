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
    render() {
        return (
            <Container className="bg-light p-5">
                <Form/>
                <List
                    movies={this.state.movies}
                />
            </Container>
        );
    }
}

export default App;