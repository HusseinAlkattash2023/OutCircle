import React from 'react'
import Circle from '../../component/Circle/Circle_ar'
import './Handicraft.css'
import {Link} from 'react-router-dom'
import back from '../../images/back.png'
import logout from '../../images/logout.png'
import notifications from '../../images/notification.png';
import profile from '../../images/profile.png'
import image from '../../images/Component 31 – 27.png'
function Handicraft_ar({handicraft_}) {
  const ClearLocalStorate = ()=>{
    localStorage.clear();
}
  return (
    <div className='handicraft'>
        {
                    handicraft_ ? (
                    <header className='header2_ar'>
                    <Link to="/">
                        <span>رجوع</span>
                        <img src={back} alt=""/>
                    </Link>
                    </header>
                    ):(
                        <header className='header1'>
                        <Link to="/profile_handicraft">
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
        demand1="handicraft/service_1"
        demand2="handicraft/service_2"
        demand3="handicraft/service_3"
        demand4="handicraft/service_4"
        demand5="handicraft/service_5"
        demand6="handicraft/service_6"
        demand7="handicraft/service_7"
        demand8="handicraft/service_8"
        service="حرفيين"
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

export default Handicraft_ar;
