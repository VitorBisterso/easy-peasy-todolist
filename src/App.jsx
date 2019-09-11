import React from 'react'
import AddTodo from './components/AddTodo'

import './app.css'

const App = () => (
  <div className="app-container">
    <p className="app-title">Todo list using easy-peasy state management!</p>
    <AddTodo />
  </div>
)

export default App
