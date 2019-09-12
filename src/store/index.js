import { createStore } from 'easy-peasy'
import storeModel from './models/store'

const store = createStore(storeModel, {
  disableImmer: true
})

export default store
