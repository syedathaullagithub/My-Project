// import React from 'react'
// import { Provider,connect } from 'react-redux'
// import {createStore} from 'redux'


// const InitialState={
//     numOfCakes:10
// }
// const BUY_CAKE='BUY_CAKE'

// const reducer=((state=InitialState , action)=>{
//     switch(action.type){
//         case BUY_CAKE:return {
//             ...state,
//             numOfCakes:state.numberOfCakes+1
//         }
//         default:return state
//     }
//     }) 


// const store =createStore(reducer)
   

//  const buyCake=()=>{
//     return{
//         type:BUY_CAKE
//     }
// }


//   function CakeRedux(props) {


//     return (
//         <Provider store ={store}>
//         <div>
//             <h1>CakeRedux</h1>
//             <h2>Number of cakes - {props.numOfCakes} </h2>
//       <button onClick={props.buyCake}>Buy Cake</button>
//         </div>
//        </Provider>
//     )
// }



// const mapStateToProps = state => {
//     return {
//       numOfCakes: state.cake.numOfCakes
//     }
//   }
  
//   const mapDispatchToProps = dispatch => {
//     return {
//       buyCake: () => dispatch(buyCake())
//     }
//   }
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(CakeRedux);