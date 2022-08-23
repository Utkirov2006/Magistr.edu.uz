import React from 'react'
import Downloader1 from "../../images/downloader1.png"
import Downloader2 from "../../images/Downloader2.jpg"
export default function HomeDownloads() {
  return (
    <div className='homeDownloads d-flex flex-xl-row flex-lg-row flex-column justify-content-center align-items-center'>
      <div className="downloadsFile d-flex flex-column  m-xl-3 mx-lg-3 m-4">
        <img src={Downloader1} alt="img1" className='downloaderImg mb-3'/>
        <div className="downloadesTexts w-100 text-center">
          <h5>Qabul parametrlari</h5>
          <p>2021/2022 o'quv yili uchun qabul kvotalari bilan tanishing</p>
          <button className='btn btn-light text-primary'><i class="bi bi-download m-1"></i>Yuklab olish</button>
        </div>
      </div>
      <div className="downloadsFile d-flex flex-column">
        <img src={Downloader2} alt="img2" className='downloaderImg mb-3'/>
        <div className="downloadesTexts w-100 text-center">
          <h5>Turdosh yo‘nalishlar</h5>
          <p>Turdosh yo'nalishlar bir biriga mosligini ko‘rib chiqing</p>
          <button className='btn btn-light text-primary'><i class="bi bi-download m-1"></i>Yuklab olish</button>
        </div>
      </div>
    </div>
  )
}
