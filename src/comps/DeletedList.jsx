import './../styles/DeletedList.scss';
import React, { useEffect, useState } from 'react';
import { getDisplayData } from './services/getDisplayData';
import Swal from 'sweetalert2';
function DeletedList() {
  const [deletedData, setDeletedData] = useState(null);
  useEffect(()=>{
    let delData = JSON.parse(localStorage.getItem("DeletedData"));
    try {
      delData = delData.map(el => delData[0][0] ? delData[0][0]: delData[0])
    } catch (error) {
      console.log(error);
    }
    // console.log("Mod - ",delData);
    if(delData === null || delData[0] === undefined){
      setDeletedData(null);
    }else{
      const newData = delData.sort((a, b) => new Date(a.date) - new Date(b.date));
      setDeletedData(newData);
    }
  },[]);

  const center = {
    color:"rgb(147, 147, 147)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
  // On Going ---

  return (
    <div className='mainCon'>
      <h2>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
      </svg>  
        Deleted List </h2>
      <div className='patientsContainer'>
      {deletedData=== null ? <p style={center}>No Records Found </p> : deletedData.map( (el, ind) => <Patient data = {el} ind={ind+1} key = {el.id} /> )}
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
    const userData = getDisplayData(e.currentTarget.id,"DeletedData");
    //Displaying the clicked user's Data
    Swal.fire({html : userData});
  }
  return(
    <div className='ptCont'>
        <div onClick={displayData} id={patient.id} className='patient'>
          <span>{props.ind}.</span>
          <div className='content'>
            <p className='name'>{patient.name}</p>  
            <p className='date'>{setDateFormat(patient.date)}</p>
          </div>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
        <path d="M 15 3 C 8.9134751 3 3.87999 7.5533546 3.1132812 13.439453 A 1.0001 1.0001 0 1 0 5.0957031 13.697266 C 5.7349943 8.7893639 9.9085249 5 15 5 C 17.766872 5 20.250574 6.1285473 22.058594 7.9414062 L 20 10 L 26 11 L 25 5 L 23.470703 6.5292969 C 21.300701 4.3575454 18.309289 3 15 3 z M 25.912109 15.417969 A 1.0001 1.0001 0 0 0 24.904297 16.302734 C 24.265006 21.210636 20.091475 25 15 25 C 11.977904 25 9.2987537 23.65024 7.4648438 21.535156 L 9 20 L 3 19 L 4 25 L 6.0488281 22.951172 C 8.2452659 25.422716 11.436061 27 15 27 C 21.086525 27 26.12001 22.446646 26.886719 16.560547 A 1.0001 1.0001 0 0 0 25.912109 15.417969 z"></path>
        </svg> */}
    </div>
  )
}
export default DeletedList;