/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Course.jsx
import React from 'react';

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Total = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );

  return (
    <div>
      <p>Total of exercises for this course: {totalExercises}</p>
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

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} partss={part} />
      ))}
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
        </div>
      ))}
    </div>
  );
};

export default Course;
