import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import  { font } from '../../../styles/TrioTamil-Regular';
import * as XLSX from 'xlsx';



    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    window.pdfMake.vfs["TiroTamil-Regular.ttf"] = font

export const downloadAsPDF = (downloadData) =>{

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
            widths: ['auto', 'auto', 'auto', 'auto', 'auto', 25, 'auto', 'auto', 'auto', 'auto'], // Adjust column widths as needed
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


export const downloadAsJSON = (downloadData) =>{
    if (downloadData && downloadData[0] !== undefined){
        const jsdata = JSON.stringify(downloadData);
        const blob = new Blob([jsdata], { type: 'application/json' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'data.json';
        link.click();
    }
}


export const downloadAsXLSX = (downloadData) => {
    if (downloadData && downloadData[0] !== undefined) {
        const ws = XLSX.utils.json_to_sheet(downloadData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        XLSX.writeFile(wb, 'data.xlsx');
      }
  };