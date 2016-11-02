import React, { Component, PropTypes } from 'react'
import { Header } from '$components'

class MainContainer extends Component {
  propTypes : {
    children : PropTypes.node.isRequired
  }

  render () {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default MainContainer
