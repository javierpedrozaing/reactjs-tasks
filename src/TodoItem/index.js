import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
 
  return (
    <li className="TodoItem">
      <span data-id={props.id} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span data-id={props.id} className="Icon Icon-delete" onClick={props.onDelete}>
        X
      </span>
    </li>
  )
}

export { TodoItem }