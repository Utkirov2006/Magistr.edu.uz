import React from 'react'

export default function HomeStatistic() {
  return (
    <div className='col-12 homeStatistic mb-5'>
      <div className="row mb-4">
        <div className="statisticHeader mt-4">
          <div className='statisticHeaderContent'>
            <h1>OTMlar va yo‘nalishlar kesimida arizalar statistikasi</h1>
          </div>
          <div className='d-flex justify-content-between list-unstyled p-2'>
            <li style={{ fontSize: '24px' }}>Filtr</li>
            <li style={{ color: "#FF162E" }}>Filtrni tozalash</li>
          </div>
          <div className='d-flex flex-column align-items-center'>

            <select class="form-select mb-2" aria-label="Default select example">
              <option selected>OTM nomini tanlang</option>
            </select>

            <div class="input-group d-flex mb-2">
              <select class="form-select" id="inputGroupSelect04">
                <option selected>Ta’lim tilni tanlang</option>
              </select>
              <button class="btn text-light bg-primary" type="button"> <i class="bi bi-arrow-clockwise"></i>  Natijani qo‘llash</button>
            </div>

          </div>
        </div>
      </div>
      <div className='table-responsive'>
        <table class="table">
          <thead>
            <tr>
              <th >Mutaxasislik nomi</th>
              <th >Mutaxasislik shifiri</th>
              <th >Mutaxasislik sohasi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>New York No. 1 Lake Park</td>
              <td>Invite Brown Delete</td>
              <td>Brown developer</td>
            </tr>
            <tr>
              <td>New York No. 1 Lake Park</td>
              <td>Invite Brown Delete</td>
              <td>Brown developer</td>
            </tr>
            <tr>
              <td>London No.1 Lake Park</td>
              <td>Invite Brown Delete</td>
              <td>Green  loser</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div >
  )
}
