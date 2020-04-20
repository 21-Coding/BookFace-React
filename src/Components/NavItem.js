import React from 'react';

const NavItem = props => {
  return (
    <div className="NavItem">
      <a href="#">{props.text}</a>
    </div>
  )
}

export default NavItem;