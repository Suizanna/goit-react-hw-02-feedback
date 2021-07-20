import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button
      type="button"
      className={s.button}
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
}
// 2 вариант
// function FeedbackOptions({ onLeaveFeedback }) {
//   return (
//     <div>
//       <button className={s.button} onClick={onLeaveFeedback} name="good">
//         Good
//       </button>
//       <button className={s.button} onClick={onLeaveFeedback} name="neutral">
//         Neutral
//       </button>
//       <button className={s.button} onClick={onLeaveFeedback} name="bad">
//         Bad
//       </button>
//     </div>
//   );
// }
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
