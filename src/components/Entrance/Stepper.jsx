import React from 'react';
import "../../style/Stepper.css"
import { Outlet, NavLink } from 'react-router-dom'
import Modal from '../Modal/Modal';
export default function Stepper() {
  return (
    <div className='stepperBlock d-flex flex-column align-items-start'>
      <h3 className='mt-3'>Ma‘lumotnomani to‘ldirish va ariza topshirish</h3>
      <div className='steppers d-flex justify-content-around w-100 mt-3'>
        <NavLink to="personal" className={({isActive})=>isActive ? "activeStepper" : "stepper"}>
        <i class="bi bi-1-circle"></i>
        <p>Shaxsiy ma'lumotlar</p>
        </NavLink>
        <NavLink to="educations" className={({isActive})=>isActive ? "activeStepper" : "stepper"}>
        <i class="bi bi-2-circle"></i>
          <p>Tugatgan ta‘lim muassangiz</p>
        </NavLink>
        <NavLink to="privilege" className={({isActive})=>isActive ? "activeStepper" : "stepper"}>
        <i class="bi bi-3-circle"></i>
          <p>Imtiyozlarni kiritish</p>
        </NavLink>
        <NavLink to="specialty" className={({isActive})=>isActive ? "activeStepper" : "stepper"}>
        <i class="bi bi-4-circle"></i>
          <p>Tanlagan mutaxasisligingiz</p>
        </NavLink>
      </div>
      <Outlet />
      <Modal/>
    </div>
  )
}
