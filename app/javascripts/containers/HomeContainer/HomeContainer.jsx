import React, { Component } from 'react'
import { Home } from '$components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as candidatesActionCreators from '$redux/candidates'
import * as byLocationActionCreators from '$redux/byLocation'
import * as byCompanyActionCreators from '$redux/byCompany'

class HomeContainer extends Component {
  componentDidMount () {
    const props = this.props

    props
      .fetchAndHandleCandidates()
      .then((data) => {
        props.getCandidatesByLocation(data)
        props.getCandidatesByCompany(data)
      })
  }

  render () {
    const props = this.props

    if (props.candidates.isFetching) {
      return (
        <div>{'Loading...'}</div>
      )
    }

    return (
      <Home
        candidates={props.allCandidates}
        data={props.candidates.data} />
    )
  }
}

const mapStateToProps = ({ candidates, filters }) => {
  return {
    candidates,
    allCandidates: filters.candidates,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...candidatesActionCreators, ...byLocationActionCreators, ...byCompanyActionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
