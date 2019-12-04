import React from 'react';
import ListGroupItem from "reactstrap/es/ListGroupItem";
import Button from "reactstrap/es/Button";
import Input from "reactstrap/es/Input";

const ListItem = (
    {title, index}
) => {
    return (
        <>
            <ListGroupItem className='d-flex align-items-center'>
                <h6 className="my-0">
                    #{index}
                </h6>
                <Input value={title} className='d-inline-block mx-3'/>
                <Button className="ml-auto">
                    X
                </Button>
            </ListGroupItem>
        </>
    );
};

export default ListItem;