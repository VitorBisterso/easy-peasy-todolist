import React, { useState } from 'react'
import { useStoreActions } from 'easy-peasy'

import './styles.css'

const AddTodo = () => {
  const onAdd = useStoreActions(actions => actions.todos.add)

  const [inputText, setInputText] = useState('')

  return (
    <div className="add-todo-container">
      <input
        className="add-todo-input"
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        placeholder="Type your todo here..."
      />
      <button
        className="add-todo-button"
        type="button"
        onClick={() => {
          if (inputText) {
            onAdd(inputText)
            setInputText('')
          }
        }}
      >
        Add
      </button>
    </div>
  )
}

export default AddTodo
