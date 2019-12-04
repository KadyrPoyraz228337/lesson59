import React, {PureComponent} from 'react';
import Button from "reactstrap/es/Button";

class Btn extends PureComponent {
    render() {
        const {children, onClick} = this.props;
        return (
            <>
                <Button color="secondary" onClick={onClick} className='my-3'>{children}</Button>
            </>
        );
    }
}

export default Btn;