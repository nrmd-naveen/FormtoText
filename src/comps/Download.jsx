import './../styles/Download.scss';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { downloadAsXLSX, downloadAsPDF, downloadAsJSON } from './services/handleDownloads/downloader';
import { formatData } from './services/handleDownloads/formatData';

const DownloadButton = (props) => {
    const data = props.data;
    const[downloadData, setDownloadData] = useState(null);

    useEffect(()=>{
      if(data !==null){
      setDownloadData(formatData(data));
      } 
    },[data])
   
  const [fileType, setFileTye] = useState('PDF');
  const handleFileChange = (e) =>{
      setFileTye(e.target.value);
  }

  const handleFileDownload = () =>{
    if(downloadData === null){
      //No Records
      return;
    }
    Swal.fire({
      title: `Do you want to Download a ${fileType} file ?`,
      text: "Get the entire Pateint Data !",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Download"
    }).then((result) => {
      if (result.isConfirmed) {
        fileType === 'PDF' ? downloadAsPDF(downloadData) : fileType === 'EXCEL' ? downloadAsXLSX(downloadData):downloadAsJSON(downloadData);
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // })
      }
    });  

  }
  return (
    <div className='downloadContainer'>
      <select name="fileType" value={fileType} id="fileType" onChange={handleFileChange}>
          <option>PDF</option>
          <option>EXCEL</option>
          <option>JSON</option>
      </select>
      <button onClick={handleFileDownload}>
        Save
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
      </svg>
      </button>
    </div>
    
  );
};

export default DownloadButton;