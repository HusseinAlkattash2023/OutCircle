import React from 'react'
import Circle from '../../component/Circle/Circle_ar'
import './Institute.css'
import {Link} from 'react-router-dom'
import back from '../../images/back.png'
import logout from '../../images/logout.png'
import notifications from '../../images/notification.png';
import profile from '../../images/profile.png'
import image from '../../images/Component 31 – 25.png'
function Institute_ar() {
return (
    <div className='institute'>
            <Link to="/" className="back_ar">
                <img src={back} alt=""/>
                <span>رجوع</span>
            </Link>
        <Circle 
        circle={image}
        demand1="institute/service_1"
        demand2="institute/service_2"
        demand3="institute/service_3"
        demand4="institute/service_4"
        demand5="institute/service_5"
        demand6="institute/service_6"
        demand7="institute/service_7"
        demand8="institute/service_8"
        service="مؤسسة"
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

export default Institute_ar