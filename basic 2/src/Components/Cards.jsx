import React from 'react'
import { Card } from './Card';
export const Cards = ({data,prim,nifa}) => {
console.log(data);

let value=(id)=>{
prim(id)
}

let handler=()=>{
nifa();
}
  return (
    <div style={{width:"80%",height:"80vh",minHeight:"80%",border:"2px solid black",display:"flex",flexWrap:"wrap",justifyContent:"space-between",padding:"20px",margin:"50px auto"}}>
        {
            data.length>0?data.map((data,id)=>{
                return(
                      <div key={id}>
<Card {...data} sin={value}/>
                      </div>
                )
            }):<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"1100px"}}>
                <h1>No Data</h1>
                <button onClick={handler}>Refresh</button>
            </div>
        }

    </div>
  )
}
