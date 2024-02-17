import './../styles/main.scss'
import AddPage from "./add/AddPage";
import {useState, useEffect} from 'react';
import CopyPage from "./copy/CopyPage";
import { getDate } from "./services/getDate";
import DisplayName from './DisplayName';
import { getData } from "./services/getData";


const Main = () =>{

    useEffect(() => {
        document.title = "Home Page";  
    }, []); 
    const [parentData, setParentData] = useState([]);
    useEffect(() => {
        // Load data from local storage when the component mounts
        const storedData = getData();
        if (storedData) {
          setParentData(storedData);
          console.log("id ** ",(storedData[storedData.length-1]).id)
          setPrevId((storedData[storedData.length-1]).id);

        }
      }, []);

    const [prevId, setPrevId] = useState(101)
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
        console.log(typeof(newData) , newData);
        setParentData(newData);
      };

    const handleDate = (e)=>{
        e.preventDefault();
        setInpDate(e.target.value)
    }
    
    const filteredData = parentData.filter((el) => el.date === inpDate);
    
    return(
        <div className='mainCont'> 
            <header>
                <div className='topBar'>
                    <h3>Patient Details</h3>
                    <input type="date" onChange={handleDate} value={inpDate}/>
                </div>
                <div className="namesBar">
                    {filteredData.map((el, ind) => (
                    <DisplayName updateParentData={updateParentData} id={el.id}  key={el.id} index = {ind} name={el.name} />
                    ))}
                </div>
                <div className='toggleBar'>
                    <button id="add" onClick={handlePage}>Add Patient</button>
                    <button  id='copy' onClick={handlePage}>Copy Text</button>
                </div>
            </header>
            <div className='page'>
                {page === 'add'?
                <AddPage updateParentData={updateParentData} prevId = {prevId} date = {inpDate} />:
                <CopyPage data={filteredData} />}
            </div>
        </div>
    )
}

export default Main;