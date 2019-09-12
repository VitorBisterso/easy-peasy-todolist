import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

import './app.css'

const App = () => (
  <div className="app-container">
    <p className="app-title">Todo list using easy-peasy</p>
    <div className="app-content">
      <AddTodo />
      <TodoList />
    </div>
  </div>
)

export default App
