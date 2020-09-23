import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';


export default function Api() {
    //const initialApi='https://jsonplaceholder.typicode.com/posts'
    const [api,setApi]=useState([])
    const [search ,setSearch]=useState()

    useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/posts/${search}`).then(res=>{
    setApi(res.data)
   
})
},[search])


// useEffect(()=>{
//     axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res=>{
//         setApi(res.data)
       
//     })
//     })



    const searchText=(e)=>{
        setSearch(e.target.value)
    }

    return (
        <div>
<h1>API</h1>

<label>Enter Id</label>{ " "}
    <input type ="number" name ='search' value={search} onChange={searchText} placeholder='search Id 1-100'></input>
    <h1>{api.title}</h1>
    {/* <table style={{backgroundColor:"white",textAlign:"left",color:"black",border:"1px solid black",
    width:"1200px",marginLeft: "auto",marginRight: "auto"}}>
        <tr>
            <th style={{textAlign:"center"}}>NO</th>
            <th style={{textAlign:"center"}}>Title</th>
            <th style={{textAlign:"center"}}>Name</th>
        </tr>
  


        {api.map((value,i)=>{
       
        return (
            <tr >
                <td style={{border:"1px solid black",textAlign:"center"}}>{i+1} </td>
        <td style={{border:"1px solid black",textAlign:"center"}}>{value.title.slice(0,25)} </td>
                <td style={{border:"1px solid black",textAlign:"center"}}>{value.body.slice(0,15)} </td>
       
        </tr>)
       })}



    </table> */}
        </div>
    )
}
