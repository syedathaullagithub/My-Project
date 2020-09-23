import React from 'react'
import {buyCake} from '../Redux/cakes/cakeAction'
import {storeCake} from '../Redux/cakes/cakeAction'
import { connect } from 'react-redux'



export  function CakeContainer(props) {
    debugger
    return (
       
        <div style={{backgroundColor:"orange"}}>
              <h1>CakeRedux</h1>
            <h2>Number of cakes {props.noOfCakes} </h2>
            <button onClick={props.buyCake}> Buy</button>
            <button onClick={props.storeCake}> Store cake</button>
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
        buyCake: () => dispatch(buyCake())
    }
   
  }



  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CakeContainer)
