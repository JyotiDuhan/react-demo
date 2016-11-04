import React, { Component, PropTypesIgnored } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as filterActionCreators from '$redux/filters'
import { Header } from '$components'

class HeaderContainer extends Component {
  handleCompanyChange = (e) => {
    const props = this.props

    this.props.applyFilterByCompanyThunk (e.target.value)
  }

  handleCityChange = (e) => {
    const props = this.props

    this.props.applyFilterByLocationThunk (e.target.value)
  }

  render () {
    const props = this.props

    return (
      <Header
        handleClick={props.showHideFilters}
        showFilter={props.showFilter}
        allCompanies={props.allCompanies}
        allCities={props.allCities}
        onCompanyChange={this.handleCompanyChange}
        onCityChange={this.handleCityChange}/>
    )
  }
}

const mapStateToProps = ({ filters, candidates, candidatesByLocation, candidatesByCompany }) => {
  return {
    showFilter: filters.showFilter,
    currentCandidates: filters.candidates,
    allCandidatesByCity: candidatesByLocation,
    allCandidatesByCompany: candidatesByCompany,
    allCompanies: candidates.allCompanies,
    allCities: candidates.allCities,
    isFetching: candidates.isFetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(filterActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
