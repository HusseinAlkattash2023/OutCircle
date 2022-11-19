import React from 'react'
import Circle from '../../component/Circle/Circle_ar'
import './PersonalServices.css'
import {Link} from 'react-router-dom'
import back from '../../images/back.png'
function PersonalServices_ar() {
  return (
    <div className='personalServices'>
        <header>
            <Link to="/individuals">
                <span>Back</span>
                <img src={back} alt=""/>
            </Link>
        </header>
        <Circle 
        demand1="personalservice/service_1"
        demand2="personalservice/service_2"
        demand3="personalservice/service_3"
        demand4="personalservice/service_4"
        demand5="personalservice/service_5"
        service="أفراد"
        service1="خدمات طبية"
        service2="استشارات حول القضايا والمشاكل العامة"
        service3="خدمات المناسبات والهدايا"
        service4="خدمات السفر والجوازات"
        service5="خدمات الصيانة"
        />
        <span className='personal'>Personal services</span>
    </div>
  )
}

export default PersonalServices_ar;