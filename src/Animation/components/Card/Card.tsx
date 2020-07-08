import React from 'react'

function Card(props) {
  const dragStart = e => {
    const target = e.target
    e.dataTransfer.setData('card_id', target.id)
    setTimeout(() => {
      target.style.display = 'none'
    }, 0)
  }

  const dragEnd = e => {
    e.preventDefault()
  }

  return (
    <div
      id={props.id}
      className={props.className}
      draggable
      onDragStart={dragStart}
      onDragEnd={dragEnd}
    >
      {props.children}
    </div>
  )
}

export { Card }
