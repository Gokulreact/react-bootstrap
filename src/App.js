import React, {useState, useEffect} from "react";
import './App.css';
import {uuid} from 'uuidv4';
import Title from './Pillars/Header/Title';
import AccordionData from './Pillars/ShowData/AccordionData';
import AddData from './Pillars/CRUD/AddData';

function App() {

  const LOCAL_STORAGE_KEY ="contacts";

  const [contacts, setContacts] = useState([]);

  const addCategoryHandler = (category) =>{
    //console.log(category);
    setContacts([...contacts, {id: uuid(), ...category}])
  ;}
 
  useEffect(()=>{
    const getData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(getData) setContacts(getData);
   }, [])

  useEffect(()=>{
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts])

  

  return (
    <div className="App">
       <Title />
     <AccordionData contacts={contacts}/>
       <br/>
       <AddData addCategoryHandler = {addCategoryHandler}/>
    </div>
  );
}

export default App;
