import { useState, useMemo } from 'react';
import { filterTodos } from '../../selector/utils';
import { BUTTONS_CLASSES, BUTTONS } from './constants';
import { MemoizedTodos  } from '../../selector/Todos'
import { FILTER_TYPES } from '../../selector/constants'

const MemoExample = () => {
    console.log('memo example rendered');

    const [filterTypeSelected, setFilterTypeSelected] = useState(FILTER_TYPES[0]);
    const [randomNumber, setRandomNumber] = useState(Math.random());

    const visibleTodos = useMemo(
        () => {
            console.log(`Getting todos by ${filterTypeSelected}`);
            return filterTodos(filterTypeSelected)
        },
        [filterTypeSelected]
    );

    const handleButtonPressed = ({ target: { value: filterBy, className } }) => {
        if (className === BUTTONS_CLASSES[0]) {
            filterBy !== filterTypeSelected && setFilterTypeSelected(filterBy);

        } else if ((className === BUTTONS_CLASSES[1])) {
            setRandomNumber(Math.random());
        };
    };

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
            <MemoizedTodos 
                visibleTodos={visibleTodos}
                stateInactive /* Prevent todos local state change */
            />
        </>
    );
};

export default MemoExample;
