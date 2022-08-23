import React from 'react'

export default function HomeUsage() {
  return (
    <div className='col-12 homeUsage'>
      <div className="usageTop d-xl-flex d-block">
        <div className="topLeft">
          <h1>Qabul tizimdan qanday foydalaniladi?</h1>
        </div>
        <div className="topRight">
          <p>Saytimiz yoki mobil ilovamizdan ro‘yxatdan o‘ting so‘ngra o‘zingiz istagan kurslardan birini tanlab, to‘lovni amalga oshiring va yangi bilimlar olish imkoniyatiga ega bo‘ling.</p>
        </div>
      </div>
      <div className="usageBottom">
      <iframe className='usageVideo' src="https://www.youtube.com/embed/kwTYq8lPii8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}
