import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'

export default function ChoosenSpecialty() {
  return (
    <div className='w-100'>
      ChoosenSpecialty
      <div className="w-100 stepperFooter d-flex justify-content-end align-items-center px-4 bg-light">
        <Link to="/stepper/" className='stepperFooterBtn btn btn-success d-flex align-items-center justify-content-center' data-bs-target="#exampleModalToggle5" data-bs-toggle="modal" data-bs-dismiss="modal">Arizani topshirish</Link>
        <Modal/>
      </div>
    </div>
  )
}
