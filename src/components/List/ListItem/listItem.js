import React, {Component} from 'react';
import ListGroupItem from "reactstrap/es/ListGroupItem";
import Button from "reactstrap/es/Button";
import Input from "reactstrap/es/Input";

class ListItem extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.title !== this.props.title
    }

    render() {
        const {title, remove, edit} = this.props;

        return (
            <>
                <ListGroupItem className='d-flex align-items-center'>
                    <Input
                        value={title}
                        className='d-inline-block mr-3'
                        onChange={edit}
                    />
                    <Button
                        className="ml-auto"
                        onClick={remove}
                    >
                        X
                    </Button>
                </ListGroupItem>
            </>
        );
    }
}

export default ListItem;