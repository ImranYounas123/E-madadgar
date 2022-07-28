import React from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SignLanguageIcon from '@mui/icons-material/SignLanguage';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SupportIcon from '@mui/icons-material/Support';
import './ProgressCard.css'
const ProgressCard = () => {
  return (
        <>
        <div className='Card'>
        <div className='ind_Card shadow-md'>
            <div className="icon">
                <EmojiEventsIcon sx={{ fontSize: 40 }} />
            </div>
            <div className='Title_details'>
            <span className='Count'>1</span>
            <span className='heading text-secondary'>Rank</span>
            </div>
        </div>
        <div className='ind_Card shadow-md'>
            <div className="icon">
                <SupportIcon sx={{ fontSize: 40 }} />
            </div>
            <div className='Title_details'>
                <span className='Count'>89</span>
                <span className='heading text-secondary '>Help Others</span>
            </div>
        </div>
        <div className='ind_Card shadow-md'>
        <div className="icon">
            <VolunteerActivismIcon sx={{ fontSize: 40 }} />
        </div>
        <div className='Title_details'>
        <span className='Count'>219</span>
                <span className='heading text-secondary'>Donate</span>
        </div>
        </div>
        <div className='ind_Card shadow-md'>
            <div className="icon">
                <SignLanguageIcon  sx={{ fontSize: 40 }} />
            </div>
            <div className='Title_details'>
            <span className='Count'>12</span>
                <span className='heading text-secondary'>Connections</span>
            </div>
        </div>
        </div>
        </>
    )
}
export default ProgressCard;