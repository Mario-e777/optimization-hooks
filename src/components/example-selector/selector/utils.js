import { FILTER_TYPES } from './constants';
import { CREATED_TODOS } from './Todos';

export function filterTodos(tab) {
    let startTime = performance.now();
    while (performance.now() - startTime < 300) {
        // Do nothing for 300 ms to emulate extremely slow code
    };

    return CREATED_TODOS.filter(todo => {
        if (tab === FILTER_TYPES[0]) {
            return true;
        } else if (tab === FILTER_TYPES[1]) {
            return !todo.completed;
        } else if (tab === FILTER_TYPES[2]) {
            return todo.completed;
        }
    });
};

export function createTodos(itemsToCreate = 7) {
    const NEW_TODOS_CREATED = [];
    for (let i = 0; i < itemsToCreate; i++) {
        NEW_TODOS_CREATED.push({
            id: i,
            text: "Todo " + (i + 1),
            completed: Math.random() > 0.5
        });
    }
    return NEW_TODOS_CREATED;
};
