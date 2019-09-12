import React from 'react'
import { useStoreState } from 'easy-peasy'
import TodoItem from '../TodoItem'

import './styles.css'

const TodoList = () => {
  const todos = useStoreState(state => state.todos.items)

  return todos.length === 0 ? (
    <p className="todo-list-empty">You don&apos;t have todos...</p>
  ) : (
    <div className="todo-list-todos">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
