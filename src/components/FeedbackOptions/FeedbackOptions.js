import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions( {options,  onLeaveFeedback}) {
    return options.map(option => (
        <button 
            type="button"
            className={s.button}
            key={option}
            onClick={()=> onLeaveFeedback(option)}
        >
            {option}
        </button>
  ))
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
}
 
export default FeedbackOptions;

//из библиотеки React берем експорт React.Component и создаем class
//у class обязательный метод render(), который возвращаеят только разметку

// class FeedbackOptions extends React.Component {
//     render() {
//         return (    
//         <button type="button"> {option}</button>       
//         )
//     }
//  }
