import { observable, action, computed } from 'mobx'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import PostModel from '../PostModel'
import PostService from '../../services/PostServices'
import { PostObject } from '../types'

class PostStore {
  @observable posts!: Array<PostModel>
  @observable getPostAPIStatus!: APIStatus
  @observable getPostAPIError!: Error | null
  postAPIService: PostService

  constructor(PostAPIService) {
    this.postAPIService = PostAPIService
    this.init()
  }

  @action.bound
  init() {
    this.posts = []
    this.getPostAPIStatus = API_INITIAL
    this.getPostAPIError = null
  }

  @action.bound
  getPostsList() {
    const postListPromise = this.postAPIService.getPostsAPI()
    return bindPromiseWithOnSuccess(postListPromise)
      .to(this.setGetPostAPIStatus, response => {
        this.setGetPostAPIResponse(response)
      })
      .catch(error => {
        this.setGetPostAPIError(error)
      })
  }

  @action.bound
  setGetPostAPIStatus(apiStatus: APIStatus) {
    this.getPostAPIStatus = apiStatus
  }

  @action.bound
  setGetPostAPIError(apiError: Error | null) {
    this.getPostAPIError = apiError
    alert(apiError)
  }

  @action.bound
  setGetPostAPIResponse(apiResponse: Array<PostObject> | null) {
    console.log('apiResponse', apiResponse)
    if (apiResponse)
      this.posts = apiResponse.map(post => {
        return new PostModel(post)
      })
  }
}

export default PostStore
