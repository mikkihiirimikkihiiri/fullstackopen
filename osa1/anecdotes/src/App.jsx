/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const getRandomAnecdotes= ()=> {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  }
  const vote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };
  const maxPoints = Math.max(...points); 
  const mostVotedIndex = points.indexOf(maxPoints); 
  const mostVotedAnecdote = anecdotes[mostVotedIndex]; 


  return (
    <div>
      <h1>anecdote of the day</h1>
      
      {anecdotes[selected]}
      {'votes:'+points[selected]}
      <div>
      <Button handleClick={() => getRandomAnecdotes()} text="next anecdote" />
      <Button handleClick={() => vote()} text="vote" />
      </div>
      <h1>anecdote with most votes</h1>
      {anecdotes[mostVotedIndex]}
      {'votes:'+ maxPoints}
    </div>
  )
}

export default App