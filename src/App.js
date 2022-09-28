import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {pers} from './data'
import { useState } from 'react'
import {List} from './components/list'

function App() {
  console.log(pers)
  const [people,setpeople]=useState(pers)

  return (
    <div className="container border text-center">
      <h4>Today birthdays</h4>
      <List people={people}/>
    </div>
  );
}

export default App;
