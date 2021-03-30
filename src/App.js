import React, { useState, useEffect } from "react";
import "./App.css";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Switch, Route, render } from "react-router-dom";
import Title from "./Pillars/Header/Title";
import AccordionData from "./Pillars/ShowData/AccordionData";
import AddData from "./Pillars/CRUD/AddData";
import AddSubData from "./Pillars/CRUD/AddSubCategory";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const addCategoryHandler = (category) => {
    console.log(category);
    setContacts([...contacts, {id: uuid(), ...category}]);
    /*setContacts([
      ...contacts,
      {
        Lists: [
          {
            id: uuid(),
            name: category.category,
            subcategory: {
              id: uuid(),
              link: "Gokul123",
              name: "subcat1",
            },
          },
        ],
      },
    ]);*/

    /*  setContacts([...contacts, {
      Lists:[{
        id:"1",
       name:"Gkyl1"}]}]);
  }*/
    //console.log(...contacts)
  };
  const addSubCatHandler = (subcategory) => {
    // console.log(subcategory);

    //console.log("Hole data", contacts)
    //  console.log(subcategory.category)
    setContacts([
      ...contacts,
      {
        id: uuid(),
        category: subcategory.category,
        subcategory: { ...subcategory },
      },
    ]);
  };

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getData) setContacts(getData);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <Router>
       
        <Title />
        <Switch>
       
        <Route
        path="/"
        exact
    //component={() =>  <AccordionData contacts={contacts} />}
        render = {(props) => {
         // console.log(props)
          <AccordionData 
          {...props}
          contacts={contacts} />
        }}
        />

        <Route
         path="/AddCategory"
         
        component={() => <AddData addCategoryHandler={addCategoryHandler} />
        }/>
        { /*  <Route
         path="/addCategory" 
         component={
          ()=>{
            <AddData addCategoryHandler={addCategoryHandler} />
          }
        }/>
     <AccordionData contacts={contacts} />

        <AddData addCategoryHandler={addCategoryHandler} />
        <AddSubData addSubCatHandler={addSubCatHandler} />
  */}
      </Switch>
      </Router>
    </div>
  );
}

export default App;
