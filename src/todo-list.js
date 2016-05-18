import React from 'react';

import Todo from './todo';

function renderTodoItems() {
    const {todos} = this.state;

    return todos.map((todo, index) => <Todo text={todo} remove={removeTodo.bind(this, index)}/>);
}

function addTodo() {
    const {value} = this.refs.input,
        {todos} = this.state;

    todos.push(value);

    this.setState({
        todos
    });
}

function removeTodo(index) {
    const {todos} = this.state;
    
    todos.splice(index, 1);
    
    this.setState({
        todos
    });
}

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        };
    }

    render() {
        return (
            <section className="TodoList">
                <ul>
                    {renderTodoItems.call(this)}
                </ul>
                <input type="text" ref="input"/>
                <button onClick={addTodo.bind(this)}>Add Todo</button>
            </section>
        );
    }
}
