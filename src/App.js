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
    bad: 0
  };
  //чтобы изменить state у нас есть метод this.setState,который принимает объект или callback ф-цию
  //setState всегда асинхронный
  //prevState-параметр ф-ции, может называтся как угодно
  //в этот параметр аргументом записывается старый state
  addFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1 //от предыдущего состояния +1
    })
    );
  };
  //вспомогательные методы //публичное свойство class
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };
  
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
          