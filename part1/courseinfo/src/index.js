import React from 'react'
import ReactDOM from 'react-dom'

// This is the main App component.
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  console.log(parts[0].name)
  console.log(parts[1].name)
  console.log(parts[2].name)
  console.log(parts[0].exercises)
  console.log(parts[1].exercises)
  console.log(parts[2].exercises)

  return (
    <div>
      <Header course = {course} />
      <Content part = {parts[0].name} exercises = {parts[0].exercises} />
      <Content part = {parts[1].name} exercises = {parts[1].exercises} />
      <Content part = {parts[2].name} exercises = {parts[2].exercises} />
      <Total exercises1 = {parts[0].exercises} exercises2 = {parts[1].exercises} exercises3 = {parts[2].exercises} />
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
  return (
    <div>
      <p>{props.part}: {props.exercises}</p>
    </div>
  )
}

// This is a Total component.
const Total = (props) => {
  return (
    <p>
      Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))