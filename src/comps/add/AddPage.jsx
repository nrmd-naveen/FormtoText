import {useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './../../styles/addPage.scss'


const AddPage = (props) =>{
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [fmname, setFmName] = useState();
    const [fmnameHead, setFmNameHead] = useState();//gender==='male'?'S/o':(Number(age)>20?'W/o':'D/o')
    const [street, setStreet] = useState('');
    const [village, setVillage] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState(props.date);
    const [id, setId] = useState(props.prevId);

    const [btnText, setBtnText] = useState('Add');
    useEffect(()=>{
        if(props.eData){
            setForm(props.eData);
            setBtnText('Update');
          }else{
            setBtnText('Add');
          }
    },[props.eData])
    const constructInputObject = () => {
        // consolidating input values
        return {
            id:id+3,
            date: date,
            name,
            age,
            gender,
            fmnameHead:fmnameHead,
            fmname:fmname,
            street,
            village,
            phone
        };
      };

    const handleInput = (e) => {
        // Handle input changes for eachField
        switch (e.target.name) {
          case 'name':
            setName(e.target.value);
            break;
          case 'age':
            setAge(e.target.value);
            break;
          case 'gender':
            setGender(e.target.id);
            break;
          case 'fmname':
            setFmName(e.target.value);
            break;
          case 'street':
            setStreet(e.target.value);
            break;
          case 'village':
            setVillage(e.target.value);
            break;
          case 'phone':
            setPhone(e.target.value);
            break;
        case 'fmnameHead' :
            setFmNameHead(e.target.value);
            break;
          default:
            break;
        }
      };
    
      const setForm = (data) => {
        console.log("At Set Form !")
        setName(data.name);
        setAge(data.age);
        setGender(data.gender);
        setFmName(data.fmname);
        setFmNameHead(data.fmNameHead ? data.fmNameHead : data.gender==='male'?'S/o':(Number(data.age)>25?'W/o':'D/o'));
        setStreet(data.street);
        setVillage(data.village);
        setPhone(data.phone);
    };
    
     
    // Function to reset all inputFields
    const resetForm = () => {
        setName('');
        setAge('');
        setGender('');
        setFmName('');
        setStreet('');
        setVillage('');
        setPhone('');
    };

     useEffect(() => {
         setDate(props.date);
     }, [props.date]);

    const notRequired = ["street","phone","fmname"]
    const required = [];
    const crctMobile = () =>{
        return phone.length===10 || phone === "" ?  true :false;
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setId(id+10);
        const input = constructInputObject();
        //console.log("Constructed Data -- ",input);
        //Validation
        for(const key in input){ 
            if(!(notRequired.includes(key))){ //is the key is an RequiredFields
                if(input[key] === null || input[key] === ''){ 
                    if(!(required.includes(key))){  //if not in RequiredFields
                        required.push(key);
                    }
                }
            } 
        }
        if(required[0] != null ){ //Checking RequiredFields
            let txt = '';
            required.forEach( e => txt!== "" ? txt+= ", " +e.toUpperCase():txt+= " " +e.toUpperCase());
            Swal.fire({
                icon: "error",
                title: "Fill All These ...",
                text: txt
            });
        }else{
            if(!crctMobile()){
                Swal.fire({
                    icon: "error",
                    title: "Invalid Mobile ",
                    text: "Enter 10 Digit Phone Number !"
                });
                return;
            }
            //Saving Data ...
            const LSdata = JSON.parse(localStorage.getItem("PatientData"));
            let Data = localStorage.getItem("PatientData") !== null ? LSdata : [];
            if(props.eData){
                console.log("Updating Old --");
                console.log("pre",Data);
                console.log("Input - ",input);
                let newData = Data.map( el => el.id !== props.eData.id ? el : input);
                console.log("post",newData);
                localStorage.setItem("PatientData",JSON.stringify(newData));
                props.updateParentData(newData)       // updating to parent comp
                resetForm();
                Swal.fire({
                    title: "Patient Updated !",
                    text: `Name : ${input.name}`,
                    icon: "success"
                })

            }else{
                console.log("Adding New -- ")
                Data.push(input);
                localStorage.setItem("PatientData",JSON.stringify(Data));
                props.updateParentData(Data)       // updating to parent comp
                resetForm();
                Swal.fire({
                    title: "New Patient Added !",
                    text: `Name : ${input.name}`,
                    icon: "success"
                })
            }
        }
    }

    return(
        <div className='mainContainer' > 
            <div className="formContainer">
                <form onSubmit={handleSubmit} >
                    <div className="inputField">
                        <label>Name</label>
                        <input name='name' value={name} onChange={handleInput} type="text"></input>
                    </div>
                    <div className="inputField">
                        <label>Age</label>
                        <input name='age' value={age} onChange={handleInput} type="tel"></input>
                    </div>
                    <div className="inputField gen">
                        <label>Gender</label>
                        <div className='radios'>
                            <input className='custom-radio-button' name='gender'id='male' onChange={handleInput} checked={gender === 'male'} type="radio"></input>
                            <label>Male</label>
                            <input className='custom-radio-button' name='gender' id='female' onChange={handleInput} checked={gender === 'female'} type="radio"></input>
                            <label>Female</label>
                        </div>
                    </div>
                    <div className="inputField">
                    <select name="fmnameHead" id="gar" onChange={handleInput} value={fmnameHead}>
                        <option value="S/o">S/o</option>
                        <option value="D/o">D/o</option>
                        <option value="W/o">W/o</option>
                    </select>
                            <input name='fmname' value={fmname} onChange={handleInput} type="text"></input>
                        </div>
                        <div className="inputField">
                            <label>Street</label>
                            <input name='street' value={street} onChange={handleInput} type="text"></input>
                        </div>
                        <div className="inputField">
                            <label>Village</label>
                            <input name='village' value={village} onChange={handleInput} type="text"></input>
                        </div>
                        <div className="inputField">
                            <label>Mobile</label>
                            <input name='phone' value={phone} onChange={handleInput} type="tel"></input>
                        </div>
                </form>
            </div> 
            <div className='addBtn'>
                <button onClick={handleSubmit}>{btnText} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>
                </button>
            </div>                     
        </div>
    )
}

export default AddPage;