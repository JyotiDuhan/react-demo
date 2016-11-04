function detectPhrase (count, phrase) {
  if (count > 1) {
    return `${phrase}s`
  } else if (count === 1) {
    return phrase
  } else if (count === 0) {
    return ''
  }
}

export const formatCandidates = (candidates) => {
  const allCompanies = {}
  const allCities = {}
  const formattedCandidates = candidates.reduce((prev, curr) => {
    const experienceMonths = curr.total_experience % 12
    const experienceYears = parseInt(curr.total_experience / 12, 10)
    const monthPhrase = detectPhrase(experienceMonths, 'month')
    const yearPhrase = detectPhrase(experienceYears, 'year')
    let currentCompanyYears, currentCompanyMonths, currentCompanyDuration

    allCompanies[curr.current_company] === true
      ? null
      : allCompanies[curr.current_company] = true

    allCities[curr.current_location] === true
      ? null
      : allCities[curr.current_location] = true

    curr.totalExperience = `${experienceYears > 0 ? experienceYears : ''} ${yearPhrase} ${experienceMonths > 0 ? experienceMonths : ''} ${monthPhrase}`
    curr.companies = (curr.experience.reduce((previous, current) => {
      if (current.is_current) {
        curr.currentCompanyJoining = new Date(current.start)
      }

      if (previous.length < 4) {
        return previous.concat([current.company])
      }

      return previous
    }, [])).join(', ')

    currentCompanyDuration = Math.ceil(Math.abs(new Date() - (curr.currentCompanyJoining || new Date(curr.experience[0].start))) / (1000 * 3600 * 24 * 30))
    currentCompanyYears = parseInt(currentCompanyDuration / 12, 10)
    currentCompanyMonths = currentCompanyDuration % 12
    curr.companies = curr.experience.length > 4
      ? `${curr.companies} and ${curr.experience.length - 4} more.`
      : curr.companies

    curr.currentCompanyExperience = `${currentCompanyYears > 0 ? currentCompanyYears : ''} ${detectPhrase(currentCompanyYears, 'year')} ${currentCompanyMonths > 0 ? currentCompanyMonths : ''} ${detectPhrase(currentCompanyMonths, 'month')}`

    return {
      ...prev,
      [curr.uid]: curr,
    }
  }, {})

  return {
    formattedCandidates,
    allCompanies,
    allCities,
  }
}
