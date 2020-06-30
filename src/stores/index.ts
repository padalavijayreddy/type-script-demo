// All the stores will be initialised here
import TodoService from '../services/TodoService/index.api'

import TodoStore from './TodoStore'
import PostStore from '../PostModule/stores/PostStore'
import PostService from '../PostModule/services/PostServices/index.api'

const todoStore = new TodoStore(new TodoService())
const postStore = new PostStore(new PostService())

const stores = {
  todoStore,
  postStore
}

export default stores
