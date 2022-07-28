import React from 'react'
import org1 from '../../../../assets/images/org1.jpeg';
import './OrgCard.css'

const OrgCard = ({org}) => {
  return (   
    // title Company Location Help Status Image
    <div className='card-container'>
        <div className="card-deck shadow-lg">
      <div className="card">
        <img className="card-img" src={org1} alt="Company logo"/>
        <div className="card-body">
          <h5 className="card-title">{org.title}</h5>
          <ul className="list-group list">
            <li className="list-group-item list-group-item-success"><i class="fa fa-briefcase"></i>Company :<span className='text-primary'>{org.Company}</span></li>
            <li className="list-group-item list-group-item-success"><i className="fa fa-user"></i>   Role  :          <span className='text-primary'>Amal 4 Ajar</span>  </li>
            <li className="list-group-item list-group-item-success"><i className="fa fa-map-marker"></i>   Location :<span className='text-primary'>{org.Location}</span>  </li>
            <li className="list-group-item list-group-item-success"><i className="fa fa-clock-o"></i>   help People :[<span className='text-primary'>{org.Help}</span>]</li> 
            <li className="list-group-item list-group-item-success"><i className="fa fa-inr"></i>Status  : <span className='text-primary'>{org.Status} </span> </li>
          </ul>
          
        </div>
        <div className="card-footer">
          <button type="button" className="btn btn-success " data-toggle="modal" data-target="#exampleModal1" id="right-panel-link">
                            Contact
                        </button></div>
      </div>
    </div>
    </div>
   
  )}
export  default  OrgCard;