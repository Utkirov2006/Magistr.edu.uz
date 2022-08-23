import React from 'react'

export default function HomeAd() {
  return (
    <div className='col-12 homeAd text-light d-flex flex-xl-row flex-column justify-content-between align-items-center'>
      <div className='ad_text'>
        <h4>Telegram orqali bildirishnomlarni tez va oson qabul qiling!</h4>
      </div>
      <button className='btn btn-outline-light adBtn d-flex align-items-center justify-content-center'><i class="bi bi-telegram m-2"></i>Telegramda qabul qiling</button>
    </div>
  )
}
