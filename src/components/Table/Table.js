import React from 'react'
import './Table.css'
import PropTypes from 'prop-types'






const Table = ({list}) => {
  return (
    <div className='table'>
      {list.map(item => {
        return (
          <div key={item.id} className='table-row'>
            <span style={{width: '30%'}}>{item.name}</span>
            <span style={{width: '10%'}}>Abv: {item.abv}</span>
            <span style={{width: '10%'}}>Ibu: {item.ibu}</span>
            <span style={{width: '10%'}}>Year: {item.first_brewed}</span>
            <span style={{width: '40%'}}>Tag Line: {item.tagline}</span>
          </div>
        )
      })}
    </div>
  )
}

Table.propTypes = {

}

export default Table
