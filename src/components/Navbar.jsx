import React, { useState } from 'react';
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'
const HomeNavbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleNav = () => {
    setToggleMenu((e) => !e)
  }


console.log(props.below)  
  return (
    <>
    <div className={toggleMenu ? 'HomeNavbar expanded' : 'HomeNavbar'}>
      <div className='logo'> <span> Magistr.edu.uz</span></div>
      <ul>
        <li onClick={()=>props.below(0,100)}>Asosiy</li>
        <li onClick={()=>props.below(0,700)}>Imtiyozlar</li>
        <li onClick={()=>props.below(0,3230)}>Yangiliklar</li>
        <li onClick={()=>props.below(0,2450)}>Statistika</li>
        <button className='btn1' data-bs-toggle="modal" href="#exampleModalToggle">Kirish </button>
      </ul>


      <div className="toggle-icon" onClick={toggleNav}>
        {toggleMenu ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
      </div>

    </div>
    </>
  );
};

export default HomeNavbar;

