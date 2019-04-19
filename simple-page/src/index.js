import React from 'react'

import SimpleComponent from 'simple-component'
import Cat from './assets/cat.png'

const App = () => {
  return (
    <div>
      <h1>hello</h1>
      <p>{process.env.SOME_URL}</p>
      <img src={Cat} />
      <SimpleComponent />
    </div>
  )
}

export default App
