import React from 'react'
import {MyContext} from '../App'
import { useContext} from 'react';

export default function ContextApi() {
const value =useContext(MyContext)
//     return (
//         <div>
//             <table>
//                 <tr>
//                 <th>ID</th>
//                 <th>Exponent</th>
//                     </tr>
                
//         <MyContext.Consumer> 
// {
//     value=>{
        
//         return value.map((v,i)=>{
//         return <tr>
//             <td>{i+1} </td>
//             <td>{v**v} </td>
//             </tr>})
//     }
// }
//  </MyContext.Consumer>


//  </table>
//         </div>
//     )




return(
      <>
    <table style={{width:"500px",align:"center"}}>
        <tr>
            <th>Id </th>
            <th>Name </th>
            <th>Age </th>
         </tr>

   {
           value.map((v,i)=>{
             return (
        <tr>
              <td>{i+1}</td>
              <td>{v.name}</td>
              <td>{v.age}</td>
        </tr> )})
  } 

</table>
</>

)
}
