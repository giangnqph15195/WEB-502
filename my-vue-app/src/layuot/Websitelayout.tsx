import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
type Props = {}

const Websitelayout = (props: Props) => {
  return (
    <div>
    <header>
        
        <ul>
          <li className='text-orange-800'><NavLink  to='/'>Home Page</NavLink></li>
          <li><NavLink to='/products'>Products Page</NavLink></li>
          <li><NavLink to='/blog'>Blog Page</NavLink></li>
        </ul>
      </header>
     <Outlet/>
    </div>
    
    
  )
}

export default Websitelayout