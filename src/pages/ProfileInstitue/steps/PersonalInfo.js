import React from 'react'
import { Link } from 'react-router-dom'
import update from '../../../images/update.png'
const PersonalInfo = () => {
  return (
    <div>
        <div className='information'>
          <p>User name</p>
        </div>
        <div className='information'>
          <p>***********</p>
          <Link to="/change_password">
              <img src={update} alt=""/>
          </Link>
        </div>
        <div className='information'>
          <p>Full name</p>
        </div>
        <div className='information'>
          <p>Born date</p>
        </div>
        <div className='information'>
          <p>Mobile number</p>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <p>WhatsApp number</p>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <p>E-mail address</p>
          <img src={update} alt=""/>
        </div>
    </div>
  )
}

export default PersonalInfo;
