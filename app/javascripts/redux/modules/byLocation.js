export function getCandidatesByLocation(candidates) {
	return {
		type : 'GET_CANDIDATES_BY_LOCATION',
		candidates
	}
}

const candidatesByLocation = (state = {}, action) => {
	if (action.candidates && action.type === 'GET_CANDIDATES_BY_LOCATION') {
		const byLocation = {}
		const candidates = action.candidates

		for (const candidate in candidates) {
			const currentCandidate = candidates[candidate]
			const currentLocation = currentCandidate.current_location

			if (byLocation[currentLocation]) {
				byLocation[currentLocation].push(currentCandidate.uid)
			} else {
				byLocation[currentLocation] = [currentCandidate.uid]
			}
		}

		return byLocation
	}

	return state
}

export default candidatesByLocation
