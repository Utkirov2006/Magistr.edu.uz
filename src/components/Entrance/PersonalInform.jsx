import React from 'react'
import { Link } from 'react-router-dom'
import PersonalMain from "./PersonalMain.jsx";


export default function PersonalInform() {
  return (
    <div className='w-100'>
      <PersonalMain/>
      <div className="w-100 stepperFooter d-flex justify-content-end align-items-center px-4 bg-light">
        <Link to="/stepper/educations" className='stepperFooterBtn btn btn-primary d-flex align-items-center justify-content-center'>Keyingi qadam</Link>
      </div>
    </div>
  )
}
