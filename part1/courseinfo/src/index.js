import React from 'react'
import ReactDOM from 'react-dom'

// This is the main App component.
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

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

// This is a Header component.
const Header = (props) => {
  console.log(props)
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