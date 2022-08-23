import React from 'react';
import { Link } from 'react-router-dom';
import "../style/Application.css";
import '../style/Account.css';
import img from '../images/rut-miit-3EMw3T-ZjkE-unsplash.jpg';

export default function Application() {
    return (
        <>

            <div className="account">
                <div className="container ">
                    <div className="row-12 py-4">
                        <Link to={'/'} className='head-step'>
                            <i className="bi bi-house-door-fill"></i>Bosh sahifa</Link>
                        <i class="bi bi-chevron-rightbi bi-chevron-right"></i>
                        <span className='open-link' > mening profilim </span>
                    </div>

                    <div className="account-content">
                        <div className="account-sidebar p-4 border">
                            <div className="person-head d-flex align-items-center flex-wrap p-2">
                                <div className="avatar">
                                    <img src={img} alt="" />
                                </div>
                                <div className="avatar-name">ASKAROV ABROR</div>
                            </div>
                            <div className="person-body">
                                <div className="title py-2 my-2">Mening arizalarim</div>
                                <div className="row aplication p-4 my-4">Mening arizalarim (0)</div>
                                <div className="setting my-4">Sozlamalar</div>
                                <div className="note py-2 my-2 d-flex justify-content-between align-items-center">
                                    <span>Bildirishnomalar</span>
                                    <span><input type="checkbox" id="mode" /></span>
                                </div>
                                <div className="note-text py-2 my-2">Telegram bot orqali obuna bo’lingan OTMlarning yangi vakansiyalari va yuborgan arizalaringizni statuslaridan xabardor bo’lasiz.</div>

                            </div>

                            <div className="links py-2 my-2">
                                <div className="link-title my-2 py-2">Foydali xavolalar</div>
                                <ul className='ul__nav'>
                                    <li className='nav__link py-2' >Telegram kanal (@eduuz)</li>
                                    <li className='nav__link py-2' >Telegram bot (@elektron_talim_markazi)</li>
                                    <li className='nav__link py-2' >Telegram bot (dghagdhgshgdhgsh)</li>
                                    <li className='nav__link py-2' >Telegram bot (dghagdhgshgdhgsh)</li>
                                </ul>
                            </div>
                        </div>
                        <div className="account-about p-2">
                            <div className="account-title ">Mening arizalarim</div>

                            <div className="petition-content">
                                <div className="card card-add my-4">
                                    <img src={img} alt="" />
                                    <div className="card-added p-4 ">
                                        <div className="add-title my-4">Qabul 2023</div>
                                        <div className="btn btn-warning text-start">Ariza topshirish <i className="bi bi-arrow-right"></i></div>
                                    </div>
                                </div>
                                <div className="card p-4">
                                    <div className=" card-top py-2 d-flex justify-content-between">
                                        <div className='ariza'>Ariza id: 123456</div>
                                        <div className='ariza-date'>Ariza topshirilgan vaqt: <span className="date">14:00 12.12.2021</span></div>
                                    </div>
                                    <div className="cart-body d-flex flex-wrap py-2">
                                        <div className="cardBody-left">
                                            <div className="otm-title py-2 my-2">Ariza topshirilgan OTM:</div>
                                            <div className="otm-name my-2">Muhammad al xorazmiy nomidagi toshkent axborot texnologiya universiteti</div>
                                            <div className="otm-locate"><i class="bi bi-geo-alt"></i> Toshkent</div>
                                        </div>
                                        <div className="cardBody-right d-flex justify-content-start align-items-end">
                                            <div className="status py-2 my-2">Ariza holati:</div>
                                            <div className="status-action p-2 ">Ariza yuborildi</div>
                                        </div>
                                    </div>
                                    <div className="card-bottom py-2">
                                        <div className=" d-flex justify-content-between align-items-center">
                                            <div className="bottom-left d-flex align-items-center">
                                                <i class="bi bi-trash-fill"></i>
                                                <span className="delete">Arizani o'chirish</span>
                                            </div>
                                            <div className="bottom-right">
                                                <div className="btn btn-outline-dark mx-4"><i class="bi bi-pencil"></i>Tahrirlash</div>
                                                <Link to="full-info" className="btn btn-primary">Batafsil</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
