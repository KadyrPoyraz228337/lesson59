import React, {Component} from 'react';
import nanoid from 'nanoid';
import Container from "reactstrap/es/Container";

import Form from "./components/Form/form";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    state = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : {
      movies: [
          {title: 'Movie name', id: nanoid()},
          {title: 'Movie name', id: nanoid()},
      ]
    };
    render() {
        return (
            <Container>
                <Form/>
            </Container>
        );
    }
}

export default App;