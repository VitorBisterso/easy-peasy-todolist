import { action } from 'easy-peasy'

const todosModel = {
  items: [],
  add: action((state, payload) => {
    state.items.push(payload)
  })
}

export default todosModel
