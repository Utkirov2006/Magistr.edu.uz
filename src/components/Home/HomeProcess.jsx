import React from 'react'

export default function HomeProcess() {
  return (
    <div className='col-12 homeProcess'>
      <div className="processTop d-flex align-items-center">
        <div className='processHeader'><h1>Ariza topshirish va uni qabul qilish jarayoni</h1></div>
      </div>
      <div className="processBottom d-xl-flex d-lg-flex d-block">
        <div className="processCard d-flex flex-column">
          <li className='mb-3'>1</li>
          <h5>Tizimdan ro‘yxatdan o’tiladi va ariza topshirladi</h5>
          <p>Tizimdan oneid orqali ro‘yxatdan o‘ting va shaxsiy ma’lumotlaringizni to‘ldring va ariza qoldiring.</p>
        </div>
        <div className="processCard d-flex flex-column">
          <li className='mb-3'>2</li>
          <h5>Diplom ma’lumotlarini tekshirish va tasdiqlash</h5>
          <p>Ariza birinchi bo‘lib ariza topshiruvchining bakalavrlik oliy ta’lim muassasiga borib tushadi va shu yerda diplom tekshiriladi.</p>
        </div>
        <div className="processCard d-flex flex-column">
          <li className='mb-3'>3</li>
          <h5>Tizimdan ro‘yxatdan o’tiladi va ariza topshirladi</h5>
          <p>Tizimdan oneid orqali ro‘yxatdan o‘ting va shaxsiy ma’lumotlaringizni to‘ldring va ariza qoldiring.</p>
        </div>
      </div>
    </div>
  )
}
