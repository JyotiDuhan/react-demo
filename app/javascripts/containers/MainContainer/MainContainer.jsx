import React, { Component, PropTypes } from 'react'
import { HeaderContainer } from '$containers'
import * as stylesIgnored from './styles.scss'

class MainContainer extends Component {
  propTypes : {
    children : PropTypes.node.isRequired
  }

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
