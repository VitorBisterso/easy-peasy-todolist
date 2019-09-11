import React from 'react'
import { useStoreActions } from 'easy-peasy'
import PropTypes from 'prop-types'

import './styles.css'

const TodoItem = ({ todo }) => {
  const toggleTodo = useStoreActions(actions => actions.todos.toggle)
  const deleteTodo = useStoreActions(actions => actions.todos.delete)

  const customStyle = todo.isCompleted ? { textDecoration: 'line-through' } : {}

  return (
    <div className="todo-item-container">
      <input
        type="checkbox"
        value={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
      />
      <div style={customStyle}>{todo.title}</div>
      <i className="fas fa-trash-alt" onClick={() => deleteTodo(todo.id)} />
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
