import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const newItem = () => {
        props.setShowModal(prevState => !prevState);
    };

    return (
        <button className="CreateTodoButton"
        onClick={newItem}
        >+</button>
    );
}

export { CreateTodoButton };