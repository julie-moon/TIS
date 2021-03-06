import React, {Component} from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component{
    shouldComponentUpdate(nextProps, nextState) {
        /* 
            this.props.todos의 값과 
            nextProps.todos의 값이 같지 않을 때
            true 리턴함
        */
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            todo => (
                <TodoItem key={todo.get('id')}
                          done={todo.get('done')}
                          onToggle={() => onToggle(todo.get('id'))}
                          onRemove={() => onRemove(todo.get('id'))}>
                    {todo.get('text')}
                </TodoItem>
            )
        )

        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoList;