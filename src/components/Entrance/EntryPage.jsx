import React from 'react';
import {Link} from 'react-router-dom';
export default function EntryPage() {
  return (
    <>
      <div className="entryBlock d-flex justify-content-center align-items-center">
        <div className='entryInform d-flex justify-content-around align-items-center flex-column card px-xl-5 px-2 py-xl-4 py-5'>
          <div className="entryText">
            <p style={{ fontSize: '20px' }}>Salom!</p>
            <h1>ABROR ASKAROV</h1>
            <h4 style={{ fontFamily: 'sans-serif', fontWeight: '500', fontSize: '18px' }}>Magistr.edu.uz tizimiga xush kelibsiz!</h4>
          </div>
          <Link to="personal" className="entryBtn btn btn-primary p-xl-3 p-2">Ma‘lumotnomani to‘ldirish va ariza topshirish</Link>
          <p className='entryFooterText'>O‘zbekiston Respublikasi <span style={{ color: '#2F80ED' }}> qonunchiligi</span> asosida, shaxsingiz to‘g’risidagi ma’lumotlarni <span style={{ color: '#2F80ED' }}> id.egov.uz</span> tizimidan olinganini ma’lum qilamiz</p>
        </div>
      </div>
    </>
  )
}
