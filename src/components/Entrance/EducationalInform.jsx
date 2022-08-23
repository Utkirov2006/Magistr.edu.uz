import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'

export default function EducationalInform() {
  return (
    <div className='educationalBlock w-100 d-flex flex-column justify-content-around'>

      <div className="educationalAdd d-flex justify-content-between align-items-center px-3 bg-light">
        <h4>Ta'lim ma'lumotlari</h4>
        <button  className='btn btn-success educationalBtn' data-bs-target="#exampleModalToggle6" data-bs-toggle="modal" data-bs-dismiss="modal"><i class="bi bi-plus-lg"></i> Qo'shish</button>
      </div>
<Modal/>
      <div className="educationalContent w-100 bg-light p-3">
        <table>
          <tbody>
            <tr>
              <th>OTM joylashgan joy</th>
              <td>O'zbekiston</td>
              </tr>
              <tr>
              <th>OTM nomi:</th>
              <td>O'zbekistonMuhammad al xorazmiy nomidagi toshkent
axborot texnologiya universiteti</td>
              </tr>
              <tr>
              <th>Yo‘nalish nomi:</th>
              <td>Kompyuter injenering</td>
              </tr>
              <tr>
              <th>Ta’lim shakli:</th>
              <td>Kunduzgi</td>
              </tr>
              <tr>
              <th>Tamomlagan yili:</th>
              <td>2021 yil</td>
              </tr>
              <tr>
              <th>Diplom seriyasi va raqami:</th>
              <td>AB1234567</td>
              </tr>
              <tr>
              <th>Diplom o‘rtacha bali:</th>
              <td>98.0</td>
              </tr>
          </tbody>
        </table>
      </div>

      <div className="w-100 stepperFooter d-flex justify-content-end align-items-center px-4 bg-light">
          <Link to="/stepper/privilege" className='stepperFooterBtn btn btn-primary d-flex align-items-center justify-content-center'>Keyingi qadam</Link>
        </div>

    </div>
  )
}
