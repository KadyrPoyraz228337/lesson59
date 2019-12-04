import React, {Component} from 'react';
import Btn from "./Button/butto";
import List from "./List/list";

class NorrisApp extends Component {
    state = {
      jokes: [],
    };
    async componentDidMount() {
        this.createJokes();
    };

    render() {
        return (
            <div className='d-flex flex-column align-items-center mt-5 mb-4'>
                <h3 className='text-sm-center text-uppercase'>Jokes Chuck Norris</h3>
                <img src='https://assets.chucknorris.host/img/avatar/chuck-norris.png' className="rounded" alt="Norris"/>
                <Btn
                    onClick={this.createJokes}
                >Create new jokes
                </Btn>
                <List
                    jokes={this.state.jokes}
                />
            </div>
        );
    }
     createJokes = () => {
        const promises = [];
        for(let i = 0; i < 5; i++) promises.push('https://api.chucknorris.io/jokes/random');
         Promise.all(promises.map(promise => fetch(promise)))
             .then(responses =>
             Promise.all(responses.map(res => res.json()))
         ).then(jokes => {
             this.setState({jokes})
         })
     }
     }

export default NorrisApp;