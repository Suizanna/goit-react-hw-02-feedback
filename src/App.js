import './App.css';
import { Component } from 'react';


class App extends Component {
//внутреннее состояние, которое изменяется методами самого class
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  addFeedback = () => {
     this.setState( (prevState) => prevState +1) //от предыдущее состояние
   };
  //вспомогательные методы //публичное свойство class
  countTotalFeedback = () =>{};
  countPositiveFeedbackPercentage = () => { };
  
    render() {
      return (
        <div>
          
        </div>
      )
    }
}



export default App;
