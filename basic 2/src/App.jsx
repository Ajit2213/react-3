import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import { Navabr } from './Components/Navabr'
import { Filteration } from './Components/Filteration'
import data from './Components/Init'
import { Cards } from './Components/Cards'
function App() {
  
let[whole,setwhole]=useState([]);
let[original,setoriginal]=useState([]);

useEffect(()=>{
  let filter=async()=>{
    let  value=await axios.get(data);
    let final=value.config.url;
  setwhole(final);
   setoriginal(final);
  }
  filter()
},[]);


 // Function to filter by type (called from Filteration component)
 const handleFilter = (type) => {
  console.log(type);
  if (type === "All") {
    setoriginal(whole); // Show all data
  } else {
    const filtered = whole.filter((item) => item.type === type);
 setoriginal(filtered)
  }
};

// Function to delete an item (called from Cards component)
const handleDelete = (id) => {
  const updatedData = original.filter((item) => item.id !== id);
  setoriginal(updatedData);
};

const fresh=()=>{
  setoriginal(whole);
}

console.log(whole)
  return(
    <div>
    <Navabr/>
    <Filteration sim={whole} actual={handleFilter} />
<Cards   data={original} prim={handleDelete} nifa={()=>setoriginal(whole)}/>
    </div>
  )
}

export default App
