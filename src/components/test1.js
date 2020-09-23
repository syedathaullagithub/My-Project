import React from 'react'

// function Test1(props) {
//     debugger;
//     const increment=(e)=>{
//         props.increment(e.target.name) 
//     }
//     return (
//         <div>
          
//           <h1>
//           {props.state}
//           </h1>

//         <button onClick={increment} name='plus'>+</button>
//         { " "}
//          <button onClick={increment} name='minus'>-</button>
//         </div>
//     )
// }



function Test1(props) {
    debugger;
    
    return (
        <div>
            <p>First Name { props.state.firstName}</p>
            <br/>
          <p>Last name {props.state.lastName} </p>
         
<input type='text' name ='firstName'  value={props.firstName} onChange={props.eventHandler}/>

<input type='text' name ='lastName'  value={props.lastName}  onChange={props.eventHandler}/>
<input type='button' name ='clear'  value='clear'  onClick={props.eventHandler}/>

        </div>
    )
}


 export default Test1;