
import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/Account.css'
import per from '../../images/person.png'


export default function FullInfo() {
    return (
        <>
            <div className="full-info">
                <div className="container">
                    <div className="row-12 py-4">
                        <Link to={'/'} className='head-step'>
                            <i className="bi bi-house-door-fill"></i>Bosh sahifa</Link>
                        <i className="bi bi-chevron-rightbi bi-chevron-right"></i>
                        <span className='open-link' > mening profilim </span>
                    </div>
                    <div className="page-title py-2">Mening arizam</div>
                    <div className="full-content d-flex justify-content-between">
                        <div className="full-about">
                            <div className="card p-3">
                                <div className="card-top pb-2 d-flex">
                                    <div className="fullLeft">
                                        <img src={per} alt="sad" />
                                    </div>
                                    <div className="fullRight">
                                        <div className="person-name">Askarov Abror Akmalovich</div>
                                        <div className="person-text">Erkak, 23 yosh (11.06.1998) </div>
                                        <div className="person-text">Fuqaroligi: O‘ZBEKISTON</div>
                                        <div className="person-text"><i className="bi bi-telephone"></i>+99891 371 88 91</div>
                                        <div className="person-text"><i className="bi bi-envelope"></i>abrorreal2017@gmail.com</div>

                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="body-title py-2">
                                        Abituriyentning tamomlagan ta’lim ma’lumotlari
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table">

                                            <tbody>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>OTM joylashgan davlat:</td>
                                                    <td className='col-5 td-about border-none'>O‘zbekiston</td>
                                                    <td className='col-3 td-name border-none'>Diplom ilovasini yuklang:</td>
                                                    <td className='col-2 border-none'><a href="#">Yuklash</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>OTM nomi:</td>
                                                    <td className='col-5 td-about border-none'>Muhammad al xorazmiy nomidagi toshkent
                                                        axborot texnologiya universiteti</td>
                                                    <td className='col-3 td-name border-none'>Diplom ilovasini:</td>
                                                    <td className='col-2 border-none'><a href="#">Yukalsh</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>Yo‘nalish nomi:</td>
                                                    <td className='col-5 td-about border-none'>Kompyuter injenering</td>
                                                    <td className='col-3 border-none'></td>
                                                    <td className='col-2 border-none'></td>
                                                </tr>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>Ta’lim shakli:</td>
                                                    <td className='col-5 td-about border-none'>Kunduzgi</td>
                                                    <td className='col-3 border-none'></td>
                                                    <td className='col-2 border-none'></td>
                                                </tr>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>Tamomlagan yili:</td>
                                                    <td className='col-5 td-about border-none'>2021 yil</td>
                                                    <td className='col-3 border-none'></td>
                                                    <td className='col-2 border-none'></td>
                                                </tr>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>Diplom seriyasi va raqami:</td>
                                                    <td className='col-5 td-about border-none'>AB1234567</td>
                                                    <td className='col-3 border-none'></td>
                                                    <td className='col-2 border-none'></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="body-title py-2">
                                        Abituriyentning chet tilini bilish ma’lumotlari
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table">

                                            <tbody>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>Chet tili:</td>
                                                    <td className='col-5 td-about border-none'>Ingliz</td>
                                                    <td className='col-3 td-name border-none'>Sertifikat fayli:</td>
                                                    <td className='col-2 border-none'><a href="#">Yuklash</a></td>
                                                </tr>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>Sertifikat turi:</td>
                                                    <td className='col-4 td-about border-none'>IELTS</td>
                                                    <td className='col-3 td-name border-none'>Hujjat berilgan sana:</td>
                                                    <td className='col-2 border-none'>12.12.2016</td>
                                                </tr>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>Sertifikat darajasi:</td>
                                                    <td className='col-4 td-about border-none'>B2 (5.5 - 6.5)</td>
                                                    <td className='col-3 border-none'></td>
                                                    <td className='col-2 border-none'></td>
                                                </tr>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>Seriya raqami:</td>
                                                    <td className='col-4 td-about border-none'>B12671375261536156351</td>
                                                    <td className='col-3 border-none'></td>
                                                    <td className='col-2 border-none'></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="body-title py-2">
                                        Abituriyentning imtiyoz beruvchi yutuqlari ma’lumotlari
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table">

                                            <tbody>
                                                <tr>
                                                    <td className='col-4 td-name border-none'>Hujjat nomi:</td>
                                                    <td className='col-4 td-about border-none'>Ingliz</td>
                                                    <td className='col-3 border-none'></td>
                                                    <td className='col-2 border-none'></td>
                                                </tr>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>Hujjat berilgan sana:</td>
                                                    <td className='col-4 td-about border-none'>B2 (5.5 - 6.5)</td>
                                                    <td className='col-3 border-none'></td>
                                                    <td className='col-2 border-none'></td>
                                                </tr>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>Hujjat fayli:</td>
                                                    <td className='col-4 td-about border-none'><a href="#">Yukalsh</a></td>
                                                    <td className='col-3 border-none'></td>
                                                    <td className='col-2 border-none'></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="body-title py-2">
                                        Abituriyentning alohida (nogironlik) ma’lumotlari
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table">

                                            <tbody>
                                                <tr>
                                                    <td className='col-4 td-name border-none'>Hujjat seryasi:</td>
                                                    <td className='col-4 td-about border-none'>A-07</td>
                                                    <td className='col-3 border-none'></td>
                                                    <td className='col-2 border-none'></td>
                                                </tr>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>Hujjat raqami :</td>
                                                    <td className='col-4 td-about border-none'>0112813</td>
                                                    <td className='col-3 border-none'></td>
                                                    <td className='col-2 border-none'></td>
                                                </tr>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>Hujjat fayli:</td>
                                                    <td className='col-2 td-about border-none'><a href="#">Yuklash</a></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="body-title py-2">
                                        Abituriyent arizasining ma’lumotlari
                                    </div>
                                    <div className="table-responsive ">
                                        <table className="table border-none">

                                            <tbody>
                                                <tr>
                                                    <td className='col-4 td-name border-none'>OTM nomi:</td>
                                                    <td className='col-6 td-about border-none'>Muhammad al xorazmiy nomidagi toshkent axborot texnologiya universiteti</td>
                                                    <td className='col-2'></td>
                                                    <td className='col-2'></td>
                                                </tr>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>Mutaxassislik nomi:</td>
                                                    <td className='col-4 td-about border-none'>Amaliy matematika (sohalar bo‘yicha)</td>
                                                    <td className='col-3 border-none'></td>
                                                    <td className='col-2 border-none'></td>
                                                </tr>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>Ta’lim tili:</td>
                                                    <td className='col-4 td-about border-none'>O‘zbek</td>
                                                    <td className='col-3 border-none'></td>
                                                    <td className='col-2 border-none'></td>
                                                </tr>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>Chet tili:</td>
                                                    <td className='col-4 td-about border-none'>Ingliz</td>
                                                    <td className='col-3 border-none'></td>
                                                    <td className='col-2 border-none'></td>
                                                </tr>
                                                <tr>
                                                    <td className='col-3 td-name border-none'>Imtihon joyi:</td>
                                                    <td className='col-4 td-about border-none'>Farg‘ona viloyati</td>
                                                    <td className='col-3 border-none'></td>
                                                    <td className='col-2 border-none'></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="full-sidebar">
                            <div className="side-top card mb-4">
                                <div className="fullSide-title body-title p-3">
                                    Ariza holati
                                </div>
                                <table className="table">
                                    <tr>
                                        <td><span className='span active'><i class="bi bi-check-lg"></i></span></td>
                                        <td><b>Ariza yuborildi</b></td>
                                    </tr>
                                    <tr>
                                        <td><span className='span'><i class="bi bi-check-lg"></i></span></td>
                                        <td>Ariza ko‘rib chiqilmoqda</td>
                                    </tr>
                                    <tr>
                                        <td><span className='span'><i class="bi bi-check-lg"></i></span></td>
                                        <td>Ariza ko‘rib chiqilmoqda</td>
                                    </tr>
                                    <tr>
                                        <td><span className='span'><i class="bi bi-check-lg"></i></span></td>
                                        <td>Ariza ko‘rib chiqilmoqda</td>
                                    </tr>
                                    <tr>
                                        <td><span className='span'><i class="bi bi-check-lg"></i></span></td>
                                        <td>Ariza ko‘rib chiqilmoqda</td>
                                    </tr>
                                </table>
                            </div>

                            <div className="print-content card py-2 px-4">
                                <div className="printf py-2"><i class="bi bi-printer"></i>Chop etish versiyasi</div>
                                <div className="printf py-2"><i class="bi bi-file-earmark-pdf"></i>PDF fayl yuklash</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
