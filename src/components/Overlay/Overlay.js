import React from 'react'
import PropTypes from 'prop-types'
import './Overlay.css'

const Overlay = () => {

  return (
    <div>
      <section className='overlay-main'>
        {children}
      </section>
    </div>
  )
}

Overlay.propTypes = {

}

export default Overlay
