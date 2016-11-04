import React, { Component} from 'react'
import { HeaderContainer } from '$containers'
import * as stylesIgnored from './styles.scss'

class MainContainer extends Component {
  render () {
    return (
      <div>
        <HeaderContainer />
        {this.props.children}
      </div>
    )
  }
}

export default MainContainer
