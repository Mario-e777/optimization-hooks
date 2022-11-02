import { useMemo } from 'react';
import { OPTIONS } from './options';

import './Selector.css';

const SelectorOption = ({ optionText, isOptionSelected }) => (
  <a className={`selector-option ${isOptionSelected && 'selector-option-active'}`} >
    {optionText}
  </a>
);
const Selector = ({ onPressOption, selectedOption }) => {

  const OPTIONS_TITLES = useMemo(() => {
    return OPTIONS.map(example => example.title);
  }, []);

  const handleOptionPressed = ({ target: { innerText: OPTION_TEXT } }) => {
    if (!OPTIONS_TITLES.includes(OPTION_TEXT)) return;
    onPressOption(OPTION_TEXT);
  };

  return (
    <header
      className="selector-container"
      onClick={handleOptionPressed}
    >
      {OPTIONS.map(({ title }) => {
        return (
          <SelectorOption
            key={`selector-option-${title}`}
            optionText={title}
            isOptionSelected={title === selectedOption}
          />
        );
      })}
    </header>
  );
};

export default Selector;
