import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';

export default function App2() {
    // const intialName = {

    // }
    //const arr = [];
    const [name, setName] = useState('Click');
    const [genderName, setGenderName] = useState('');
    const [stateName, setStateName] = useState([]);
    const [checked, setChecked] = useState(false);

    const setRadioFun = () => {
        if (name === 'Clicked') {
            setName('Click')
        }
        else {
            setName('Clicked')
        }

    }
    const radioClick = (e) => {
        setGenderName(
            e.target.value)
    }
    const checkBoxClick = (e) => {
        debugger



        if (e.target.checked === true) {
            if (stateName.indexOf(e.target.value) == -1) {
                setStateName([
                    ...stateName, e.target.value
                ])
            }
        }
        else {
            debugger


            const items = stateName.filter(item => item !== e.target.value);

            setStateName(

                items

            )


        }

    }


    return (
        <div>
            <Box color="text.primary" >
                <p> M <input type='radio' onChange={radioClick} name='gender' value='male'></input></p>
                <p> F <input type='radio' onChange={radioClick} name='gender' value='female'></input></p>

                <button onClick={setRadioFun}>{name}</button>
                < p>
                    {genderName === 'male' ? <span>Syed Athaulla </span> : genderName === 'female' ? <span>Rehana Parveen </span> : null}


                </p>
            </Box>
            <Box color="text.primary" >
                <p> Assam <input type='checkbox' onChange={checkBoxClick} name='checkbox1' value='0' ></input></p>
                <p> Bihar <input type='checkbox' onChange={checkBoxClick} name='checkbox2' value='1' ></input></p>
                <p> Delhi <input type='checkbox' onChange={checkBoxClick} name='checkbox3' value='2' ></input></p>
                <p> Kerala <input type='checkbox' onChange={checkBoxClick} name='checkbox4' value='3' ></input></p>


                <p>Count {stateName.length}</p>


            </Box>



        </div>
    )
}
