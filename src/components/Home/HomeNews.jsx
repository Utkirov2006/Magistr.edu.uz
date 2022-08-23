import React from 'react'
import HomeNewsCard from './HomeNewsCard'

export default function HomeNews() {
  return (
    <div className='col-12 homeNews'>
    <div className="newsTop d-flex align-items-center">
      <div className="newsHeader"><h1>Ta‘lim va qabulga oid yangiliklar</h1></div>
    </div>
    <div className="newsBottom">
      <HomeNewsCard/>
    </div>
    </div>
  )
}
