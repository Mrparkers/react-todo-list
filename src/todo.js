import React from 'react';

export default class Todo extends React.Component {
    render() {
        const {text, remove} = this.props;

        return (
            <li className="todo" onClick={remove}>
                {text}
            </li>
        );
    }
}
