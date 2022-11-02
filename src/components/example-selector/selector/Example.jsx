import { useState } from 'react';
import Selector from './Selector';
import { OPTIONS } from './options';

import './Example.css';

const Examples = () => {
    const [selectedOption, setSelectedOption] = useState(OPTIONS[0].title);

    const [EXAMPLE_COMPONENT, EXAMPLE_FACTS] = OPTIONS.map(example => {
        if (example.title === selectedOption) {
            return [
                example.component,
                example.facts
            ];
        }
    }).filter(example => example)[0];

    return (
        <>
            <Selector
                onPressOption={setSelectedOption}
                selectedOption={selectedOption}
            />
            <div className="example-container" >
                <div className="example" >
                    <h1 className='example-title'>
                        {selectedOption} Example
                    </h1>
                    <div className='example-results' >
                        {EXAMPLE_COMPONENT}
                    </div>
                </div>
                <div className="example-facts-container" >
                    {EXAMPLE_FACTS.map((fact, index) => (
                        <span key={`${selectedOption}-fact-${index}`}>{fact}</span>
                    ))}
                </div>
            </div>
        </>
    )
};


export default Examples;
