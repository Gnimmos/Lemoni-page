import React from 'react'

const Play = ({onPlayerClick}) => {
  return (
      <svg width="100%" height="100%" className="button" viewBox="0 0 60 60" onClick={onPlayerClick}>
        <polygon points="0,0 50,30 0,60" />
      </svg>
  )
}

export default Play