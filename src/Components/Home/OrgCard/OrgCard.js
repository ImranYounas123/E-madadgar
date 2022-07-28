import React from 'react'
import org1 from '../../../assets/images/org3.jpeg'
import org2 from '../../../assets/images/org1.jpeg'
import org3 from '../../../assets/images/org4.jpeg'
import org4 from '../../../assets/images/org2.jpeg'
import org5 from '../../../assets/images/org5.jpeg'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import './OrgCard.css'

const OrgCard = () => {
  return (
    <>
    <h1 className='text-secondary' > Organizations Already Added</h1>
    <span></span>
    <div className="container">
      <div className="box">
      <div className="image">
          <img src={org1} alt="org1"/>
        </div>
        <div className="name_job">David Chrish</div>
        <div className="rating">
        <i ><StarIcon/></i>
          <i ><StarIcon/></i>
          <i ><StarHalfIcon/></i>
          <i ><StarBorderIcon/></i>
          <i ><StarBorderIcon/></i>
        </div>
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div className="btns">
          <button>About </button>
          <button>Contact</button>
        </div>
      </div>
      <div className="box s">
        <div className="image">
          <img src={org2} alt="org2"/>
        </div>
        <div className="name_job">Kristina Bellis</div>
        <div className="rating">
          <i ><StarIcon/></i>
          <i ><StarIcon/></i>
          <i ><StarIcon/></i>
          <i ><StarIcon/></i>
          <i ><StarHalfIcon/></i>
        </div>
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div className="btns">
          <button>About </button>
          <button>Contact</button>
        </div>
      </div>
      <div className="box s">
        <div className="image">
          <img src={org3} alt="org3"/>
        </div>
        <div className="name_job">Stephen Marlo</div>
          <div className="rating">
          <i ><StarIcon/></i>
          <i ><StarHalfIcon/></i>
          <i ><StarBorderIcon/></i>
          <i ><StarBorderIcon/></i>
          <i ><StarBorderIcon/></i>
        </div>
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div className="btns">
          <button>About</button>
          <button>Contact</button>
        </div>
      </div>
    <div className="box s">
        <div className="image">
          <img src={org4} alt="org3"/>
        </div>
        <div className="name_job">Stephen Marlo</div>
          <div className="rating">
          <i ><StarIcon/></i>
          <i ><StarHalfIcon/></i>
          <i ><StarBorderIcon/></i>
          <i ><StarBorderIcon/></i>
          <i ><StarBorderIcon/></i>
        </div>
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div className="btns">
          <button>About</button>
          <button>Contact</button>
        </div>
      </div>
      <div className="box ">
        <div className="image">
          <img src={org5} alt="org3"/>
        </div>
        <div className="name_job">Stephen Marlo</div>
          <div className="rating">
          <i ><StarIcon/></i>
          <i ><StarHalfIcon/></i>
          <i ><StarBorderIcon/></i>
          <i ><StarBorderIcon/></i>
          <i ><StarBorderIcon/></i>
        </div>
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div className="btns">
          <button>About</button>
          <button>Contact</button>
        </div>
      </div>
      <div className="box ">
        <div className="image">
          <img src={org1} alt="org3"/>
        </div>
        <div className="name_job">Stephen Marlo</div>
          <div className="rating">
          <i ><StarIcon/></i>
          <i ><StarHalfIcon/></i>
          <i ><StarBorderIcon/></i>
          <i ><StarBorderIcon/></i>
          <i ><StarBorderIcon/></i>
        </div>
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div className="btns">
          <button>About</button>
          <button>Contact</button>
        </div>
      </div>
    </div>
    </>
  )
}
export default OrgCard