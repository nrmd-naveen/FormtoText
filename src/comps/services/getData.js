import Swal from 'sweetalert2';
import dummyData from './dummyData.json';

export const getData = (ID) =>{
    let LSdata = JSON.parse(localStorage.getItem(ID));
    //console.log('LSD ---- ', LSdata)
    if(LSdata === null ){
        LSdata = dummyData;
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
