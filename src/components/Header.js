import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import headerStyle from './headerStyle.css'
import Home from './Home'
import ContactUs from './ContactUs'
import SignUp from './SignUp'
import Error from './Error'
import Api from './Api'
import Climate from './Climate'
import CrudOperations from './CrudOperations'



export default function Header(props) {
   
   
    const myCss={
        backgroundColor:"SlateBlue",
        color:"white"
       
      }
   
   
    return (
        
           
            <nav >
  <Router>
        <div>
        
          <nav className="active" >
          <ul >
            <li><Link to={'/'}> Home </Link></li>
            <li><Link to={'/ContactUs'}>Contact</Link></li>
            <li><Link to={'/Api'}>Api Testing</Link></li>
            <li><Link to={'/Climate'}>Climate</Link></li>
            <li><Link to={'/CrudOperations'}>CrudOperations</Link></li>
            <span style={{ position: "absolute",right: "0px",padding: "10px",color:"white" }}>Welcome, {props.name.firstName} {props.name.lastName}</span>
           </ul>
           
          </nav>
        
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/ContactUs' component={ContactUs} />
              <Route path='/Api' component={Api} />
              <Route path='/Climate' component={Climate} />
              <Route path='/CrudOperations' component={CrudOperations} />
            
              <Route component={Error} />
          </Switch>
          
        </div>
      </Router>

</nav>
           
      
    )
}
