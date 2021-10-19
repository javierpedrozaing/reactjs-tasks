import React from "react";
import ReactDOM from "react-dom";
import './modal.css';

function ModalForm({children}) {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
          {children}
        </div>,
        document.getElementById('modal-form')
      )
}

export { ModalForm }