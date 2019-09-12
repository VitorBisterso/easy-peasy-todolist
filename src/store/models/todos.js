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
    return {
      ...state,
      items: [...state.items, todo]
    }
  }),
  toggle: action((state, payload) => ({
    ...state,
    items: state.items.map(item =>
      item.id === payload ? { ...item, isCompleted: !item.isCompleted } : item
    )
  })),
  delete: action((state, payload) => ({
    ...state,
    items: state.items.filter(item => item.id !== payload)
  }))
}

export default todosModel
