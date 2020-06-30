import React, { Component } from 'react'
import { PostsList } from '../../components/PostsList'
import { PostWrapper } from './styledComponents'
import { inject, observer } from 'mobx-react'
import PostStore from '../../stores/PostStore'

interface PostsRouteProps {}

interface InjectedProps extends PostsRouteProps {
  postStore: PostStore
}

@inject('postStore')
@observer
class PostsRoute extends Component {
  componentDidMount() {
    this.getPosts()
  }

  getInjectedProps = (): InjectedProps => this.props as InjectedProps

  getPostStore = () => {
    return this.getInjectedProps().postStore
  }

  getPosts = () => {
    this.getPostStore().getPostsList()
  }

  render() {
    const { posts } = this.getPostStore()
    return (
      <PostWrapper>
        <PostsList posts={posts} />
      </PostWrapper>
    )
  }
}

export { PostsRoute }
