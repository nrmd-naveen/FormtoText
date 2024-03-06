import '../styles/sideBar.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    const initId = window.location.pathname.substring(1)=== "" ? 'home' :window.location.pathname.substring(1);
    const [curId , setCurId] = useState(initId);
    const handleToggleOption = (e) =>{
        console.log(window.location.pathname.substring(1));
    setCurId(e.currentTarget.id);
    }
    
    const curOpt = {
        backgroundColor:"rgba(255, 255, 255, 0.5)",
        borderTopRightRadius : "5px",
        borderBottomRightRadius : "5px",
        transform: "scale(1.05)"
    }
  return (
    <div onClick={props.handleToggleSidebar} className='backdrop'>
        <div className='sidebar'>
            <h3>Patient Details</h3>
            <span></span>
            <ul>
                <li id='home' style = {curId === 'home' ? curOpt : null}  onClick={handleToggleOption}>
                    <Link to='/'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Home
                    </Link>
                </li>
                <li id='Patients' style = {curId === 'Patients' ? curOpt : null}  onClick={handleToggleOption}>
                <Link to='/Patients'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                </svg>
                    Patient List
                </Link>
                </li>
                <li id='Deleted' style = {curId === 'Deleted' ? curOpt : null}  onClick={handleToggleOption}>
                <Link to='/Deleted'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
                    Deleted List
                </Link>
                </li>
                <li id='about' style = {curId === 'about' ? curOpt : null}  onClick={handleToggleOption}>
                <Link to='/about'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                    About
                </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar;