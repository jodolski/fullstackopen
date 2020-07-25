import React from 'react'
import ReactDOM from 'react-dom'

// This is the main App component.
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  console.log(part2.name);

  return (
    <div>
      <Header course = {course} />
      <Content part = {part1.name} exercises = {part1.exercises} />
      <Content part = {part2.name} exercises = {part2.exercises} />
      <Content part = {part3.name} exercises = {part3.exercises} />
      <Total exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises} />
    </div>
  )
}

// This is a Header component.
const Header = (props) => {
  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}

// This is a Content component.
const Content = (props) => {
  console.log("This is the Content console log:");
  return (
    <div>
      <p>{props.part}: {props.exercises}</p>
    </div>
  )
}

// This is a Total component.
const Total = (props) => {
  console.log(props.exercises1);
  return (
    <p>
      Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))