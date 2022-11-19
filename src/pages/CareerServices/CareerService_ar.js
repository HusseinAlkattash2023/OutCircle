import React from 'react'
import Circle from '../../component/Circle/Circle_ar'
import './CareerServices.css'
import {Link} from 'react-router-dom'
import back from '../../images/back.png';
import image from '../../images/Component 31 – 28.png'
function CareerServices() {
  return (
    <div className='careerServices'>
        <header>
            <Link to="/individuals" className="back">
                <span>رجوع</span>
                <img src={back} alt=""/>
            </Link>
        </header>
        <Circle 
        circle={image}
        demand1="careerservice/service_1"
        demand2="careerservice/service_2"
        demand3="careerservice/service_3"
        demand4="careerservice/service_4"
        demand5="careerservice/service_5"
        demand6="careerservice/service_6"
        service="أفراد"
        service1="تأمين الدورات التطويرية المناسبة"
        service2="تأمين فرصة عمل"
        service3="استشارات في العمل الحالي"
        service4="نصائح وأفكار تجارية جديدة"
        service5="(عقارات/مواصلات/مالية سجل تجاري/تعهدات عامة ..الخ)خدمات"
        service6="خدمات إعلانية"
        />
        <span className='career_ar'>خدمات مهنية</span>
    </div>
  )
}

export default CareerServices