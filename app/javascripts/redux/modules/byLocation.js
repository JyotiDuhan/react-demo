import { mapMaker } from '../helpers/helpers'

/**
 * Action Creator to create map of users by Location(will be used while filtering)
 * @param  {Object} candidates  Formatted map of candidates
 * @return {Object}            Action
 */
export function getCandidatesByLocation (candidates) {
  return {
    type: 'GET_CANDIDATES_BY_LOCATION',
    candidates,
  }
}

/**
 * Reducer to group candidates by location
 * @param  {Object} state  Map of formatted candidates
 * @param  {Object} action Action returned by action creator
 * @return {Object}        Candidates Grouped by locations
 */
const candidatesByLocation = (state = {}, action) => {
  if (action.candidates && action.type === 'GET_CANDIDATES_BY_LOCATION') {
    return mapMaker('current_location', action.candidates)
  }

  return state
}

export default candidatesByLocation
