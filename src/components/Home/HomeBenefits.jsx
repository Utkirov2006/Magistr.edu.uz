import React from 'react'

export default function HomeBenefits() {
  return (
    <div className='col-12 homeBenefits'>
      <div className="benefitTop d-flex align-items-center justify-content-center">
        <div className='benefitHeader text-center'><h1>Magistraturaga topshiruvchilar uchun imtiyozlar</h1></div>
      </div>
      <div className="benefitBottom d-flex flex-lg-row flex-xl-row flex-column justify-content-between">
        <div className="benefitCard d-flex flex-column align-items-center justify-content-around text-center p-3">
          <div className='iconWrapper'><i class="bi bi-trophy"></i></div>
          <h6>Yutuqlar</h6>
          <p>Nomdor davlat stipendiyalari va “Zulfiya” hamda “Mard o‘g’lon” davlat mukofatlari.</p>
        </div>
        <div className="benefitCard d-flex flex-column align-items-center justify-content-around text-center p-3">
          <div className='iconWrapper'><i class="bi bi-file-earmark-richtext"></i></div>
          <h6>Sertifikatlar</h6>
          <p>Xorijiy tillar bo‘yicha hamda milliy sertifikatlar.</p>
        </div>
        <div className="benefitCard d-flex flex-column align-items-center justify-content-around text-center p-3">
          <div className='iconWrapper'><i class="bi bi-eyeglasses"></i></div>
          <h6>Nogironlik imtiyozi</h6>
          <p>9- va 11- sinflarni maxsus maktablara ta’lim olgan ko‘zi ojiz fuqarolar.</p>
        </div>
      </div>
    </div>
  )
}
