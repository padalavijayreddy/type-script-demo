import React, { Component } from 'react'
import { PostListWrapper } from './styledComponents'
import { Post } from '../Post'
import PostModel from '../../stores/PostModel'
import { observer } from 'mobx-react'

type PostListProps = {
  posts: Array<PostModel>
}

@observer
class PostsList extends Component<PostListProps> {
  render() {
    const { posts } = this.props
    return (
      <PostListWrapper>
        {posts.map(eachPost => {
          return <Post eachPost={eachPost} />
        })}
      </PostListWrapper>
    )
  }
}

export { PostsList }
