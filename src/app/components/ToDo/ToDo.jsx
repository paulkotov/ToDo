import React, { PropTypes, Component } from 'react';
import { Map } from 'immutable';
import './ToDoList.scss';

//class ToDo 
/*
export const ToDo = ({id, description, text, start, finish, added, priority, isDone }) => (
    <div className="ToDo">
        <ul>
            <li>{id}</li>
            <li>{description}</li>
            <li>{text}</li>
            <li>{start}</li>
            <li>{finish}</li>
            <li>{added}</li>
            <li>{priority}</li>
            <li>{isDone}</li>        
        </ul>
    </div>
);

export const ToDo = (props) => {
    const elements = { ...props };
    const template = elements.forEach((element, i, elements) => (
        <li className="list-group-item">{element}</li>
    ));
    return (
        <div className="ToDo">
            <ul className="list-group">
                {template}
            </ul>
        </div>

    );
}

<ToDoList className="ToDoList">
    <ToDo className="ToDo" toDoProps={} />
</ToDoList>

elements.map(element => (
    <li key={element.get('id')} className="list-group-item">
        {element}
    </li>
));
*/
export const ToDo = ({data}) => {
    //const {data} = this.props;
    const templateToDo = data.map((item, index) => (
        <li key={index} className="list-group-item">{item}</li>
    ));
    return (
        <div className="ToDo">
            <ul className="list-group">
                {templateToDo}
            </ul>
        </div>
    );
}

ToDo.propTypes = {
    data: PropTypes.instanceOf(Map)
};    