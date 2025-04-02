import React from 'react'
import  data from "./Init";
import { Search } from './Search';
import { useState } from 'react';
import { toast } from 'react-toastify';
export const Filteration = ({sim,actual}) => {
    let value=sim;
    // console.log(value);
  
   let Soon=(data)=>{
    actual(data);
   toast.success(`${data} shown`)
   }
 
  return (
    <div style={{display:"flex" ,justifyContent:"center",alignItems:"center",gap:"10px"}}>
        <button onClick={()=>Soon("All")}>All</button>
 {
   value? value.map((data,id)=>{
        return(
            <div key={id}>
              
               <Search xor={data.type} pri={Soon}/>
            </div>
        )
    }):"null"
 }
    </div>
  )
}
