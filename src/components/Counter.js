import React from 'react'
import { useState ,useEffect} from 'react';

export default function Counter() {
    const [count, setCount] = useState(1);
    const intialName={
        firstName:"",
        lastName:""
    }
  const [name, setName] = useState(intialName);



  const eventHandler=(e)=>{
      const name =e.target.name
      const value =e.target.value
    setName((prev)=>{
        return {...prev,[name]:value}
    })

    }
    const clearValue=()=>{
      
      setName({
        firstName:"",
        lastName:""
      })
     }
    return (
        <div>
           
       <p> {name.firstName}</p>
       <p> {name.lastName}</p>
       <input type='input' name='firstName' placeholder='First Name' onChange={eventHandler} value={name.firstName}/>
       <input type='input' name='lastName' placeholder='Last Name' onChange={eventHandler} value={name.lastName}/>

       <button onClick={()=>{setName(intialName)}}>clear name</button>
      <br/>
      <br/>
        <p>Count number is {count}</p>
    {(count===0||count===5)&&<p style={{color:"tomato"}}>Number cannot go beyond {count}</p>
        }
        
        <button onClick={()=>{setCount(count+1)}}>Plus</button>
        <button onClick={()=>{if(count===0){setCount(0)}else{setCount(count-1)}}}>Minus</button>
        <button onClick={()=>{setCount(0)}}>Reset Counter</button>
        <button> Delete the component</button>
        </div>
    )
}
