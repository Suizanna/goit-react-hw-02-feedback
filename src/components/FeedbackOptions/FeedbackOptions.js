import React from 'react';
// import PropTypes from 'prop-types';
// import s from './FeedbackOptions.module.css';

//из библиотеки React берем експорт React.Component и создаем class
//у class обязательный метод render(), который возвращаеят только разметку

class Feedback extends React.Component {
    render() {
        return (
            <div className="Container">
                <button type="button">Good</button>
            </div>
        )
    }
 }


export default Feedback;