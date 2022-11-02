import { useState, memo } from 'react';
import { createTodos } from './utils';

import './Todos.css';

export const CREATED_TODOS = createTodos(/* 30000 */);
export const MemoizedTodos = memo(({ visibleTodos, onPressTodo, stateInactive = false }) => {
    console.log('Rendering memoized todos');

    const [activeTodo, setActiveTodo] = useState();

    const onSelectListItem = (todo) => {
        if (activeTodo === todo) return;
        !stateInactive && setActiveTodo(todo);
        onPressTodo && onPressTodo(todo);
    };

    return (
        <ul className='todos-list' >
            {visibleTodos.map(({ id, text, completed }) => {
                return (
                    <li
                        key={`todo-${id}`}
                        className={`todo-item ${activeTodo === text && 'todo-active'}`}
                        onClick={() => onSelectListItem(text)}
                    >{completed
                        ? <s>{text}</s>
                        : text}
                    </li>
                )
            })}
        </ul>
    );
});

export const Todos = ({ visibleTodos }) => {
    console.log('Rendering todos');

    return (
        <ul className='todos-list' >
            {visibleTodos.map(({ id, text, completed }) => {
                return (
                    <li
                        key={`todo-${id}`}
                        className='todo-item'
                    >{completed
                        ? <s>{text}</s>
                        : text}
                    </li>
                )
            })}
        </ul>
    );
};
