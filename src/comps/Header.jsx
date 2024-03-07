import './../styles/Header.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import logo from './../assets/appLogo.png';

const Header = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleToggleSidebar = (e) => {
        if (e.target.tagName.toLowerCase() === 'ul'|| e.target.closest('ul')) {
            // not propagating into buttons
            return;}
        setSidebarOpen(!sidebarOpen);
    };
    const Navigate = useNavigate();
    const goToHome = () =>{
        Navigate('/');
    }
  return (
    <div>
        { sidebarOpen ?   
        <SideBar handleToggleSidebar ={handleToggleSidebar} setSidebarOpen = {setSidebarOpen} />
        :null}            
        <header>
            <div className='topBar'>
                <div>
                   <button onClick={handleToggleSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button> 
                </div>  
                <div className='hd'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

                    <h3 onClick={goToHome}>Patient Details</h3>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header;