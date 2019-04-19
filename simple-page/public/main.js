import ReactDOM from 'react-dom'
import React from 'react'

// import App from '../src'

const App = () => {
  return (
    <div>
      <h1>hello</h1>
      {/* <p>{process.env.SOME_URL}</p>
        <img src={Cat} />
        <SimpleComponent /> */}
    </div>
  )
}
console.log('hello')
ReactDOM.render(<App />, document.getElementById('root'))
