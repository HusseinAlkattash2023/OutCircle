import React from 'react'
import update from '../../../images/update.png'
import file from '../../../images/file.png';

const InstituteInfo = () => {
  return (
    <div>
        <div className='information'>
          <p>institute name</p>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <p>institute record number</p>
        </div>
        <div className='information'>
          <p>institute record date</p>
        </div>
        <div className='information'>
          <p>Current city</p>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <p>Current address</p>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <p>institute's detailed business active</p>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <p>institute email address</p>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <p>Actual start date</p>
        </div>
        <div className='information'>
          <p>Phone number</p>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <p>Fax number</p>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <p>Landline extension</p>
          <img src={update} alt=""/>
        </div>
        <div className='information'>
          <p>Upload updated institute record</p>
          <img src={file} alt=""/>
        </div>
    </div>
  )
}

export default InstituteInfo
