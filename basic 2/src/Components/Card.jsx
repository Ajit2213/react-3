import React from 'react'
import { toast } from 'react-toastify'
export const Card = ({desc,img,name,id,sin}) => {

let center=async(id,name)=>{
  toast.error(`${name},Deleted`);
await  sin(id);
}


  return (
    <div style={{width:'200px',height:"280px",border:"2px solid black"}}>
         <img src={img} alt="" srcset="" width="200px" height="100px"/>
         <h2 style={{margin:"5px"}}>{name}</h2>
         <p style={{fontSize:"12px",margin:"5px"}}>{desc}</p>
         <button onClick={()=>center(id,name)} style={{marginLeft:"40px",marginTop:"10px"}}>Not Interseted</button>
    </div>
  )
}
