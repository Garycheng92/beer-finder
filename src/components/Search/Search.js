import React from 'react'
import {Link} from 'react-router-dom'
import './Search.css'
import PropTypes from 'prop-types'

const Search = ({value, onChange, onSubmit, children}) => {
  return (
    <nav className='search-wrapper'>
    <ul>
      <li>
      <h1 className='search-title'>
        <span className='f-large-search'>Beer</span>
        <br/>
        <span className='f-med-search'>Finder</span>
        </h1>
        </li>
    <li>
    <form onSubmit={onSubmit}>
      <input
      type='text'
      value={value}
      onChange={onChange}
      placeholder='Type in Beer Name'
      required
      />
      <button type='submit'>
        {children}
      </button>
    </form>
    </li>
    <li>
    <Link to='#\'
      ><i className="fas fa-info-circle icon"></i></Link>
    </li>
    </ul>
    </nav>
  )
}

Search.propTypes = {

}

export default Search
