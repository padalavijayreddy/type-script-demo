import React, { Component } from 'react'
import { PostsList } from '../../components/PostsList'
import { PostWrapper, ButtonWrapper, LanguageButton } from './styledComponents'
import { inject, observer } from 'mobx-react'
import PostStore from '../../stores/PostStore'
import i18n from '../../../i18n'
import { withTranslation, WithTranslation } from 'react-i18next'

interface PostsRouteProps extends WithTranslation {}

interface InjectedProps extends PostsRouteProps {
  postStore: PostStore
}

@inject('postStore')
@observer
class PostsRoute extends Component<PostsRouteProps> {
  componentDidMount() {
    this.getPosts()
  }

  onChangeLanguage = value => {
    i18n.changeLanguage(value)
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
    const { t } = this.props
    return (
      <PostWrapper>
        <p>{t('posts:postDetails')}</p>
        <p>{t('posts:postWrapper')}</p>
        <p>{t('posts:PostMatters')}</p>
        <p>{t('posts:postIndia')}</p>
        <ButtonWrapper>
          <LanguageButton onClick={() => this.onChangeLanguage('en')}>
            English
          </LanguageButton>
          <LanguageButton onClick={() => this.onChangeLanguage('te')}>
            Telugu
          </LanguageButton>
        </ButtonWrapper>
        <PostsList posts={posts} />
      </PostWrapper>
    )
  }
}
export default withTranslation('translation', { withRef: true })(PostsRoute)
