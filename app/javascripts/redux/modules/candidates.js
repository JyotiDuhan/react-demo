import { getCandidates } from '$api/candidates'
import { getAllCandidates } from './allCandidates'
import { formatCandidates } from '$utils/formatters/candidates'

function fetchingCandidates () {
  return {
    type: 'FETCHING_CANDIDATES',
  }
}

function fetchingCandidatesError (error) {
  return {
    type: 'FETCHING_CANDIDATES_ERROR',
    error: error,
  }
}

function fetchingCandidatesSuccess (candidates) {
  return {
    type: 'FETCHING_CANDIDATES_SUCCESS',
    candidates: candidates,
  }
}

// Async Action Creator
export function fetchAndHandleCandidates () {
  return (dispatch) => {
    dispatch(fetchingCandidates())

    return getCandidates()
      .then((result) => {
        const forattedCandidates = formatCandidates(result.data.candidates)

        dispatch(getAllCandidates(forattedCandidates))
        dispatch(fetchingCandidatesSuccess(forattedCandidates))

        return forattedCandidates
      })
      .catch((error) => {
        dispatch(fetchingCandidatesError(error))
      })
  }
}

const initialCandidateState = {
  isFetching: false,
  error: '',
}

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
      }
    default:
      return state
  }
}
