import React from 'react'
import Circle from '../../component/Circle/Circle'
import './AfterRegister.css';
import {Link} from 'react-router-dom'
import logout from '../../images/logout.png'
import notifications from '../../images/notification.png';
import profile from '../../images/profile.png'
const AfterRegister = () => {
  const ClearLocalStorate = ()=>{
    localStorage.clear();
  }
  return (
    <div className='userpage'>
        <header>
          <Link to="/profile">
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
        <section>
            <Circle
            service="Croporate"
            service1="Consultations and ideas in the current work in all areas of banking/financial/marketing ..ect"
            service2="New business advice and ideas."
            service3="Account management (financial and banking/social media... ect)."
            service4="Follow-up  services for the investment activities."
            service5="(Real estate, transpotation, financial, licenses ..ect) services."
            service6="Cladding and decoration ideas and services for the company."
            service7="Providing qualified employees."
            service8="Advertising Services."
            />
        </section>
    </div>
  )
}

export default AfterRegister
