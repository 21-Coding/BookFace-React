import React from 'react';
import NavItem from './NavItem/NavItem';

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavItem text={"Home"} />
      <NavItem text={"Notifications"}/>
      <NavItem text={"Messages"} />

      <div className="Logo">
        <h1>Epitweetus</h1>
      </div>

      <div className="SearchBar">
      <input className="searchThis" type="text" />
      <button type="submit">Search</button>
      </div>
    </div>
  )
}

export default NavBar;