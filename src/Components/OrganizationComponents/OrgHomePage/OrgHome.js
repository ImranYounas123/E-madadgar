import React,{useState,useEffect} from 'react'
import OrgCard  from './Orgcard/OrgCard';
import OrgHeader from './OrgHeader/OrgHeader';
import './OrgHome.css'
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { Button } from '@mui/material';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Data from './Orgcard/Data';
import ProgressCard from './OrgProgressCard/ProgressCard';
const OrgHome = () => {


    const [data, setData] = useState([]);


useEffect(()=>{
    setData(Data);
    console.log(data.title);
},[])

  return (
    <>
    <OrgHeader/>
    <ProgressCard/>
    <div className="invBtn">
    <Button variant="contained" color="success" sx={{p:1}} endIcon={<Inventory2Icon/>}>
      <Router>
      <Link to="/home">craete Inventory</Link>
      </Router>
      </Button>
    </div>
    <div className='container'>
    <h1 > Organizations Recommendations </h1>
    <h2 > You can Contact with them so that problem be solve Fast </h2>
    <p>Here , Your Recommend Organizations as per your past work and your works on some donation products </p>
    <div className='Cards'>
    {
        data.map((info)=>(
            <OrgCard org = {info}  key={info.id} />
        ))
    }
    
    
    
    {/* <div className='card'>
    <OrgCard />
    </div>
    <div className='card'>
    <OrgCard />
    </div>
    <div className='card'>
    <OrgCard />
    </div>
    <div className='card'>
    <OrgCard />
    </div> */}

    </div>
    </div>
    </>
  )
}
export  default OrgHome;