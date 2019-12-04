import React from 'react';
import './style.css';
import ListGroup from "reactstrap/es/ListGroup";
import ListItem from "./ListItem/listItem";

const List = (
    {movies, remove, edit}
) => {
    return (
        <ListGroup>
            {movies.map((movie) => {
                return <ListItem
                    key={movie.id}
                    title={movie.title}
                    remove={() => remove(movie.id)}
                    edit={event => edit(movie.id, event)}
                />
            })}
        </ListGroup>
    );
};

export default List;