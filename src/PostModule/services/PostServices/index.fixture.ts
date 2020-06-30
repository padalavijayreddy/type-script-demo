import PostService from './index'
import { resolveWithTimeout } from '../../../utils/TestUtils'
import getPostsResponse from '../../fixtures/getPostsResponse.json'

class PostFixtureService implements PostService {
  getPostsAPI() {
    return resolveWithTimeout(getPostsResponse)
  }
}

export default PostFixtureService
