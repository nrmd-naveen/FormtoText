import './../styles/main.scss'
import AddPage from "./add/AddPage";
import {useState, useEffect} from 'react';
import CopyPage from "./copy/CopyPage";
import { getDate } from "./services/getDate";
import DisplayName from './DisplayName';
import { getData } from "./services/getData";
import { message } from './services/message';
import randomInteger from 'random-int';
import { useMediaQuery } from 'react-responsive';

const Main = () =>{

    useEffect(() => {
        document.title = "Home";  
    }, []); 
    const [parentData, setParentData] = useState([]);
    const [prevId, setPrevId] = useState(randomInteger(0,999));
    useEffect(() => {
        // Load data from local storage when the component mounts
        const storedData = getData("PatientData");
        if (storedData) {
          setParentData(storedData);

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
        if(itemToEdit){
            setItemToEdit(null);
        }
      };
     
    const handleDate = (e)=>{
        e.preventDefault();
        setInpDate(e.target.value)
    }
    
    const filteredData = parentData.filter((el) => el.date === inpDate);
    const msg = message(filteredData,inpDate);

     const [itemToEdit, setItemToEdit] = useState(null);
      const edit = (eid) =>{
        console.log("Main : ", eid); 
        console.log("fil Data - " , filteredData);
        let itm = filteredData.find( el => el.id === Number(eid));
        console.log("itm" ,itm)
        setItemToEdit(itm);
      }
      const isDesktop = useMediaQuery({
        query : '(min-width:950px)'
      })
    
      //console.log("Ed Item - ",itemToEdit) ;
    return(
        <div className='mainCont'>  
                <div className='topBar'>
                <div className='hd'>
                    <h3>Date </h3>
                    <span>:</span>
                    <input type="date" onChange={handleDate} value={inpDate}/>
                </div>
                </div>
                <div className="namesBar">
                    {filteredData.map((el, ind) => (
                        <DisplayName edit = {edit} updateParentData={updateParentData} id={el.id}  key={el.id} index = {ind} name={el.name} />
                        ))}
                </div>
                <div className='toggleBar'>
                    <button id="add" style={{fontWeight:page!=='add'?500:600 ,backgroundColor:page ==='add'? 'rgba(255, 255, 255, 0.356)':'transparent',color:page ==='add'? 'black':'white'}} onClick={handlePage}>Add Patients</button>
                    <button  id='copy' style={{fontWeight:page!=='copy'? 500:600 ,backgroundColor:page ==='copy'? 'rgba(255, 255, 255, 0.356)':'transparent',color:page ==='copy'? 'black':'white'}} onClick={handlePage}>Copy Text</button>
                </div>
            <div className='page'>
                {isDesktop ? (
                    <div className='deskPage'> 
                        <AddPage eData = {itemToEdit} updateParentData={updateParentData} prevId = {prevId} date = {inpDate} />
                        <CopyPage message = {msg} />
                    </div>
                ):page === 'add'?
                <AddPage eData = {itemToEdit} updateParentData={updateParentData} prevId = {prevId} date = {inpDate} />:
                <CopyPage message = {msg} />}
            </div>
        </div>
    )
}

export default Main;