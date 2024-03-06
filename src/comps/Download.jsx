import './../styles/Download.scss';
import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import  { font } from './../styles/TrioTamil-Regular';
import Swal from 'sweetalert2';

const DownloadButton = (props) => {
    const data = props.data;
    const[downloadData, setDownloadData] = useState(null);
    const setDateFormat = (date) =>{
      let arr = date.split("-");
      arr = arr.reverse();
      return arr.join("-");
    }
    useEffect(()=>{
      if(data !==null){
        const alignedData = data.map((el,ind)=>{
        const nameHead = el.gender === 'male'? 'S/o':el.age > 25 ?"W/o":"D/o";
        return ({
          "S.No":ind+1,
          "Name":el.name,
          "Age":el.age,
          "Gender":el.gender,
          " ":el.fmnameHead?el.fmnameHead:nameHead,
          "Relation":el.fmname,
          "Date":setDateFormat(el.date),
          "Street":el.street,
          "Village":el.village,
          "Phone No":el.phone
        })
      })
      setDownloadData(alignedData);
      } 
    },[data])
    const downloadAsJSON = () =>{
        if (downloadData && downloadData[0] !== undefined){
            const jsdata = JSON.stringify(downloadData);
            const blob = new Blob([jsdata], { type: 'application/json' });
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'data.json';
            link.click();
        }
    }
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    window.pdfMake.vfs["TiroTamil-Regular.ttf"] = font
    const downloadAsPDF = () =>{
      pdfMake.fonts={
      TiroTamilRegular: {
      normal: 'TiroTamil-Regular.ttf',
      bold: 'TiroTamil-Regular.ttf',
      italics: 'TiroTamil-Regular.ttf',
      bolditalics: 'TiroTamil-Regular.ttf'
        }
      };
  
      const jsonData = downloadData;
  
      const tableBody = jsonData.map(data => Object.values(data));
      let tableHeaders = Object.keys(jsonData[0]);
      const docDefinition = {
        pageSize:'A4',
        pageOrientation: 'landscape',
        content: [
          {
            text: 'PATIENT DETAILS',
            style: 'header',
            alignment: 'center',
            fontSize: 15
          },
          {
            table: {
              headerRows: 1,
              widths: ['auto', 'auto', 'auto', 'auto', 25, 'auto', 'auto', 'auto', 'auto', 'auto'], // Adjust column widths as needed
              body: [
                tableHeaders, // Header row
                ...tableBody, // Data rows
              ]
            }
          }
        ],
        defaultStyle: {
          font: 'TiroTamilRegular',
        },
        styles: {
          header: {
            fontSize: 16,
            bold: true,
            margin: [0, 0, 0, 10],
          }
        },
      };
  
      pdfMake.createPdf(docDefinition).download('PatientDetials.pdf');
    }
  const downloadAsXLSX = () => {
    if (downloadData && downloadData[0] !== undefined) {
        const ws = XLSX.utils.json_to_sheet(downloadData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, 'data.xlsx');
      }else{
        alert("No Record")
      }
  };
  const [fileType, setFileTye] = useState('PDF');
  const handleFileChange = (e) =>{
      setFileTye(e.target.value);
  }
  const handleFileDownload = () =>{
    Swal.fire({
      title: `Do you want to Download a ${fileType} file ?`,
      text: "Get the entire Pateint Data !",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Download"
    }).then((result) => {
      if (result.isConfirmed) {
        fileType === 'PDF' ? downloadAsPDF() : fileType === 'EXCEL' ? downloadAsXLSX():downloadAsJSON();
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