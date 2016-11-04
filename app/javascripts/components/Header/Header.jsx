import React from 'react'
import { SelectBox } from '$components'
import * as styles from './styles.scss'

const Filters = ({options, label, event}) => (
  <SelectBox options={options} label={label} event={event} />
)

const Header = ({handleClick, showFilter, allCompanies, allCities, onCompanyChange, onCityChange}) => (
  <header className={`${styles.header} padded-1`}>
    <div className='u-sm-1-2'>
      <h2 className='inline-block sub-head-1'>{'Candidate Search Filters'} </h2>
      <span className={`${styles.filterCount} faded`}>{'Applied Filters (0)'}</span>
    </div>
    <div className='u-sm-1-2 t-right'>
      {'Search'}
    </div>
    {(showFilter === true && allCompanies)
      ? <Filters options={Object.keys(allCompanies)} label='Current company' event={onCompanyChange} />
      : ''}
    {(showFilter === true && allCities)
      ? <Filters options={Object.keys(allCities)} label='Current location' event={onCityChange} />
      : ''}
    <div className={`${styles.addFilters} active`} onClick={handleClick}>{showFilter === true ? '- Hide Filters' : '+ Show Filters'}</div>
  </header>
)

Header.propTypes = {

}

export default Header
