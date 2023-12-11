import './App.css';
import Navbar from './container/Navbar';
import { useState } from 'react';
import Editing from'./container/Editing';
import{
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"

function App() {
  
  const [mode,changeMode]=useState("light")
  const toogle=()=>{
    console.log("EE");
    if(mode==='light'){
      console.log("l");
      
      document.body.style.backgroundColor="#534a4a";
      changeMode("dark");
    }
    else{
      console.log("d");
      document.body.style.backgroundColor="#ded5d5";
      changeMode("light");
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar toogle={toogle} mode={mode}/>
    <Routes>
      
      <Route exact path="/" element={ <Editing mode={mode}/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
