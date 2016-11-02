import React from 'react'
import { Candidates } from '$components'

const Home = function ({data, candidates}) {
  const candidatesInfo = candidates.map((candidate) => (
    <Candidates
      data={data[candidate]}
      key={candidate} />
  ))

  return (
    <div>
      {candidatesInfo}
    </div>
  )
}

Home.propTypes = {

}

export default Home
