import React from 'react'

const Loader = () => {
  return (
    <div style={{margin: '200px 0 0 500px'}}>
    <div className="spinner-border" style={{width: '5rem', height: '5rem'}}role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  </div>
  )
}

export default Loader
