import React from "react";
import './form.css';

function TodoForm(props) {
    const [newTaskValue, setNewTaskValue] = React.useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (newTaskValue.length >= 1) {
            props.addTask(newTaskValue);
            props.setShowModal(false);    
        }
       
        
    }

    const onChange = (e) => {
        console.log(e.target.value);
        const text = e.target.value;
        setNewTaskValue(text);  
       
    }

    const onCancel = () => {
        props.setShowModal(false);
    }

    return (
        <form onSubmit={onSubmit} >
            <label>Escribe tu nueva tarea</label>
            <textarea
                value = {newTaskValue}
                onChange = {onChange}
                placeholder = "Escribe una nueva tarea"
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button-cancel"
                onClick = {onCancel}
                >
                Cancelar
                </button>

                <button
                className="TodoForm-button TodoForm-button-add"
                type= "submit"
                >
                Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }