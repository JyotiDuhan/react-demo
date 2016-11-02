import React from 'react'
import { Candidates } from '$components'

const Home = function (props) {
  const candidates = props.candidates

  const candidatesInfo = candidates.map((candidate) => (
    <Candidates
        data={candidate}
        key={candidate.uid} />
  ))

  return (
    <div>
      {candidatesInfo}
    </div>
  )
}
// const Home = (props) => (
//   <div>{'Home'}</div>
// )

Home.propTypes = {

}

export default Home
