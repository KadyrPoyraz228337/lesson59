import React from 'react';
import './style.css';
import ListGroup from "reactstrap/es/ListGroup";
import ListItem from "./ListItem/listItem";

const List = (
    {movies, remove}
) => {
    return (
        <ListGroup>
            {movies.map((movie, index) => {
                return <ListItem
                    key={movie.id}
                    title={movie.title}
                    index={index+1}
                    remove={() => remove(movie.id)}
                />
            })}
        </ListGroup>
    );
};

export default List;