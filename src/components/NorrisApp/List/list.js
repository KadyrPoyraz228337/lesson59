import React from 'react';

import ListItem from "./ListItem/listItem";

const List = (
    {jokes}
) => {
    return (
        <div className='m-3'>
            {jokes.map(joke => <ListItem key={joke.id} value={joke.value}/>)}
        </div>
    );
};

export default List;