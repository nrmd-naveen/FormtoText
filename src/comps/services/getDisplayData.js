import { getData } from "./getData"

export const getDisplayData = (id,Lid) =>{
    const data = getData(Lid);
    //  console.log(' Got Data', data)
    const obj = data.find( el => el.id === Number(id));
    // console.log('obj', obj)
    var gender = obj.gender;
    if(Number(obj.age)<18){
        gender = gender === 'male' ? "male child" : "female child";
    }
    let garHead = 'D/o';
    if(obj.fmnameHead === "" || obj.fmnameHead === null || obj.fmnameHead === undefined){
        garHead = obj.gender==='male'?'S/o':(Number(obj.age)>25?'W/o':'D/o');
    }else{
        garHead = obj.fmnameHead;
    }
    
    const userData = 
   `<h2 style="text-decoration:underline;">Patient Data :</h2>
    <div style="display:flex; justify-content:center;">
    <div style="text-align: left; margin-left:15px;">
    <pre>
    Name          -       ${obj.name}
    Age              -       ${obj.age}
    Gender       -      ${gender}
    ${garHead}               -      ${obj.fmname}
    Street          -      ${obj.street}
    Town            -       ${obj.village}
    Phone          -      ${obj.phone}
    </pre>
    </div>
    </div>
    `

    return userData;
}