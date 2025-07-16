import React, { useState } from 'react'

const User = ({name}) => {
    const [count, setCount] = useState(0);
  return (
    <div className='user-card'>
        <h1>{name}</h1>
        <h1>{count}</h1>
    </div>
  )
}

export default User