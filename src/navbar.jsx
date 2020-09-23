import React from 'react'


const Navbar =() =>{
    return(
        <>
         <nav>
    <div className="nav-wrapper">
      <a  to="/about" className="brand-logo" style={{paddingLeft:'10px'}}>News App</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Welcome</a></li>
        
      </ul>
    </div>
  </nav>
        </>
    );
}
export default Navbar;