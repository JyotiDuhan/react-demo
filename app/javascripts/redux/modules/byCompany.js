export function getCandidatesByCompany (candidates) {
  return {
    type: 'GET_CANDIDATES_BY_COMPANY',
    candidates,
  }
}

const candidatesByCompany = (state = {}, action) => {
  if (action.candidates && action.type === 'GET_CANDIDATES_BY_COMPANY') {
    const byCompany = {}
    const candidates = action.candidates

    for (const candidate in candidates) {
      const currentCandidate = candidates[candidate]
      const currentCompany = currentCandidate.current_company

      if (byCompany[currentCompany]) {
        byCompany[currentCompany].push(currentCandidate.uid)
      } else {
        byCompany[currentCompany] = [currentCandidate.uid]
      }
    }
    console.log(byCompany)
    return byCompany
  }

  return state
}

export default candidatesByCompany
