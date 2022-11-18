import React , {useState} from 'react'
import whatsapp from '../../images/whatsapp.png'
import facebook from '../../images/facebook.png'
import linkedin from '../../images/linkedin.png'
import telegram from '../../images/telegram.png'
import appStore from '../../images/appStore.png'
import googlePlay from '../../images/googlePlay.png'
import {Link} from 'react-router-dom'
import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import icon3 from "../../images/icon3.png"
import logo from "../../images/Group 360.svg"
import user from "../../images/user.png"
import outcircle from '../../images/OUTCIRCLE.svg'
import es from '../../images/1667844570962.png'
import i1 from '../../images/serviceAr/Component 16 – 10.svg'
import i2 from '../../images/serviceAr/Component 16 – 9.svg'
import i3 from '../../images/serviceAr/Component 16 – 8.svg'
import i4 from '../../images/serviceAr/Component 16 – 7.svg'
import i5 from '../../images/serviceAr/Component 16 – 6.svg'
import iui1 from '../../images/serviceAr/hover/Component 16 – 10.svg'
import iui2 from '../../images/serviceAr/hover/Component 16 – 9.svg'
import iui3 from '../../images/serviceAr/hover/Component 16 – 8.svg'
import iui4 from '../../images/serviceAr/hover/Component 16 – 7.svg'
import iui5 from '../../images/serviceAr/hover/Component 16 – 6.svg'
import { useNavigate } from 'react-router-dom';
import './Home.css'
 

function HomeAr({setShow_Ar}) {
  const Show_Ar = ()=>{
    setShow_Ar(false);
    // localStorage.setItem("fav", "true");
  }
  const Show_En = ()=>{
    setShow_Ar(true);
    // localStorage.setItem("fav", "false");
  }


  const navigate =  useNavigate()
  const OnClick = ()=>{
    navigate("/login")
  }
  return (
    <div className='home'>
      <img className='img2_ar' src={es} alt=""/>
      <header className='_header1'>
      <button onClick={Show_Ar}>Arb</button>
        <button onClick={Show_En}>Eng</button>
      </header>
      <header className='_header2_ar'></header>
      <Link to="/news">
          <marquee direction="right">نحن فريق يقدم خدمات استشارية وتطويرية ، بالإضافة إلى الخدمات المهنية لجميع قطاعات الأعمال الخاصة في معظم محافظات سوريا بطريقة فنية غير عادية توفر الوقت والجهد على الجميع.</marquee>
      </Link>
      <div>
      <div className='login1_ar'>
      <Link to="/login" className='mx-1' style={{display:"flex" , alignItems:"center"}}>
            {/* <div style={{border:"2px solid black" , color:"black"}}>Login</div> */}
            <img src={user} alt="" width="36px" style={{background:"#DCECDD" , borderRadius:"50%"}}/>
      </Link>
      </div> 
       <div className='main_ar'>
        <img className='outcircle' src={outcircle} alt="" width="154"/>
        <div className='cards'>
            <Link to="/individuals" className='hov' onClick={OnClick}>
                <img className='img_ mx-3' src={i5} alt=""/>
                <img className='iui' src={iui5} alt=""/>
            </Link>
            <Link to="/handicraft" className='hov'>
                <img className='img_ mx-3'  src={i4} alt=""/>
                <img className='iu' src={iui4} alt=""/>
            </Link>
            <Link to="/scientific" className='hov'>
                <img className='img_ mx-3'  src={i3} alt=""/>
                <img className='iu' src={iui3} alt=""/>
            </Link>
            <Link to="/institute" className='hov'>
                <img  className='img_ mx-3'  src={i2} alt=""/>
                <img  className='iu'  src={iui2} alt=""/>
            </Link>
            <Link to="/corporate" className='hov'>
                <img className='img_ mx-3'  src={i1} alt=""/>
                <img className='iu'  src={iui1} alt=""/>
            </Link>
        </div>
        </div>
        </div>
        <div className='sidebar_ar'>
          <Link to="/" className='logo'>
              <img src={logo} alt=""/>
          </Link>
          <nav className='navbar_'>
          <Link to="/whyus" className='my-4 icon1'>
              <img src={icon1} alt="" width="60px"/> 
              <span>من نحن</span>
          </Link>
          <Link to="/goals" className='my-4 icon2'>
              <img src={icon2} alt="" width="60px"/> 
              <span>أهدافنا و مميزاتنا</span>
          </Link>
          <Link to="/contactus" className='my-4 icon3'>
              <img src={icon3} alt="" width="60px"/> 
              <span>أتصل بنا</span>
          </Link>
          </nav>
        </div>  
        <footer className="footer_ar">
        <Link to="/ads">
            <div className="put_ads">
                <p>ضع اعلانك هنا</p>
            </div>
        </Link>
        <div className='icons_ar'>
            <ul>
                <li className='mx-0'>
                <Link to="">
                    <img src={whatsapp} alt=""/>
                </Link>
                </li>
                <li className='mx-0'>
                <Link to="">
                  <img src={facebook} alt=""/>
                </Link>
              </li>
              <li className='mx-0'>
                <Link to="">
                  <img src={linkedin} alt=""/>
                </Link>
              </li>
              <li className='mx-0'>
                <Link to="">
                  <img src={telegram} alt=""/>
                </Link>
              </li>
            </ul>
            <div className='ms-4'>
            <Link to="" className='me-1'>
              <img src={googlePlay} alt=""/>
            </Link>
            <Link to="" className='ms-1'>
              <img src={appStore} alt=""/>
            </Link>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default HomeAr
