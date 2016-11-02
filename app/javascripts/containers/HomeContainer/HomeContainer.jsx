import React, { Component } from 'react'
import { Home } from '$components'
import { getCandidates } from '$api'

class HomeContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      candidates: [],
    }
  }
  componentDidMount () {
    getCandidates()
    .then(function (info) {
      this.setState({
        candidates: info.data.candidates,
      })
    }.bind(this))
  }

  render () {
    if (this.state.candidates && this.state.candidates.length > 0) {
      return (
        <Home
          candidates={this.state.candidates} />
      )
    }

    return (
      <div>{'Loading...'}</div>
    )
  }
}

export default HomeContainer
