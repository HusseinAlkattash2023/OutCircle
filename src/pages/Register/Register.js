import React from 'react'
import './Register.css'
import back from '../../images/back.png';
import home from '../../images/padlock.png'
import circle1 from '../../images/New folder/Group 428.png'
import circle2 from '../../images/New folder/Group 427.png'
import circle3 from '../../images/New folder/Group 426.png'
import circle4 from '../../images/New folder/Group 429.png'
import circle5 from '../../images/New folder/Group 430.png';
import circleHover from '../../images/New folder/Component 31 – 8.png'
import mask from '../../images/Mask.png'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className='register_'> 
        <header>
          <Link to="/login" className='m-2'>
            <span>Back</span>
            <img src={back} alt=""/>
          </Link>
          <Link to="/" className='m-2'>
            <span>Home</span>
            <img src={home} alt=""/>
          </Link>
        </header>
        <section className='formRegister'>
          <div className='forms'>
            <div>
              <Link to="/register_coporate" className='me-3'>
                  <img src={circle1} alt="" width="220px" className='_circle'/>
              </Link>
              <Link to="/register_institute" className='ms-3'>
                  <img src={circle2} alt="" width="220px" className='_circle'/>
              </Link>
            </div>
            <div style={{position:"relative" , bottom:"100px"}}>
              <Link to="/register_prof">
                  <img src={circle3} alt="" width="220px" className='_circle'/>
              </Link>
            </div>
            <div style={{position:"relative" , bottom:"200px"}}>
              <Link to="/register_hand" style={{position:"relative" , right:"14px"}}>
                  <img src={circle5} alt="" width="220px" className='_circle'/>
              </Link>
              <Link to="/register_individuals" style={{position:"relative" , left:"14px"}}>
                  <img src={circle4} alt="" width="220px" className='_circle'/>
              </Link>
            </div>
          </div>
        </section>
        <div className='backgroundRegister'>
            <img src={mask} alt=""/>
        </div>
    </div>
  )
}

export default Register
