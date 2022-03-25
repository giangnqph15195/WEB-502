import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
type Props = {}

const Websitelayout = (props: Props) => {
  return (
    <div>Websitelayout
    <header>
        
        <ul>
          <li><NavLink to='/'>Home Page</NavLink></li>
          <li><NavLink to='/products'>Products Page</NavLink></li>
          <li><NavLink to='/blog'>Blog Page</NavLink></li>
        </ul>
      </header>
     <Outlet/>
    </div>
    
    
  )
}

export default Websitelayout