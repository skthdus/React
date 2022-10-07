import React from 'react'

import { Link } from 'react-router-dom';

const Header = () => {

  const linkStyle={
    textDecoration : 'none',
    color : 'green',
    textAlign : 'center'
  }

  return (
    <div>
      <Link to='./' style={linkStyle}>
        <h2>Campus K Market</h2>
      </Link>
   
    </div>
  )
}

export default Header

