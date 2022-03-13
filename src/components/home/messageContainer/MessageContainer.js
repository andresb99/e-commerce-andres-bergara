import React from 'react'

import './messageContainer.css'

const MessageContainer = ({ message, title }) => {
  return (

    <div className='important-message'>
      <h2>
        {title}
      </h2>
      <p>
        {message}
      </p>
    </div>
  )
}

export default MessageContainer