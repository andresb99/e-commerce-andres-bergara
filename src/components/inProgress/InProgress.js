import React from 'react'

import './inProgress.css'

const InProgress = ({ name }) => {
  return (
    <>
      <h2 className='sliderComponent'>WE ARE BUILDING THE <span className='nameComponent'>{name}</span> SECTION</h2>
    </>
  )
}

export default InProgress