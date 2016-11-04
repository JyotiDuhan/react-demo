/**
 * Action Creator
 * @param  {Array} candidates  List of candidtes to update
 * @return {Object}            action
 */
export function getAllCandidates (candidates) {
  return {
    type: 'GET_ALL_CANDIDATES',
    candidates,
  }
}


/**
 * Reducer to create an array of all the candidtes
 * @param  {Array}  state   List of Candidates
 * @param  {Object} action  Action returned from `getAllCandidates` action creator
 * @return {Array}         Updated state of candidates
 */
const allCandidates = (state = [], action) => {
  if (action.candidates && action.type === 'GET_ALL_CANDIDATES') {
    window.qq = Object.keys(action.candidates)
    return Object.keys(action.candidates)
  }

  return state
}

export default allCandidates
