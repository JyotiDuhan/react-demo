import React from 'react'

const Header = (props) => (
  <div className='h-wrapper'>
    <div className='filters-wrapper'>
      <span className='search-title'>{'Candidate Search Filters'} </span>
      <span>{'Applied Filters (0)'}</span>
      <div>{'+Add Filters'}</div>
    </div>
    <div className='search-wrapper'>
      {'Search'}
    </div>
  </div>
)

Header.propTypes = {

}

export default Header
