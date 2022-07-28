import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white shadow-sm p-4" >
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-4 ">
            <li className="nav-item"><Link className="nav-link text-dark logo" style={{fontSize: "25px"}} to="#">E-MADADGAR</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark logo" to="#"style={{marginLeft: "875px"}}>Connenct With Us</Link></li>
          </ul>            
        </div>
      </nav>
  );
};

export default Main;
