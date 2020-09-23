import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import './App.css';
import Test1 from './components/test1'
import Counter from './components/Counter'
import Api from './components/Api'
import ContextApi from './components/ContextApi';
import SimpleCard from './components/SimpleCard';
import Header from './components/Header';



export const MyContext =React.createContext()

function App() {
 const array =[1,2,3,4,5]
 const object1 = {
   firstName:"syed",
   lastName:"athaulla",
   age:"29"
 }
  //const [state, setState] = useState(array);
  // const [state, setState] = useState(object1);
  const [count, setCount] = useState(1);
  const [name, setName] = useState('');
  const [testArray, setArray] = useState([1,2,3]);


console.log(count)
  
  // const increment=(props)=>{
  //   setState((prevState)=>{
  //     const newVal =prevState.reduce((t,v)=>{
  //       return t+v;
  //     },0)
  //     return [newVal]
  //   })


  //   if(props==='plus'){
  //     setState(state+1);
  //   }
  //   else{
  //     if(state===0){
  //       setState(0);
  //       alert("cannot go beyond 0")
  //     }
  //     else{
  //       setState(state-1);
  //     }
      
  //   }
    
  // }
//   const eventHandler=(e)=>{
//     debugger;
//     const name =  e.target.name;
//     const value =  e.target.value;

//     if(e.target.type==='text'){
// setState((prev)=>{

// return {...prev,[name]:value}
//     })
//  }
//  if(e.target.type==='button'){
//    debugger
//   setState((prev)=>{
  
//   return {}
//       })
//    }


//     }





    const myCss={
      backgroundColor:"SlateBlue",
      color:"white"
     
    }

  return (
    <div className="App" >
<Header />
<BrowserRouter>
<MyContext.Provider value={[{name:'Syed Athaulla',age:"27"},{name:'Rehana Parveen',age:"25"}]}>

</MyContext.Provider >
</BrowserRouter>
     
     
  
 


 

    
     
    </div>
  );
}

export default App;
