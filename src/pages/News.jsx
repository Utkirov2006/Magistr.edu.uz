import React from 'react';
import Newimg from '../images/Qabul.png';
import Modal from '../components/Modal/Modal.jsx';

const News = () => {
    return (
        <div className='News-card'>
            <h1 className='New-card-h1'>Qabul-2020: Magistraturaga qabul va kirish imtihonlari haqida batafsil</h1>

            <p className='New-card-p'>November 25, 2022</p>
            <img src={Newimg} alt="" className='New-card-img' />
            <h2 className='New-card-h2' >Hujjat topshirish tartibi</h2>
            <div className="New-card-text">
                Magistratura uchun hujjatlar 1 iyuldan 30 iyulgacha (30 iyul kuni ham) topshirilishi mumkin.
                <br /> <br />

                Hujjatlar magistr.edu.uz sayti orqali onlayn tarzda topshiriladi. OTMlarda hujjatlar qabul qilinmaydi.
                <br /> <br />
                Qabulni rasmiylashtirish uchun kerak bo‘ladigan hujjatlar:
                <br /> <br />

                – pasport (bunda pasportning skaner yoki rasm varianti talab etilmaydi, kerakli o‘rinlarga JShShIR raqami, pasport seriyasi va raqamini kiritish kerak xolos);
                <br /> <br />
                – bakalavr darajasini beruvchi diplom va baholar qayd etilgan ilovaning skaner varianti;
                <br /> <br />
                – chet tilini bilish sertifikati, olimpiadalar g‘olibligi, prezident yoki nomli stipendiya sohibi ekanligi va h.k.larni tasdiqlovchi hujjatlar (agar mavjud bo‘lsa).
                <br /> <br />
                Abituriyentdan shundan boshqa qo‘shimcha hujjatlar (fotosurat, maqolalar nusxasi, tibbiy ma'lumotnoma kabi) talab etilmaydi.
                <br /> <br />
                Saytga hujjatlarni yuklash tartibi bo‘yicha quyidagi videoyo‘riqnomada batafsil tanishish mumkin:
            </div>

            <hr />


            <div className="box-icons">
                <div className="icons">
                    Ulanish:
                    <i class="bi bi-telegram"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-facebook"></i>
                </div>

                <div className="card1">
                    <a href="https://kun.uz"> <span style={{ color: 'black' }}>Manba:</span>  Kun.uz</a>
                </div>

            </div>


            <Modal/>
        </div>
        
    );
};

export default News;