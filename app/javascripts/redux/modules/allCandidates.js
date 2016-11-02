export function getAllCandidates(candidates) {
	return {
		type : 'GET_ALL_CANDIDATES',
		candidates
	}
}

const allCandidates = (state = [], action) => {
	if (action.candidates && action.type === 'GET_ALL_CANDIDATES') {
		return Object.keys(action.candidates)
	}

	return state
}

export default allCandidates
