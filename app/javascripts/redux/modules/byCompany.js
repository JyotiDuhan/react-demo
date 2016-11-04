import { mapMaker } from '../helpers/helpers'

/**
 * Action Creator to create map of users by company(will be used while filtering)
 * @param  {Object} candidates  Formatted map of candidates
 * @return {Object}            Action
 */
export function getCandidatesByCompany (candidates) {
  return {
    type: 'GET_CANDIDATES_BY_COMPANY',
    candidates,
  }
}

/**
 * Reducer to group candidates by company name
 * @param  {Object} state  Map of formatted candidates
 * @param  {Object} action Action returned by action creator
 * @return {Object}        Candidates Grouped by company
 */
const candidatesByCompany = (state = {}, action) => {
  if (action.candidates && action.type === 'GET_CANDIDATES_BY_COMPANY') {
    return mapMaker('current_company', action.candidates)
  }

  return state
}

export default candidatesByCompany
