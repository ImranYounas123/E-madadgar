import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.jpeg'
import {Button, Stack} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PopDialog from '../Authentication/OrganForm/PopDialog'
import RegOrgForm from "../Authentication/OrganForm/RegOrgForm";
import './Header.css';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white shadow-lg p-4 header">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-4 ">
            {/* <img src= {logo} alt="logo" /> */}
            <li className="nav-item"><Link className="nav-link text-dark logo" to="/home">E-MADADGAR</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark ml-3" to="/home">Home</Link></li>
            <li className="nav-item"><Link className=" nav-link text-dark" to="/products">Organizations</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/update">Contribution</Link></li>
            <li className="nav-item"><Link className="nav-link text-dark" to="/profile">About</Link></li>
            <div className="icons">
            <div className="input-group rounded">
              <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <span className="input-group-text border-0" id="search-addon">
              <SearchIcon />
              </span>
              </div>
              
            {/* <li className="nav-item "><Link className="nav-link text-dark" to="/cart"><Search ?.</Link></li> */}
           
            <li className="nav-item "><Link className="nav-link text-dark" to="/login"><Stack ><  AssignmentIndIcon  sx={{ fontSize: 30 }}/></Stack></Link></li>
            <li className="nav-item "><Link className="nav-link text-dark" to=""><Stack >< NotificationsIcon  sx={{ fontSize: 30 }}/></Stack></Link></li>
            <li className="nav-item "><Link className="nav-link text-dark" to="/OrgHome"><Stack >
              <PopDialog><RegOrgForm/></PopDialog>
              </Stack></Link></li>
            </div>
          </ul>            
        </div>
      </nav>
  );
};

export default Header;
