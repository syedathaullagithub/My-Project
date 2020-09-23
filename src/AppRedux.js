import React from 'react';

import './App.css';
//import CakeRedux from './components/CakeRedux';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './Redux/store'
import CakeContainerTest from './components/CakeContainerTest';



export const MyContext = React.createContext()

function AppRedux() {


    return (
        <Provider store={store}>
            <div className="App" >
                <CakeContainer />
                <CakeContainerTest />
            </div>
        </Provider>
    );
}

export default AppRedux;
