import { networkCallWithApisauce } from '../../../utils/APIUtils'
import PostService from './index'
import { POST_BASE_URL } from '../../../constants/EnvironmentConstants'
import endpoints from '../../../services/endpoints'
import { apiMethods } from '../../../constants/APIConstants'
import { create } from 'apisauce'

class PostAPIService implements PostService {
  api: Record<string, any>

  constructor() {
    this.api = create({
      baseURL: POST_BASE_URL
    })
  }

  async getPostsAPI() {
    return networkCallWithApisauce(
      this.api,
      endpoints.todos.todoList,
      {},
      apiMethods.get
    )
  }
}

export default PostAPIService
