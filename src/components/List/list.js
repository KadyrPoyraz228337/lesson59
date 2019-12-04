import React from 'react';
import './style.css';
import ListGroup from "reactstrap/es/ListGroup";
import ListItem from "./ListItem/listItem";

const List = (
    {movies}
) => {
    return (
        <ListGroup>
            {movies.map((movie, index) => {
                return <ListItem
                    key={movie.id}
                    title={movie.title}
                    index={index+1}
                />
            })}
        </ListGroup>
    );
};

export default List;