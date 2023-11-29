/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
);

const Statistics = (props) => {
  return (
    <>
      <h1>statistics</h1>
      {props.good !== 0 || props.neutral !== 0 || props.bad !== 0 ? (
        <table>
          <tbody>
            <tr>
              <td>good:</td>
              <td>{props.good}</td>
            </tr>
            <tr>
              <td>neutral:</td>
              <td>{props.neutral}</td>
            </tr>
            <tr>
              <td>bad:</td>
              <td>{props.bad}</td>
            </tr>
            <tr>
              <td>all:</td>
              <td>{props.sum}</td>
            </tr>
            <tr>
              <td>average:</td>
              <td>{isNaN(props.avg) ? 'N/A' : props.avg}</td>
            </tr>
            <tr>
              <td>positive:</td>
              <td>{isNaN(props.goodavg) ? 'N/A' : props.goodavg + '%'}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};



const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [sum, setSum] = useState(0);
  const [avg, setAvg] = useState(0);
  const [goodavg, setGoodavg] = useState(0);

  const setToValue1 = () => {
    setGood((prevGood) => prevGood + 1);
  };
  const setToValue2 = () => {
    setNeutral((newValue) => newValue + 1);
  };
  const setToValue3 = () => {
    setBad((newValue) => newValue + 1);
  };
  const setToValue4 = () => {
    setSum(good + bad + neutral);
  };
  const setToValue5 = () => {
    setAvg((good + bad * -1) / (good + bad + neutral));
  };
  const setToValue6 = () => {
    setGoodavg((good / (good + bad + neutral)) * 100);
  };

  useEffect(() => {
    setSum(good + bad + neutral);
    setAvg((good + bad * -1) / (good + bad + neutral));
    setGoodavg((good / (good + bad + neutral)) * 100);
  }, [good, bad, neutral]);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => { setToValue1(good); setToValue4(); setToValue5(); setToValue6(); }} text="good" />
      <Button handleClick={() => { setToValue2(neutral); setToValue4(); setToValue5(); setToValue6(); }} text="neutral" />
      <Button handleClick={() => { setToValue3(bad); setToValue4(); setToValue5(); setToValue6(); }} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum} avg={avg} goodavg={goodavg} />
    </div>
  );
};

export default App;