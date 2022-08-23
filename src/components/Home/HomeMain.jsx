import React from 'react';
import MainImg from "../../images/main.png"
import Modal from '../Modal/Modal';
export default function HomeMain() {
  return (
    <div className='homeMain d-xl-flex d-flex'>
      <div className="homeContent container d-flex">
      <div className="mainLeft d-flex flex-column justify-content-center ">
        <h1 className='mb-1'>Magistratura uchun</h1>
        <h1 className='mb-4 text-warning'>Qabul 2022</h1>
        <p className='mb-4'>Oliy ta'lim muassasalarining magistraturasiga kirish imtihonlarida ishtirok etish uchun onlayn ariza topshirish tizimi</p>
        <button className='mainBtn btn btn-warning d-flex justify-content-between text-black' data-bs-toggle="modal" href="#exampleModalToggle">Ariza topshirish <i class="bi bi-arrow-right"></i></button>
        <Modal />
      </div>
      <div className="mainRight d-xl-flex d-none align-items-end">
        <img src={MainImg} alt="img" className='mainImg' />
      </div>  
      </div>
    </div>
  )
}
