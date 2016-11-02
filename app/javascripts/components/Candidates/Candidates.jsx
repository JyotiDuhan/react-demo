import React from 'react'

const Candidates = function ({ data }) {
  return (
    <div className='candidates-card'>
        <p>{'Name :'} {data.first_name} {data.last_name}</p>
        <p>{'Company :'} {data.current_company}</p>
    </div>
  )
}

Candidates.propTypes = {

}

export default Candidates
