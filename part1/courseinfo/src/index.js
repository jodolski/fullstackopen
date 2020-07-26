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

// Here, we have to change from passing each object to a single array.
// We aren't going to use x[0].y to pass on a specific property.
// We'll be using just the array itself (i.e., parts).
  
  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts} />
      <Total parts = {parts} />
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
      <p>
        {props.parts[0].name}: {props.parts[0].exercises}
      </p>
      <p>
        {props.parts[1].name}: {props.parts[1].exercises}
      </p>
      <p>
        {props.parts[2].name}: {props.parts[2].exercises}
      </p>
    </div>
  )
}

// This is a Total component.
const Total = (props) => {
  return (
    <p>
      Number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))