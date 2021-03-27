import logo from './logo.svg';
import './App.css';
import Title from './Pillars/Header/Title';
import AccordionData from './Pillars/ShowData/AccordionData';
import AddData from './Pillars/CRUD/AddData';

function App() {

  const contacts = [
    {
      id:"1",
      category:"Cat1"
  },
  {
    id:"2",
    category:"Cat2"
}
]
  return (
    <div className="App">
       <Title />
       <AccordionData contacts={contacts}/>
       <br/>
       <AddData/>
    </div>
  );
}

export default App;
