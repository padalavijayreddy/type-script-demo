import React, { Component } from 'react'
import withComponentHeader from '../../hocs/withComponentHeader'
import {
  ColorCompoenent,
  FirstColor,
  SecondColor,
  ThirdColor
} from './styledComponents'

interface HocsComponentProps {
  vijay: string
}

class HocsComponent extends Component<HocsComponentProps> {
  render() {
    const { vijay } = this.props
    return (
      <ColorCompoenent>
        <FirstColor>{vijay}</FirstColor>
        <SecondColor>{vijay}</SecondColor>
        <ThirdColor>{vijay}</ThirdColor>
      </ColorCompoenent>
    )
  }
}

export default withComponentHeader(HocsComponent)
