import { getCandidates } from '$api/candidates'
import { getAllCandidates } from './allCandidates'
import { formatCandidates } from '$utils/formatters/candidates'
import { resetFilters } from './filters'

/**
 * Action creator to start fetching the data from API
 * @return {Object} action
 */
function fetchingCandidates () {
  return {
    type: 'FETCHING_CANDIDATES',
  }
}

/**
 * If there is any error while making the API call
 * @param  {Error} error  Error object
 * @return {Object}       Action
 */
function fetchingCandidatesError (error) {
  return {
    type: 'FETCHING_CANDIDATES_ERROR',
    error: error,
  }
}

/**
 * If data is fetched successfully from the API
 * @param  {Object} options.formattedCandidates  Formatted data that came from the API
 * @param  {Array} options.allCompanies          Union of all companies that were marked as current company(will be used for filtering)
 * @param  {Object} options.allCities           Union of all the cities in which candidate are staying currently
 * @return {Object}                             Action
 */
function fetchingCandidatesSuccess ({formattedCandidates, allCompanies, allCities}) {
  return {
    type: 'FETCHING_CANDIDATES_SUCCESS',
    candidates: formattedCandidates,
    allCompanies,
    allCities,
  }
}

// Async Action Creator
/**
 * - Fetches the data from API
 * - Formates the data
 * - dispatches Actions accordingly
 * @return {Promise}
 */
export function fetchAndHandleCandidates () {
  return (dispatch) => {
    // Start fetching, notify to UI
    dispatch(fetchingCandidates())

    // API call, present at API directory.
    return getCandidates()
      .then((result) => {
        // Format Data
        const forattedCandidates = formatCandidates(result.data.candidates)

        // Create list of all candidates
        dispatch(getAllCandidates(forattedCandidates.formattedCandidates))
        // Reset filters for the first time
        dispatch(resetFilters(Object.keys(forattedCandidates.formattedCandidates)))
        dispatch(fetchingCandidatesSuccess(forattedCandidates))

        return forattedCandidates.formattedCandidates
      })
      // Error Handling
      .catch((error) => {
        dispatch(fetchingCandidatesError(error))
      })
  }
}

// Initial state for candidate reducer
const initialCandidateState = {
  isFetching: false,
  error: '',
}

// Reducer for `candidates` part of state.
export default function candidates (state = initialCandidateState, action) {
  switch (action.type) {
    case 'FETCHING_CANDIDATES':
      return {
        ...state,
        isFetching: true,
      }
    case 'FETCHING_CANDIDATES_ERROR':
      return {
        ...state,
        isFetching: false,
        error: action.error || 'something is not right, please reload the page.',
      }
    case 'FETCHING_CANDIDATES_SUCCESS':
      return {
        ...state,
        isFetching: false,
        error: '',
        data: action.candidates,
        allCompanies: action.allCompanies,
        allCities: action.allCities,
      }
    default:
      return state
  }
}
