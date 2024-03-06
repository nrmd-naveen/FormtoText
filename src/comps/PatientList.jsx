import './../styles/PatientList.scss';
import React, { useEffect, useState } from 'react';
import { getData } from './services/getData';
import DownloadButton from './Download';
import { getDisplayData } from './services/getDisplayData';
import Swal from 'sweetalert2';

function PatientList() {
  const [sortedData, setSortedData] = useState(null);
  useEffect(()=>{
    const data = getData("PatientData");
    if(data === null || data[0] === undefined){
      setSortedData(null);
    }else{
      const newData = data.sort((a, b) => new Date(a.date) - new Date(b.date));
      setSortedData(newData);
    }
  },[]);

  const center = {
    color:"rgb(147, 147, 147)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }

  return (
    <div className='mainCon'>
      <h2 className='h2'>
        <div className='lftHead'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
        </svg>
          Patient List 
        </div>
          {sortedData && <DownloadButton data = {sortedData} />}
      </h2>
      <div className='patientsContainer'>
      {sortedData=== null ? <p style={center}>No Records Found</p> : sortedData.map( (el, ind) => <Patient data = {el} ind={ind+1} key = {el.id} /> )}
      </div>
    </div>
  )
}

const Patient = (props) =>{
  const patient = props.data;
  const setDateFormat = (date) =>{
    let arr = date.split("-");
    arr = arr.reverse();
    return arr.join("-");
  }
  const displayData = (e) =>{
    e.preventDefault();
    const userData = getDisplayData(e.currentTarget.id,"PatientData");
    //Displaying the clicked user's Data
    Swal.fire({html : userData});
  }
  return(
        <div id={patient.id} onClick={displayData} className='patient'>
          <span>{props.ind}.</span>
          <div className='content'>
            <p className='name'>{patient.name}</p>  
          <p className='date'>{setDateFormat(patient.date)}</p>
          </div>
          
        </div>
  )
}
export default PatientList;