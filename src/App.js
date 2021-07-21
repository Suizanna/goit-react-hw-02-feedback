import { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
// re-export
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

class App extends Component {
  //внутреннее состояние, которое изменяется методами самого class
  //в зависимости от state рендерит разметку
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  //чтобы изменить state у нас есть метод this.setState,который принимает объект или callback ф-цию
  //setState всегда асинхронный
  //prevState-параметр ф-ции, может называтся как угодно
  //в этот параметр аргументом записывается старый state
  addFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  // 2 вариант. в FeedbackOptions смотреть
  //   addFeedback = e => {
  //     this.setState(prevState => {
  //       return {
  //         // вычисляемое свойство объекта [e.target.name] поэтому в []
  //         [e.target.name]: prevState[e.target.name] + 1,
  //       };
  //     });
  //   };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
    // 2 вар
    // const { good, neutral, bad } = this.state;
    // return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  };

  //у class обязательный метод render(), который возвращаеят только разметку
  render() {
    // console.log(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            // 2 вар
            // options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
export default App;
