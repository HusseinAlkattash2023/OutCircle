import React from 'react'
import {Link} from 'react-router-dom'
import circle from '../../images/circle.svg'
import './Circle.css'

function Circle({service , 
    service1 , service2 ,
    service3 , service4 , 
    service5 , service6,
    service7 , service8,
    demand1 , demand2,
    demand3 , demand4,
    demand5 , demand6,
    demand7 , demand8}) {
    return (
        <div className='circle'>
            <div className='section1'>
                <img src={circle} alt="" width="280apx"/>
                <p>{service}</p>
            </div>
            <div className='section2' data-bs-spy="scroll" data-bs-root-margin="0px 0px -40%">
                    <Link to={`/${demand1}`}>{service1}</Link>
                    <Link to={`/${demand2}`}>{service2}</Link>
                    <Link to={`/${demand3}`}>{service3}</Link>
                    <Link to={`/${demand4}`}>{service4}</Link>
                    <Link to={`/${demand5}`}>{service5}</Link>
                    <Link to={`/${demand6}`} className='service6'>{service6}</Link>
                    <Link to={`/${demand7}`}className='link'>{service7}</Link>
                    <Link to={`/${demand8}`}className='link'>{service8}</Link>
            </div>
        </div>
)
}

export default Circle
