import React, { Component } from 'react'
import { Home } from '$components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as candidatesActionCreators from '$redux/candidates'
import * as byLocationActionCreators from '$redux/byLocation'

class HomeContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      candidates: [],
    }
  }
  componentDidMount () {
    const props = this.props

    props
      .fetchAndHandleCandidates()
      .then((data) => {
        props.getCandidatesByLocation(data)
      })
  }

  render () {
    const props = this.props

    console.log("I am from render method!")
    if (props.candidates.isFetching) {
      return (
        <div>{'Loading...'}</div>
      )
    }

    return (
      <Home
        candidates={props.allCandidates}
        data={props.candidates.data}
      />
    )
  }
}

const mapStateToProps = ({ candidates, allCandidates }) => {
  return {
    candidates,
    allCandidates
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...candidatesActionCreators, ...byLocationActionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
