import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';

//By search//
// export default function Climate() {
//     //const initialApi='https://jsonplaceholder.typicode.com/posts'
//     const [api,setApi]=useState([])
//     const [search ,setSearch]=useState('')
//     const key='94b0073055ba8d456c746f0bc0fc4e69'

//     useEffect(()=>{
// axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${key}`).then(res=>{
//     setApi(res.data.main.temp)
//     debugger
//     console.log(res.data)
   
// })
// },[search])






//     const searchText=(e)=>{
//         setSearch(e.target.value)
//     }

//     return (
//         <div>
// <h1>API</h1>

// <label>Enter Id</label>{ " "}
//     <input type ="text" name ='search' value={search} onChange={searchText} placeholder='search wheather'></input>
//     <h1>Celcius {api}</h1>
 
//         </div>
//     )
// }



export default function Climate() {
    //const initialApi='https://jsonplaceholder.typicode.com/posts'
    const [api,setApi]=useState({})
    const [search ,setSearch]=useState('')
    const key='94b0073055ba8d456c746f0bc0fc4e69'

    useEffect(()=>{
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${key}`).then(res=>{
    //const response=res.data
    setApi(res.data.main)
    debugger
    console.log(res.data)
   
})
},[search])






    const searchText=(e)=>{
        setSearch(e.target.value)
    }

    return (
        <div>
<h1>API</h1>

<label>Enter Id</label>{ " "}
    <input type ="text" name ='search' value={search} onChange={searchText} placeholder='search wheather'></input>
    <h1>Celcius {api.temp}</h1>
    <h1>Max {api.temp_max}</h1>
    <h1>Min {api.temp_min}</h1>
 
        </div>
    )
}



