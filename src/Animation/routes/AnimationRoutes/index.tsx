import React, { Component } from 'react'
import getItemsForAnimation from '../../fixtures/getItemsForAnimation.json'
import { Animation, ItemIcons } from './styledComponents'
import { Item } from '../../components/Item'
import { Target } from '../../components/Target'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Board } from '../../components/Board'
import { Card } from '../../components/Card'
import './AnimationRoutes.css'

@observer
class AnimationRoute extends Component {
  @observable items = getItemsForAnimation

  deleteItem = (id: number) => {
    console.log(this.items, id)
    this.items = this.items.filter(eachId => eachId.id !== id)
  }

  render() {
    return (
      <Animation>
        <div draggable>Draggable</div>
        <div className='flexbox'>
          <Board id='board-1' className='board'>
            <Card id='card-1' className='card'>
              <p>Card one</p>
            </Card>
          </Board>

          <Board id='board-2' className='board'>
            <Card id='card-2' className='card'>
              <p>Card two</p>
            </Card>
          </Board>
        </div>
        {/* <div className='m-120'>
          <ItemIcons>
            {this.items.map(eachItem => (
              <Item
                key={eachItem.id}
                item={eachItem}
                handleDrop={id => this.deleteItem(id)}
              />
            ))}
          </ItemIcons>
          <Target />
        </div> */}
      </Animation>
    )
  }
}

export default AnimationRoute
