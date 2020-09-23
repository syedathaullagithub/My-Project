import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';

export default function CrudOperations() {

    const apiLink ="https://jsonplaceholder.typicode.com/users?_limit=10"
    const [ api,setApi]=useState([])
    const [search ,setSearch]=useState()

    useEffect(()=>{
axios.get(apiLink).then(res=>{
    setApi(res.data)
 debugger;  
},[api])
},[search])
    return (
        <div >
         <h1 style={{height:"40px",backgroundColor:"tomato"}}>Syed Restaurant</h1> 

         
             {
                api.map((v,i)=>{
                return (<p style={{height:"10px"}} key={i}>{v.id} {" "} Name : {v.name}</p>)
                }) 
             }
       
         <br/>  
         
        </div>
    )
}
