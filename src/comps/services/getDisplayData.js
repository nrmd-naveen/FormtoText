import { getData } from "./getData"

export const getDisplayData = (id) =>{
    const data = getData();
    const obj = data.find( el => el.id === Number(id));
    console.log('obj', obj)
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
    <div style="text-align: left; display:flex; flex-direction:row;">
    <ul style="list-style-type: none;" >
      <li>Name</li>
      <li>Age</li>
      <li>Gender</li>
      <li>${garHead}</li>
      <li>Street</li>
      <li>Town</li>
      <li>Phone</li>
    </ul>
    <div style="margin:0 20px;">
    <ul style="list-style-type: none;" >
      <li>-</li>
      <li>-</li>
      <li>-</li>
      <li>-</li>
      <li>-</li>
      <li>-</li>
      <li>-</li>
    </ul>
    </div>
    <ul style="list-style-type: none;">
      <li style="color:black;">${obj.name}</li>
      <li>${obj.age}</li>
      <li>${gender}</li>
      <li>${obj.fmname}</li>
      <li>${obj.street}</li>
      <li>${obj.village} </li>
      <li>${obj.phone}</li>
    </ul>
    </div>
    </div>
    `

    return userData;
}