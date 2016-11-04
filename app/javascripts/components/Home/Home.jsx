import React from 'react'
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

export default Home
