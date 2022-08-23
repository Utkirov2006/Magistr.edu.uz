import React from 'react'

export default function AddEducation() {
    return (
        <div>
            <div class="modal fade " id="exampleModalToggle6" aria-hidden="true" aria-labelledby="exampleModalToggleLabel6" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel6">Ta'lim ma'lumotlari</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label>O‘quv muassasi joylashgan davlat*</label>
                            <select class="form-select mb-4" aria-label="Default select example">
                                <option selected>O‘quv muassasi joylashgan davlat*</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label>O‘quv muassasi nomi*</label>
                            <select class="form-select mb-4" aria-label="Default select example">
                                <option selected>Muhammad al xorazmiy nomidagi toshkent axborot texnologiya universitetiti</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div className='d-flex flex-xl-row flex-column justify-content-between'>
                                <div className="form addEducationInput">
                                    <label>Talim shakli*</label>
                                    <select class="form-select mb-4" aria-label="Default select example">
                                        <option selected>Kunduzgi</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="form addEducationInput">
                                    <label>Tamomlagan yili*</label>
                                    <select class="form-select mb-4" aria-label="Default select example">
                                        <option selected>2021</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <label>Yo‘nalish nomi*</label>
                            <select class="form-select mb-4" aria-label="Default select example">
                                <option selected>Kompyuter injeneringi</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label>Diplom seriyasi va raqamini kiriting*</label>
                            <select class="form-select mb-4" aria-label="Default select example">
                                <option selected>AB 12345</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div className='d-flex flex-xl-row flex-column justify-content-between'>
                                <div className="form addEducationInput">
                                    <label>Diplom nusxasi*</label>
                                    <input class="form-control mb-2" type="file" id="formFile"/>
                                </div>
                                <div className="form addEducationInput">
                                    <label>Diplom ilovasini yuklang*</label>
                                    <input class="form-control mb-2" type="file" id="formFile"/>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-between">
                            <div>
                                <button class="btn btn-success px-5 py-2" data-bs-dismiss="modal">Saqlash</button>
                                <button class="btn btn-light btn-md ms-1" data-bs-dismiss="modal">Bekor qilish</button>
                            </div>
                            <button class="btn btn-light text-danger btn-md" data-bs-dismiss="modal"><i class="bi bi-trash3"></i> O'chirish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
