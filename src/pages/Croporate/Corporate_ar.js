import React from 'react'
import Circle from '../../component/Circle/Circle_ar'
import './Croporate.css'
import {Link} from 'react-router-dom'
import back from '../../images/back.png'
import image from '../../images/Component 31 – 24.png'
function Croporate_ar() {
  return (
    <div className='croporate'>
            <Link to="/" className="back_ar">
                <img src={back} alt=""/>
                <span>رجوع</span>   
            </Link>
        <Circle 
        circle={image}
        demand1="corporate/service_1"
        demand2="corporate/service_2"
        demand3="corporate/service_3"
        demand4="corporate/service_4"
        demand5="corporate/service_5"
        demand6="corporate/service_6"
        demand7="corporate/service_7"
        demand8="corporate/service_8"
        service="شركة"
        service1="(المصرفية / المالية / التسويقية ..الخ)استشارات وأفكار في العمل الحالي في كافة المجالات"
        service2="نصائح وأفكار تجارية جديدة"
        service3="إدارة الحسابات(المالية والمصرفية / وسائل التواصل الاجتماعي ... إلخ)"
        service4="متابعة الأنشطة الاستثمارية للشركة"
        service5="خدمات (عقارات ، مواصلات ، مالية ، سجل تجاري .. إلخ)"
        service6="أفكار وخدمات إكساء وديكور للشركة"
        service7="تأمين موظفين مؤهلين"
        service8="الخدمات الإعلانية"
        />
    </div>
)
}

export default Croporate_ar;