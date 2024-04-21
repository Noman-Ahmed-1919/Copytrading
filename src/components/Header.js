import React from "react";
import logo from "../images/logo.png";

import { NavLink } from "react-router-dom";

const Header = () =>{

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? '#279EFF' : '#ffffff',
      borderBottom: isActive? '3px solid #ffffff' : 'none',
    }
  }



    return(
        <>


      
<section  id='hide' className='container'>

<nav className="navbar navbar-expand-xl navbar-dark"  >


  <a className="navbar-brand" href="#" id="stico" >
    <img id='logo' style={{ marginTop:"20px" }}  src={logo} width={135} height={55} className="d-inline-block align-top" alt="" />
    

  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse homenav" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto" id="headerrnava" >
      <li className="nav-item">
        <a    id="aboutaa"   className="nav-link"  >
             Features
        </a>
      </li>
   
      <li className="nav-item" >
        <a to="/about"  id="abouta"  className="nav-link " > Trading Bots</a>
      </li>
      <li className="nav-item" >
        <a to="/order" id="abouta1"  className="nav-link" href="#services"> Copy-Trading</a>
      </li>
      <li className="nav-item" >
        <a to="/products" id="abouta2"  className="nav-link " href="#sec4">  Pricing</a>
      </li>
      <li className="nav-item" >
        <a to="/support" id="abouta3"  className="nav-link " href="#utility">  Blog</a>
      </li>
      
 


    </ul>
    <div id="btnnns">


    <div id="strbtnn">
    <a id="btn1header2"  className=" my-2 my-sm-0" > Sign In</a>
    </div>
    
    </div>
  </div>


</nav>

</section>
        
        </>
    )
}

export default Header;