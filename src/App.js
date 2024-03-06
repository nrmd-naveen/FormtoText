import Main from './comps/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './comps/About';
import PatientList from './comps/PatientList';
import DeletedList from './comps/DeletedList';
import NotFound from './comps/NotFound';
import Header from './comps/Header';
import { useState } from 'react';
import SideBar from './comps/SideBar';
import { useMediaQuery } from 'react-responsive';


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = (e) => {
      if (e.target.tagName.toLowerCase() === 'ul'|| e.target.closest('ul')) {
          // not propagating into buttons
          return;}
      setSidebarOpen(!sidebarOpen);
  };
  const isDesktop = useMediaQuery({
    query : '(min-width:750px)'
  })

  return (
    <Router>
      {isDesktop ? <SideBar /> : sidebarOpen ?   
            <SideBar handleToggleSidebar ={handleToggleSidebar} setSidebarOpen = {setSidebarOpen} />
            :null} 
      <Header />
        <div className='pagesCont'>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/Patients" element={<PatientList />} />
            <Route path="/Deleted" element={<DeletedList />} />
            <Route element={<NotFound />} /> 
          </Routes>
        </div>
        
     
    </Router>
  );
}

export default App;
