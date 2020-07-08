import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next'

interface TodoFooterProps extends WithTranslation {
  todosLeftCount: number
}

@observer
class TodoFooter extends Component<TodoFooterProps> {
  render() {
    const { t } = this.props
    const { todosLeftCount } = this.props
    return <b>{t('todos:todosLeft', { count: todosLeftCount })}</b>
  }
}

export default withTranslation('', {})(TodoFooter)
