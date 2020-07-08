import React from 'react'

import { HOCWrapper, ComponentName } from './styledComponents'
import { observable } from 'mobx'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

function withComponentHeader<T>(WrappedComponent: React.ComponentType<T>) {
  class Hoc extends React.Component<T> {
    @observable vijay

    constructor(props) {
      super(props)
      this.vijay = 'good boy'
    }

    render() {
      const props = this.props as T
      return (
        <HOCWrapper>
          <ComponentName>{getDisplayName(WrappedComponent)}</ComponentName>
          <WrappedComponent {...props} vijay={this.vijay} />
        </HOCWrapper>
      )
    }
  }
  return Hoc
}

export default withComponentHeader
