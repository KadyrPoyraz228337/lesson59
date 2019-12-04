import React from 'react';
import './style.css';
import InputGroup from "reactstrap/es/InputGroup";
import Input from "reactstrap/es/Input";
import Button from "reactstrap/es/Button";

const Form = () => {
    return (
        <InputGroup className="m-3">
            <Input placeholder="Add movie name" className="mr-5"/>
            <Button color="primary">Add</Button>
        </InputGroup>
    );
};

export default Form;