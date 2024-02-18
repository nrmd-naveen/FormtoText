import './../styles/main.scss'
import AddPage from "./add/AddPage";
import {useState, useEffect} from 'react';
import CopyPage from "./copy/CopyPage";
import { getDate } from "./services/getDate";
import DisplayName from './DisplayName';
import { getData } from "./services/getData";
import { message } from './services/message';
import randomInteger from 'random-int';

const Main = () =>{

    useEffect(() => {
        document.title = "Home";  
    }, []); 
    const [parentData, setParentData] = useState([]);
    const [prevId, setPrevId] = useState(randomInteger(0,999));
    useEffect(() => {
        // Load data from local storage when the component mounts
        const storedData = getData();
        if (storedData) {
          setParentData(storedData);
        //   console.log("id ** ",(storedData[storedData.length-1]).id);
        //   setPrevId(((storedData[storedData.length-1]).id)+2);

        }
      }, []);

    const [page, setPage] = useState('add');
    const [inpDate,setInpDate] = useState(getDate());
    const handlePage = (e)=>{
        e.preventDefault();
        if(e.target.id !== page){
            setPage(e.target.id);
        }
    }
    
    const updateParentData = (newData) => {
        // Update the parent component's state with new data
        setPrevId(randomInteger(0,9999));
        console.log(typeof(newData) , newData);
        setParentData(newData);
      };
    const [editId, setEditId] = useState(null);
    const edit = (id) =>{
        console.log("Main : ", id);
        setEditId(id);
        
      }
    const handleDate = (e)=>{
        e.preventDefault();
        setInpDate(e.target.value)
    }
    
    const filteredData = parentData.filter((el) => el.date === inpDate);
    const msg = message(filteredData,inpDate);
    
    return(
        <div className='mainCont'> 
            <header>
                <div className='topBar'>
                    <h3>Patient Details</h3>
                    <input type="date" onChange={handleDate} value={inpDate}/>
                </div>
                <div className="namesBar">
                    {filteredData.map((el, ind) => (
                    <DisplayName edit = {edit} updateParentData={updateParentData} id={el.id}  key={el.id} index = {ind} name={el.name} />
                    ))}
                </div>
                <div className='toggleBar'>
                    <button id="add" style={{backgroundColor:page ==='add'? 'rgba(255, 255, 255, 0.356)':'transparent'}} onClick={handlePage}>Add Patients</button>
                    <button  id='copy' style={{backgroundColor:page ==='copy'? 'rgba(255, 255, 255, 0.356)':'transparent'}} onClick={handlePage}>Copy Text</button>
                </div>
            </header>
            <div className='page'>
                {page === 'add'?
                <AddPage  updateParentData={updateParentData} prevId = {prevId} date = {inpDate} />:
                <CopyPage message = {msg} />}
            </div>
        </div>
    )
}

export default Main;