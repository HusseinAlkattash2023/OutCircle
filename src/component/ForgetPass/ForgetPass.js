import React from 'react'
import { Link } from 'react-router-dom'
import password from '../../images/password.svg'
import './ForgetPass.css'
const ForgetPass = ({ResetPassword}) => {
  return (
    <div className='forgetpass'>
        <header>
            <h2>forget password</h2>
            <img src={password} alt=""/>
        </header>
        <form>
            <div className='pass'>
            <label>Write your email or mobile number</label>
            <input type="email"/> 
            </div>
            <button type='submit' onClick={ResetPassword}>
                Submit
            </button>
        </form>
    </div>
  )
}

export default ForgetPass
