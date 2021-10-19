import React from "react";
import './TodoList.css';

function TodoList(props){ 
    return(
        <section>
            <h3>Tasks</h3>
            <ul>{props.children}</ul>
        </section>     
    )
}

export { TodoList }