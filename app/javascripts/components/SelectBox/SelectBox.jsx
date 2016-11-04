import React, { PropTypesIgnored } from 'react'
import * as styles from './styles.scss'

const SelectBox = ({options, label, event}) => (
	<div className={`${styles.filterBox}`}>
		<p>{label}</p>
		<select name='' id='' onChange={event}>
			<option value=''>{'--- Select --'}</option>
			{options.map((option) =>(
				<option value={option.toLowerCase()} key={option}>{option}</option>
			))}
		</select>
	</div>
)

SelectBox.propTypes = {

}

export default SelectBox
