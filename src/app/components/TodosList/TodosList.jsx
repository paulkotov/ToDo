import React, {PropTypes, Component} from 'react';
import {Map, fromJS} from 'immutable';

class ToDosList extends Component {
    constructor(){

    }

    render() {
        return (
            <div className="ToDosList">
                <ToDo id=""/>
            </div>
        );
    }
}

export const ToDoList = ({todo}) => (
    <div className="ToDosList">
        <ToDo id={todo.id} />
    </div>
);
export default ToDosList;
/*
const ToDo = {
    id: '',
    description: '',
    text: '',
    start: '',
    finish: '',
    added: '',
    priority: '',
    isDone: false 
};

const ToDo1 = Object.assign(ToDo);
ToDo1.id = 1;
ToDo1.priority = 'high';
*/
//const toDosList = new List([]);
const toDoList = new Map({
    id: '',
    description: '',
    text: '',
    start: '',
    finish: '',
    added: '',
    priority: '',
    isDone: false 
});