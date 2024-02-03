
import { useState } from 'react';
import './App.css';
import Navbar from './Sources/Navbar';

function App() {
  let[mode,setMode]=useState(document.getElementById('flexSwitchCheckDefault'));
 
  return (
   <>

  <Navbar  headName="Smruti"  bg="dark" bgText="white"/>
  
   </>
  );
}

export default App;
