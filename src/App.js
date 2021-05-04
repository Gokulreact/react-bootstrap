import React, { useState, useEffect } from "react";
import "./App.css";
import { uuid } from "uuidv4";
import api from "./api/jsonconnect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Title from "./Pillars/Header/Title";
import AccordionData from "./Pillars/ShowData/AccordionData";
import AccordionDatas from "./Pillars/ShowData/AccordionDatas";
import AddData from "./Pillars/CRUD/AddData";
import AddSubData from "./Pillars/CRUD/AddSubData";
//import axios from "axios";
import EditSubcategory from "./Pillars/CRUD/EditSubcategory";
import EditCategory from "./Pillars/CRUD/EditCategory";

//import AddSubData from "./Pillars/CRUD/AddSubCategory";
  
function App() {
 // const LOCAL_STORAGE_KEY = "contacts";
 

  const [contacts, setContacts] = useState([]);
  const [subdatas, setSubdatas] = useState([]);
  //console.log(subdatas)


  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    //console.log(response)
    return response.data;
    
  };

  const retrieveSubContacts = async () => {
    const response = await api.get("/subdatas");
    //console.log(response)
    return response.data;
    
  };

  const addCategoryHandler = async(category) => {
    const request = {
      id: uuid(),
      ...category,
    };

    const response = await api.post("/contacts/", request);
    setContacts([...contacts, response.data]);
  };

  
  const addSubCategoryHandler = async (subCategory) => {
    //let needCat = "gokul";
    //console.log(subCategory);
    const request = {
      
        id: uuid(),
        ...subCategory,
      
      };
    const catData = await api.post("/subdatas/", request);
    //console.log(subdatas)
    setSubdatas([...subdatas, catData.data]);
    
    
  }

  const updateSubHandler = async (contact) => {
    console.log("I am update handler", contact)
    const response = await api.put(`/subdatas/${contact.id}`, contact);
    const { id } = response.data;
    setSubdatas(
      subdatas.map((contact) => {
        console.log(" i am inside subhandler", contact)
        return contact.id === id ? { ...response.data } : contact;
      })
    )
    
  };

  const updateCatsHandler = async (contact) => {
    //console.log("I am Cat update handler", contact)
     const response = await api.put(`/contacts/${contact.id}`, contact);
     
     const { id } = response.data;
     console.log(response.data, contact)
     setContacts(
      contacts.map((contact) => {
         console.log(" i am inside subhandler", contact)
         return contact.id === id ? { ...response.data } : contact;
       })
     )
    
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/subdatas/${id}`);
    const newSubDataList = subdatas.filter((contact) => {
      return contact.id !== id;
    });

    setSubdatas(newSubDataList);
  };

  

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
      //console.log(allContacts)
    };

    getAllContacts();
  }, []);

  useEffect(() => {
    const getAllSubContacts = async () => {
      const allSubdatas = await retrieveSubContacts();
      if (allSubdatas) setSubdatas(allSubdatas);
      //console.log(allSubdatas)
    };
    getAllSubContacts();
  }, []);

  //console.log(subdatas)
  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    //console.log("i am exwecuted")
  }, [subdatas]);

  //console.log(subdatas)

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
          contacts={contacts} 
          getContactId={removeContactHandler}
          />
          
          )}
        />

        <Route
        path="/accord"
        exact
        render = {(props) => 
          (
        <AccordionDatas
          {...props}
          contacts={contacts} 
          getContactId={removeContactHandler}
          />
          
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

        <Route
        path="/editCategory"
        render={(props) => (
          <EditCategory
            {...props}
            updateCatHandler={updateCatsHandler}
          />
        )}
      />

        <Route
            path="/editApplication"
            render={(props) => (
              <EditSubcategory
                {...props}
                updateSubHandler={updateSubHandler}
              />
            )}
          />

      </Switch>
      </Router>
    </div>
  );
}

export default App;
