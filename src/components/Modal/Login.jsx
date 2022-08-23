    import React from 'react'
    import {useNavigate} from "react-router-dom"

    export default function Login() {
    const  link=useNavigate()
    return (
        <>
        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalToggleLabel2">Tizimga kirish</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label>Telefon raqamingiz*</label>
                                <input type="text" className='form form-control mb-3' />
                                <label>Parol*</label>
                                <input type="password" className='form form-control mb-3' />
                                <div className='w-100 d-flex justify-content-between'>
                                    <p className='text-secondary' style={{ fontSize: "13px" }} >Kodni qayta yuborish <span className='text-primary'>1:59</span></p>
                                    <p className='changingPassword' data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">Parolni unutdingizmi?</p>
                                </div>
                            </div>
                            <div class="modal-footer flex-column">
                                <button class="btn btn-outline-primary w-75"  onClick={()=>link("/stepper")} data-bs-dismiss="modal">Kirish</button>
                                <p>yoki</p>
                                <button class="btn btn-primary w-75"  onClick={()=>link("/stepper")} data-bs-dismiss="modal">OneId orqali kirish</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
    }
