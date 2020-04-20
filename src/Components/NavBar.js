import React from 'react';
import NavItem from './NavItem';

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavItem text={"Home"} />
      <NavItem text={"Notifications"}/>
      <NavItem text={"Messages"} />
    </div>
  )
}

export default NavBar;