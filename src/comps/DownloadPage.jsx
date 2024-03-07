import './../styles/downloadPage.scss';
import { getDate } from "./services/getDate";
import React, { useEffect, useState } from 'react'
import { downloadAsXLSX, downloadAsPDF, downloadAsJSON } from './services/handleDownloads/downloader';
import { getDownloadData } from "./services/handleDownloads/getDownloadData";
import { getData } from "./services/getData";
import { formatData } from "./services/handleDownloads/formatData";
import { Patient } from './PatientList';
import Swal from 'sweetalert2';

const DownloadPage = () => {
  const monthStartDate = (todayDate) => {
     return(todayDate.slice(0,8)+"01");
  }
  const [fileType, setFileTye] = useState('PDF');
  const [fromDate, setFromDate] = useState(monthStartDate(getDate()));
  const [toDate, setToDate] = useState(getDate());
  const [data, setData] = useState();
  const [selectedData, setSelectedData] = useState(null);
  
  useEffect(()=>{
    setSelectedData(getDownloadData(data,fromDate,toDate));
    //console.log("selected __ ",selectedData);
  },[data,fromDate,toDate])

  useEffect(()=>{
    setData(getData("PatientData"));
  },[])
  const handleFileChange = (e) =>{
      setFileTye(e.target.value);
  }
  const handleFromChange = (e) =>{
    setFromDate(e.target.value);
    //console.log("SEL - ",getDownloadData(data,fromDate,toDate));
  }
  const handleToChange = (e) =>{
    setToDate(e.target.value);
  }
  const center = {
    color:"rgb(147, 147, 147)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }

  const performDownload = () =>{
    if(selectedData === null){
      Swal.fire({icon:"warning",text:"Sorry! No Records Found on specified Date"});
      return;
    }
    const downloadData = formatData(selectedData); // Filtering User needed fields i.e, excluding ID and stuff 
    Swal.fire({
      title: `Do you want to Download as a ${fileType} file ?`,
      text: "Get the entire Pateint Data !",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Download"
    }).then((result) => {
      if (result.isConfirmed) {
        fileType === 'PDF' ? downloadAsPDF(downloadData) : fileType === 'EXCEL' ? downloadAsXLSX(downloadData):downloadAsJSON(downloadData);
      }
    })
  }
  return (
    <div className='downMainCont'>
        <div className='selectionCont'>
          <div className='dateInput'>
            <div>
              <label>From :</label>
              <input value={fromDate} onChange={handleFromChange} type='date'></input>
            </div>
            <div>
              <label>To :</label>
              <input value={toDate} onChange={handleToChange} type='date'></input>      
            </div>
          </div>
          <div className='downloadCont'>
            <div className='typCont'>
              <div className='filTyp'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <label>
                File Type 
                </label>
              </div>
              <select name="fileType" value={fileType}id="fileType" onChange={handleFileChange}>
                <option>PDF</option>
                <option>EXCEL</option>
                <option>JSON</option>
              </select>
            </div>
            <button onClick={performDownload}>Download
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </button>
          </div>
        </div>
        <div className='patientsContainer'>
      {selectedData=== null ? <p style={center}>No Records Found</p> : selectedData.map( (el, ind) => <Patient data = {el} ind={ind+1} key = {el.id} /> )}
      </div>
    </div>
  )
}

export default DownloadPage;