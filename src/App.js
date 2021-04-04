import React, { useState, useEffect } from "react";
import "./App.css";
import { uuid } from "uuidv4";
import api from "./api/jsonconnect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Title from "./Pillars/Header/Title";
import AccordionData from "./Pillars/ShowData/AccordionData";
import AddData from "./Pillars/CRUD/AddData";
import AddSubData from "./Pillars/CRUD/AddSubData";
//import AddSubData from "./Pillars/CRUD/AddSubCategory";

function App() {
 // const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    //console.log(response)
    return response.data;
    
  };

  const addCategoryHandler = async(category) => {
    const request = {
      id: uuid(),
      ...category,
    };

    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  /*
  const addSubCategoryHandler = async(subCategory) => {
    //let needCat = "gokul";
    const request = {
      id: uuid(),
      category:subCategory.category,
      subcat:{
        ...subCategory
      }
    };
    console.log(request)
    //console.log(request)
    const response = await api.post("/contacts/", request);
    console.log("await tesponse", response)
    //const data = {subcat:[]}
    console.log(contacts)
    setContacts([...contacts, response.data]);
  };
  */
  const addSubCategoryHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };

    const response = await api.patch("/contacts/878ed38e-561f-4eed-9837-82686f381048/", request);
    console.log(response);
    //setContacts([...contacts, response.data]);

    

    
   console.log(response)
  };

  

  /*useEffect(() => {
    const getData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getData) setContacts(getData);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  */
  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
      //console.log(allContacts)
    };

    getAllContacts();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <Router>
       
        <Title />
        <Switch>
       
        <Route
        path="/"
        exact
        render = {(props) => 
          (
        <AccordionData 
          {...props}
          contacts={contacts} />
          )}
        />

        <Route
         path="/AddCategory"
         
         render={(props) => (
         
          <AddData 
          {...props}
          addCategoryHandler={addCategoryHandler} />
        )}
        />

        <Route
         path="/AddSubCategory"
         
         render={(props) => (
          
          <AddSubData 
          {...props}
          addSubCat={addSubCategoryHandler} />
          
        )}
        />

      </Switch>
      </Router>
    </div>
  );
}

export default App;
