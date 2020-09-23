import React from 'react'


export default function SignUp(props) {
    
  const {firstName,lastName,email,password}=props.name

    return (
        <div>
           

     
       {!props.isLogin&& 
        <form onSubmit={props.submitForm}> 
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" placeholder="First name" onChange={props.eventHandler} name ="firstName" value={firstName}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" placeholder="Last name" name ="lastName" onChange={props.eventHandler} value={lastName} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" placeholder="Enter email" name ="email" onChange={props.eventHandler} value={email} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"  placeholder="Enter password" name ="password" onChange={props.eventHandler}  value={password}/>
                </div>

                <button type="submit" >Sign Up</button>
                <button type="button" onClick={props.clearValue}>Clear</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
              
            </form>
       } 
         
        
    
        </div>
   
    )
}
