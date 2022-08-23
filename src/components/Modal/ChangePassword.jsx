import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ChangePassword() {
    const link=useNavigate();
  return (
    <>
     <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel3">Parolingiz esdan chiqdimi?</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="alert alert-primary mb-3" role="alert" style={{fontSize:"13px"}}>
                                Telefon raqamingizni yozing va biz sizga tasdiqlash kodini yuboramiz. Shundan soʼng yangi parol oʼrnatishingiz mumkin.
                            </div>
                            <label>Telefon raqamingiz*</label>
                            <input type="text" className='form form-control mb-3' />
                        </div>
                        <div class="modal-footer flex-column">
                            <button class="btn btn-primary w-75" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" data-bs-dismiss="modal">O'zgartirish</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel4" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel4">Parolingiz esdan
                                chiqdimi?</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="alert alert-primary mb-3" role="alert" style={{fontSize:"13px"}}>
                            Yangi parolingizni oʼrnatish uchun kod +99890 371 88 91 ga yuborildi.
                            </div>
                            <label>SMS kodni kiriting*</label>
                            <input type="text" className='form form-control mb-3' />
                            <label>Yangi parolni kiriting*</label>
                            <input type="text" className='form form-control mb-3' />
                            <p className='text-primary' style={{fontSize:"13px"}}>Kodni qayta yuborish </p>
                        </div>
                        <div class="modal-footer flex-column">
                            <button class="btn btn-primary w-75"  onClick={()=>link("/entrance")} data-bs-dismiss="modal">O'zgartirish</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
