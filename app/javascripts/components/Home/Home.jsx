import React, { PropTypes } from 'react'
import { Candidates } from '$components'

const candidatesInfo = (data, candidates) => candidates.map((candidate) => (
  <Candidates
    data={data[candidate]}
    key={candidate} />
))

const Home = function ({data, candidates}) {
  return (
    <div className='content'>
      {candidatesInfo(data, candidates)}
    </div>
  )
}

Home.propTypes = {
  data: PropTypes.object,
  candidates: PropTypes.array.isRequired,
}

export default Home
