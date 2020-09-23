import React from 'react'
import {buyCake} from '../Redux/cakes/cakeAction'
import {storeCake} from '../Redux/cakes/cakeAction'
import {emptyStore} from '../Redux/cakes/cakeAction'
import { connect } from 'react-redux'



export  function CakeContainerTest(props) {
    debugger
    return (
       
        <div style={{backgroundColor:"blue"}}>
              <h1>CakeReduxTest</h1>
              {props.noOfCakes>0&&
                  <h2>Number of cakes {props.noOfCakes} </h2>

              }
            
           {(props.noOfCakes===0 ) &&
            <p style={{color:"red"}}>you cant go below 0 </p>
           } 
           {(props.noOfCakes===10) &&
            <p style={{color:"red"}}>you cant go beyond 10 </p>
           }
            <button onClick={props.buyCake}> Buy</button>
            <button onClick={props.storeCake}> Store cake</button>
            <button onClick={props.emptyStore}> Empty store</button>
        </div>
       
    )
}

const mapStateToProps = state => {
    debugger
    return {
        noOfCakes: state.noOfCakes
    }
  }
  
  const mapDispatchToProps = dispatch => {
    debugger
    return {
        storeCake: () => dispatch(storeCake()),
        buyCake: () => dispatch(buyCake()),
        emptyStore: () => dispatch(emptyStore())
    }
   
  }



  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CakeContainerTest)
