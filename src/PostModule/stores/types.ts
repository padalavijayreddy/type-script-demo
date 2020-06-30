export interface PostObject {
  userId: number
  id: number
  title: string
  body: string
}

export interface GetPostsResponse {
  posts: Array<PostObject>
}
