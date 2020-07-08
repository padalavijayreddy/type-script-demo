import React, { Component } from 'react'
import { AnimationButton } from '../../routes/AnimationRoutes/styledComponents'
import { DragSource } from 'react-dnd'

interface ItemProps {
  item: {
    id: number
    name: string
  }
  isDragging: any
  connectDragSource: any
  handleDrop: any
}

const itemSource = {
  beginDrag(props) {
    return props.item
  },
  endDrag(props, monitor, Component) {
    if (!monitor.didDrop()) {
      return
    }
    return props.handleDrop(props.item.id)
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class Item extends Component<ItemProps> {
  render() {
    const { isDragging, connectDragSource, item } = this.props
    const opacity = isDragging ? 0 : 1
    const { name } = item
    return connectDragSource(
      <div style={{ opacity }}>
        <AnimationButton>{name}</AnimationButton>
      </div>
    )
  }
}

export default DragSource('item', itemSource, collect)(Item)
