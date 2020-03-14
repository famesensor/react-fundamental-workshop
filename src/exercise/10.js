// useState: counter

// http://localhost:3000/isolated/exercise/10

import React from 'react'

function Counter() {
  // 🐨 use React.useState here
  // 🐨 create an increment function that calls the state updater you get from
  //    React.useState to increment the count
  // 🐨 render the count you get from React.useState inside the button and use
  //    your increment function as the onClick handler.
  const [count, setCount] = React.useState(0)

  const increment = () => setCount(count+1)

  return <button onClick={increment}>{count}</button>
}

function Usage() {
  return <Counter />
}

export default Usage
