import React from 'react'
import Circle from '../../component/Circle/Circle_ar'
import './Scietific.css'
import {Link} from 'react-router-dom'
import back from '../../images/back.png';
import logout from '../../images/logout.png'
import notifications from '../../images/notification.png';
import profile from '../../images/profile.png';
import image from '../../images/Component 31 – 26.png'
function Scietific({sceintific_}) {
    
    const ClearLocalStorate = ()=>{
        localStorage.clear();
    }
  return (
    <div className='scientific_'>
        {
                    sceintific_ ? (
                    <header className='header2_ar'>
                    <Link to="/">
                        <span>رجوع</span>
                        <img src={back} alt=""/>
                    </Link>
                    </header>
                    ):(
                    <header className='header1'>
                        <Link to="/profile_scientific">
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
        <Circle 
        circle={image}
        demand1="scientific/service_1"
        demand2="scientific/service_2"
        demand3="scientific/service_3"
        demand4="scientific/service_4"
        demand5="scientific/service_5"
        demand6="scientific/service_6"
        demand7="scientific/service_7"
        demand8="scientific/service_8"
        service="مهن علميّة"
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

export default Scietific;