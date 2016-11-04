{
	candidates: {
		isFetching,
		error,
		data : {
			[uid] : {
				current_company,
				current_location,
				current_role,
				first_name,
				last_name,
				profile_picture,
				total_experience,
				uid
			}
		}
	},
	allCandidates: ['uid', 'uid', 'uid'],
	candidatesByLocation: {
		['city'] : ['uid', 'uid', 'uid']
		['city1'] : ['uid', 'uid', 'uid']
		['city2'] : ['uid', 'uid', 'uid']
	},
	candidatesByCompany: {
		['company'] : ['uid', 'uid', 'uid']
		['company1'] : ['uid', 'uid', 'uid']
		['company2'] : ['uid', 'uid', 'uid']
	},
	filters: {
		currentFilter,
		candidates: ['uid', 'uid', 'uid'],
		showfilter
	}
}