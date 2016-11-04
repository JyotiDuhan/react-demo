import React from 'react'
import * as styles from './styles.scss'

const Candidates = function ({ data }) {
  return (
    <div className='card padded-2'>
      <div className={`${styles.image} circular inline-block`}>
        <img src={data.profile_picture} alt={`${data.first_name} ${data.last_name}`} />
      </div>
      <div className={styles.candidateDetails}>
        <p className='mainhead active'>{`${data.first_name} ${data.last_name}`}</p>
        <p className='sub-head-1'>
          {data.current_role}
          <span className={`${styles.faded} faded h-separator`}>{'at'}</span>
          {data.current_company}
        </p>
        <p className='faded sub-head-2'>{data.currentCompanyExperience}</p>
        <p className='sub-head-1 v-separator'>{`${data.current_location}, India`}</p>
        <p className='sub-head-1'>
          <span className={`${styles.faded} faded`}>{'Worked at '}</span>
          {data.companies}
        </p>
        <p className='faded sub-head-2'>{`(${data.totalExperience} total experience)`}</p>
      </div>
    </div>
  )
}

export default Candidates
