import React, { Component } from 'react'
import { observer } from 'mobx-react'
import PostModel from '../../stores/PostModel'
import { PostWrapper, PostBody } from './styledComponents'

type PostProps = {
  eachPost: PostModel
}

@observer
class Post extends Component<PostProps> {
  render() {
    const { eachPost } = this.props
    const { title, body } = eachPost
    return (
      <PostWrapper>
        <PostBody>{title}</PostBody>
        <PostBody>{body}</PostBody>
      </PostWrapper>
    )
  }
}

export { Post }
