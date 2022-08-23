import React from 'react'
import Img from "../images/logo.svg"

export default function Footer() {
    return (
      
        <div className='homeFooter'>
            <div className="footerContent container h-100 mx-auto d-flex flex-xl-row flex-column justify-content-around align-items-center">
                <div className='mb-3'>
                    <ul className='d-flex flex-xl-row mt-4 justify-content-start'><img src={Img} alt="img" /><span className='ms-2'>Magistr.edu.uz</span></ul>
                    <p className='my-4'>Portalda e'lon qilingan materiallardan nusxa ko'chirish, <br /> tarqatish va boshqa shakllarda foydalanish faqat <br /> tahririyat yozma roziligi bilan amalga oshirilishi mumkin.</p>
                    <p>2021 © Vakansiya edu.uz</p>
                </div>
                <div className='text-start h-100 d-flex flex-column justify-content-center'>
          <h5 onClick={()=>props.below(0,-3880)}>Asosiy</h5>
            <li onClick={()=>props.below(0,-3250)}>Imtiyozlar</li>
            <li onClick={()=>props.below(0,-750)}>Yangiliklar</li>
            <li onClick={()=>props.below(0,-1500)}>Statistika</li>
          </div>

                <div className='text-start h-100 d-flex flex-column justify-content-center'>
                    <h5>Biz ijtimoiy tarmoqlarda</h5>
                    <li><i class="bi bi-instagram"></i> Instagram</li>
                    <li><i class="bi bi-telegram"></i> Telegram</li>
                    <li><i class="bi bi-facebook"></i> Facebook</li>

                </div>

                <div className='text-start h-100 d-flex flex-column justify-content-center'>
                    <h5>Bog’lanish</h5>
                    <li><i class="bi bi-telephone"></i> +998336959550</li>
                    <li><i class="bi bi-telephone"></i> +998336959650</li>
                    <li><i class="bi bi-envelope"></i> aviapack@gmail.com</li>
                </div>
            </div>
        </div>
    )
}
