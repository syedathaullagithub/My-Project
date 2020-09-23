import React from 'react';
import {Redirect } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import './App.css';

import Header from './components/Header';
import SignUp from './components/SignUp';
import Home from './components/Home';
import CrudOperations from './components/CrudOperations';



export const MyContext =React.createContext()

function App1() {
    const intialName={
        firstName:"",
        lastName:"",
        email:"",
        password:""
    }
  const [name, setName] = useState(intialName);
  const [isLogin, seIsLogin] = useState('');


  const eventHandler=(e)=>{
    const name =e.target.name
    const value =e.target.value
  setName((prev)=>{
      return {...prev,[name]:value}
  })

  }

  const clearValue=()=>{
      
    setName(intialName)
   }

  const submitForm=(e)=>{
      e.preventDefault()
      let status=false
debugger
    for(var key in name) {
       
        if(name[key]!=='')
        {
            status=true
        }
        else{
            status=false
        }
           
    }
   
if(status){
    alert("Successfully Registed")
    seIsLogin(true)
    return <Redirect to='/Home'  />

}else{
    alert("Please complete all the fileds")
    seIsLogin(false)
}
      
 

  }

  return (
    <div className="App" >


<SignUp name={name } setName={setName } seIsLogin={seIsLogin} submitForm={submitForm}
eventHandler={eventHandler} clearValue={clearValue} isLogin={isLogin}/>
{isLogin&&  <Header  name={name }/>}

{ isLogin&& <footer style={{textAlign: "center",
 
  backgroundColor: "grey"
 }}>
  
  <p style={{alignItems:"bottom"}}>aftabjive@gmail.com</p>
</footer>}

    



     
    </div>
  );
}

export default App1;
