import { useState, useEffect } from 'react';
import { filterTodos } from '../../selector/utils';
import { BUTTONS_CLASSES, BUTTONS } from './constants';
import { Todos } from '../../selector/Todos';
import { FILTER_TYPES } from '../../selector/constants';

const UseEffectExample = () => {
    console.log('use effect example rendered');

    const [filterTypeSelected, setFilterTypeSelected] = useState(FILTER_TYPES[0]);
    const [randomNumber, setRandomNumber] = useState(Math.random());
    const [todosToShow, setTodosToShow] = useState([]);

    const handleButtonPressed = ({ target: { value: filterBy, className } }) => {
        if (className === BUTTONS_CLASSES[0]) {
            filterBy !== filterTypeSelected && setFilterTypeSelected(filterBy);

        } else if ((className === BUTTONS_CLASSES[1])) {
            setRandomNumber(Math.random());
        };
    };

    useEffect(() => {
        console.log('effect triggered');
        const FILTERED_TODOS = filterTodos(filterTypeSelected);
        setTodosToShow(FILTERED_TODOS);
    }, [filterTypeSelected]);

    return (
        <>
            <div
                className="controls-container"
                onClick={handleButtonPressed}
            >
                {BUTTONS.map(button => (
                    <button
                        key={`button-${button.text}`}
                        className={button.className}
                        value={button.value}
                    >
                        {button.text}
                    </button>
                ))}
            </div>
            <p>{randomNumber}</p>
            <Todos visibleTodos={todosToShow} />
        </>
    );
};

export default UseEffectExample;
