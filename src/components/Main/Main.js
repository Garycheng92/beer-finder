import React, {Component} from 'react'
import Search from '../Search/Search';
import Table from '../Table/Table';
import Overlay from '../Overlay/Overlay';
import axios from 'axios'
import PropTypes from 'prop-types'



const PATH_BASE = 'https://api.punkapi.com/v2/'
const PARAM_PATH = 'beers'
const PARAM_PAGE ='page='
const PARAM_SEARCH = 'beer_name='



class Main extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      result: null,

    }
    this.onSearchChange = this.onSearchChange.bind(this)
    this.setSearchBeers = this.setSearchBeers.bind(this)
    this.fetchBeers = this.fetchBeers.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.searchBeers = this.searchBeers.bind(this)

  }


setSearchBeers(result) {
  this.setState({result})
}

  onSearchChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  fetchBeers(page = 1) {
    axios(`${PATH_BASE}${PARAM_PATH}?${PARAM_PAGE}${page}`)
  .then(result => this.setSearchBeers(result))
  .catch(error => error)
  }

  searchBeers(searchTerm) {
    axios(`${PATH_BASE}${PARAM_PATH}?${PARAM_SEARCH}${searchTerm}`)
  .then(result => this.setSearchBeers(result))
  .catch(error => error)
  }



componentDidMount() {
  this.fetchBeers()
}

onSearchSubmit(event) {
  const {searchTerm} = this.state;
  this.searchBeers(searchTerm)
  window.scrollTo(0, 0)
  event.preventDefault()
}


  render() {
    const {searchTerm, result} = this.state


  return (
    <div className='page'>
      <Search
      value={searchTerm}
      onChange={this.onSearchChange}
      onSubmit={this.onSearchSubmit}
      >
        <i className="fas fa-search"></i>
      </Search>

      {result ?
      <Table
      list={result.data}
      />
      : null
      }
    </div>
  )
  }
}

Main.propTypes = {

}

export default Main
