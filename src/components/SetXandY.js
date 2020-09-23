import React ,{useEffect,useState}from 'react'

export default function SetXandY() {
   
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    useEffect((prev)=>{
        
       
        window.addEventListener("mousemove",logMousePointer)
        console.log("hh")
      },[])
      const logMousePointer=(e)=>{
        setX(e.clientX)
        setY(e.clientY)
      }
    return (
        <div>
           <p> X valus is {x} </p>
    <p> Y valus is {y}</p>
        </div>
    )
}
