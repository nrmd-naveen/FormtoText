import './../styles/Header.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';

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
                <img src = './assets/appLogo.png' alt='Logo'/>
                    <h3 onClick={goToHome}>Patient Details</h3>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header;