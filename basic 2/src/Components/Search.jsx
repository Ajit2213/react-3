import React from 'react'
import { toast } from 'react-toastify'
export const Search = ({xor,pri}) => {


    // console.log(xor);

    let implement=(data)=>{
      pri(data)
      // toast.success(`${data} show`);
    }
  return (
    <div>
      
           <button onClick={()=>implement(xor)}>{xor}</button>
    </div>
  )
}
