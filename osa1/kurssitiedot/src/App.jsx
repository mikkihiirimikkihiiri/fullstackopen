/* eslint-disable no-unused-labels */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course.name}</h1>
        
      </div>
    );
  };

  const Part = (props) => {
    return (
      <p>
        {props.partss.name} {props.partss.exercises}
      </p>
    );
  };

  const Content = (props) => {
    return (
      <div>
        <Part partss={props.parts[0]} />
        <Part partss={props.parts[1]} />
        <Part partss={props.parts[2]} />
      </div>
    );
  };

  const Total = (props) => {
    const totalExercises =
    props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
    return (
      <div>
        <p>Total exercises: {totalExercises}</p>
      </div>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
