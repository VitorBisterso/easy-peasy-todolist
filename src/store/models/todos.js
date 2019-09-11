import uuid from 'uuid'
import { action } from 'easy-peasy'

const todosModel = {
  items: [],
  add: action((state, payload) => {
    const todo = {
      id: uuid.v4(),
      title: payload,
      isCompleted: false
    }
    state.items.push(todo)
  }),
  toggle: action((state, payload) => {
    state.items = state.items.map(item =>
      item.id === payload ? { ...item, isCompleted: !item.isCompleted } : item
    )
  }),
  delete: action((state, payload) => {
    state.items = state.items.filter(item => item.id !== payload)
  })
}

export default todosModel
