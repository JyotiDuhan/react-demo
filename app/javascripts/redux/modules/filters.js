/**
 * Thunk(needed to access store and state in reducer),
 * @param  {String} filterValue  Value selected in company drop down
 * @return {Object}              Action
 */
export function applyFilterByCompanyThunk (filterValue) {
  return (dispatch, getState) => {
    const state = getState()

    dispatch(applyFilterByCompany(state, filterValue))
  }
}

/**
 * Thunk for location
 * @param  {String} filterValue Value selected in Locatoin dropdown
 * @return {Object}             Action
 */
export function applyFilterByLocationThunk (filterValue) {
  return (dispatch, getState) => {
    const state = getState()

    dispatch(applyFilterByLocation(state, filterValue))
  }
}

/**
 * Actoin creator to apply company filter
 * @param  {Object} state        Store's state reference
 * @param  {String} filterValue  value selected in drop down
 * @return {Object}              Action
 */
export function applyFilterByCompany (state, filterValue) {
  return {
    type: 'APPLY_FILTER_BY_COMPANY',
    filterValue,
    candidatesByCompany: state.candidatesByCompany,
    candidatesByLocation: state.candidatesByLocation,
    allCandidates: state.allCandidates,
  }
}

/**
 * Actoin creator to apply location filter
 * @param  {Object} state        Store's state reference
 * @param  {String} filterValue  value selected in drop down
 * @return {Object}              Action
 */
export function applyFilterByLocation (state, filterValue) {
  return {
    type: 'APPLY_FILTER_BY_LOCATION',
    filterValue,
    candidatesByCompany: state.candidatesByCompany,
    candidatesByLocation: state.candidatesByLocation,
    allCandidates: state.allCandidates,
  }
}

/**
 * To reset the filters
 * @param  {Object} candidates
 * @return {Object}            Action
 */
export function resetFilters (candidates) {
  return {
    type: 'RESET_FILTERS',
    candidates,
  }
}

// Show hide the filters
export function showHideFilters () {
  return {
    type: 'SHOW_FILTERS',
  }
}

// Sub reducer of `filters` reducer(this can be optimized a little)
const applyFilter = (action, currentFilter, state) => {
  const {candidatesByLocation, candidatesByCompany, type, filterValue, allCandidates} = action

  switch (type) {
    case 'APPLY_FILTER_BY_LOCATION':
      if (currentFilter.length > 1) {
        return candidatesByCompany[state.company].filter((candidate) => candidatesByLocation[filterValue].indexOf(candidate) > -1)
      } else {
        if (filterValue !== '') {
          return candidatesByLocation[filterValue]
        } else if (currentFilter.length === 1 && filterValue === '') {
          return candidatesByCompany[state.company]
        }

        return allCandidates
      }
    case 'APPLY_FILTER_BY_COMPANY':
      if (currentFilter.length > 1) {
        return candidatesByLocation[state.location].filter((candidate) => candidatesByCompany[filterValue].indexOf(candidate) > -1)
      } else {
        if (filterValue !== '') {
          return candidatesByCompany[filterValue]
        } else if (currentFilter.length === 1 && filterValue === '') {
          return candidatesByLocation[state.location]
        }

        return allCandidates
      }
  }
}

// Reducer to track all the filters
const initialState = {
  currentFilter: [],
  candidates: [],
  showFilter: false,
}

export default function filters (state = initialState, action) {
  let currentFilter = []

  switch (action.type) {
    case 'APPLY_FILTER_BY_COMPANY':
      if (action.filterValue.length > 0) {
        currentFilter = state.currentFilter.indexOf('byCompany') > -1 ? state.currentFilter : state.currentFilter.concat('byCompany')
      } else {
        const index = state.currentFilter.indexOf('byCompany')

        currentFilter = index > -1
          ? state.currentFilter.filter((value) => (value !== 'byCompany'))
          : state.currentFilter
      }

      return {
        ...state,
        currentFilter,
        company: action.filterValue.length > 0 ? action.filterValue : undefined,
        candidates: applyFilter(action, currentFilter, state),
      }
    case 'APPLY_FILTER_BY_LOCATION':
      if (action.filterValue.length > 0) {
        currentFilter = state.currentFilter.indexOf('byLocation') > -1 ? state.currentFilter : state.currentFilter.concat('byLocation')
      } else {
        const index = state.currentFilter.indexOf('byLocation')
        currentFilter = index > -1
          ? state.currentFilter.filter((value) => (value !== 'byLocation'))
          : state.currentFilter
      }

      return {
        ...state,
        currentFilter,
        location: action.filterValue.length > 0 ? action.filterValue : undefined,
        candidates: applyFilter(action, currentFilter, state),
      }
    case 'RESET_FILTERS':
      return {
        ...state,
        currentFilter: [],
        candidates: action.candidates,
      }
    case 'SHOW_FILTERS':
      return {
        ...state,
        showFilter: !state.showFilter,
      }
    default:
      return state
  }
}
