import React from 'react'
import {Link} from 'react-router-dom'
import back from '../../images/back.png'
import circle from '../../images/circle.svg'
import logout from '../../images/logout.png'
import notifications from '../../images/notification.png';
import profile from '../../images/profile.png';
import image from '../../images/Component 31 – 28.png'
import './Individuals.css'
function Individuals({individual_ , setIndividual_}) {
    const ClearLocalStorate = ()=>{
        localStorage.clear();
    }
    return (
        <div className='individuals'>
                {
                    individual_ ? (
                    <header className='header2_ar'>
                    <Link to="/">
                        <span>رجوع</span> 
                        <img src={back} alt=""/>
                    </Link>
                    </header>
                    ):(
                        <header className='header1'>
                        <Link to="/profile_individual">
                            <span>Profile</span>
                            <img src={profile} alt=""/>
                        </Link>
                        <Link to="/notifications">
                            <span>Notifications</span>
                            <img src={notifications} alt=""/>
                        </Link>
                        <Link onClick={ClearLocalStorate} to="/">
                            <span>Logout</span>
                            <img src={logout} alt=""/>
                        </Link>
                    </header>
                    )
                }
            <div className='individual_ar'>
                <img src={image} alt="" width="260px"/>
            </div>
            <div className='services_ar'>
                <Link to="/careerservice" className='career'>
                    <p>خدمات مهنية</p>
                </Link>
                <Link to="/personalservices" className='personal'>
                    <p>خدمات شخصية</p>
                </Link>
            </div>
        </div>
)
}

export default Individuals
