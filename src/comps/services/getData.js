import Swal from 'sweetalert2';
import { getDate } from './getDate';
const newDate = (i) =>{
    const d = getDate();
    let x = parseInt(d.slice(8,11));
    let x_i = x-i >= 10 ? x-i : `0${x-i}` 
    const retDat = x-i >=1 ? x_i : x ; 
    return  d.slice(0,8)+`${retDat}`;
  }
const sampleData = [];
const createSampleData = () =>{
  if(sampleData.length !== 0){
    return sampleData;
  }
  for(let i=9;i>=0;i--){
    sampleData.push({
      "id": 3860+i,
      "date": newDate(i),
      "name": `Patient_Name`,
      "age": 30+i,
      "gender": "male",
      "fmnameHead": "S/o",
      "fmname": `Father_Name `,
      "street": "example street",
      "village": "village name",
      "phone": "0000000000"
  })
  }
  return sampleData;
}

export const getData = (ID) =>{
    console.log(createSampleData());
    let LSdata = JSON.parse(localStorage.getItem(ID));
    //console.log('LSD ---- ', LSdata)
    if(ID === "PatientData" && LSdata === null ){
        localStorage.setItem("PatientData",JSON.stringify(sampleData));
        LSdata = sampleData;
        function showAlertOnce() {
            if (!localStorage.getItem('alertShown')) {
              const alertText = `
                🎉 Welcome! Initially start Exploring features with Sample Data. 
                Once you start adding your own, the samples will automatically be cleared. Try Exploring it!`
                Swal.fire({
                    text:alertText
                });
              localStorage.setItem('alertShown', 'true');
            }
          }
        window.onload = showAlertOnce;
    }
    // console.log("Return Data - ",LSdata);
    return LSdata;
}
