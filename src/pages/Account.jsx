import React from 'react'
import {Outlet} from 'react-router-dom'
import "../style/Account.css";
import Modal from '../components/Modal/Modal';

export default function Account() {
  return (
    <>
    <Modal/>
      <Outlet/>

    </>
  )
}
