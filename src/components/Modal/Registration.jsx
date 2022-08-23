import React from 'react'
import {useNavigate} from "react-router-dom"
export default function Registration() {
    const link=useNavigate();
  return (
    <>
        <div class="modal" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel">Ro'yhatdan o'tish</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="form">
                                <label>Telefon raqamingiz*</label>
                                <input type="number" className='form form-control mb-3' />
                                <label>Pasport seriyasi va raqami*</label>
                                <input type="text" className='form form-control mb-3' />
                                <label>JSHSHIR*</label>
                                <input type="number" className='form form-control mb-3' />
                            </div>
                        </div>
                        <div class="modal-footer flex-column">
                            <button class="btn btn-outline-primary w-75" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Ro'yhatdan o'tish</button>
                            <button class="btn btn-primary w-75" onClick={()=>link("/stepper")} data-bs-dismiss="modal">OneId orqali kirish</button>
                            <p>yoki</p>
                            <button class="btn btn-primary w-75" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Kirish</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
