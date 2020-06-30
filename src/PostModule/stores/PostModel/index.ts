import { observable } from 'mobx'
import { PostObject } from '../types'

class PostModel {
  @observable userId!: number
  id: string
  @observable title!: string
  @observable body!: string

  constructor(post: PostObject) {
    this.userId = post.userId
    this.id = post.id.toString()
    this.title = post.title
    this.body = post.body
  }
}
export default PostModel
