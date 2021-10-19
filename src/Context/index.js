import React from "react";

const tasksContext = React.createContext();

function tasksProvider(props) {
    return (
        <tasksContext.Provider value={{}}>
            {props.children}
        </tasksContext.Provider>
    );
}


<tasksContext.Consumer></tasksContext.Consumer>