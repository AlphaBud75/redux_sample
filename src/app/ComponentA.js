import { useEffect } from 'react';
import {React} from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { selector_counter_state } from './selectors';


export const ComponentA = () =>{

    const dispatch = useDispatch();

    const counter_value = useSelector(selector_counter_state);

    console.log('%csrc\app\ComponentA.js:14 counter_value', 'color: #007acc;', counter_value);

    useEffect(()=>{
    },[])

    return (<MyDiv>
        <>
        beginning of component A
        <br></br>
        i am component A
        <br></br>
        counter_value: {counter_value}
        <br></br>
        end of component A
        </>
    </MyDiv>)

};

export const MyDiv = styled.div`
    border: 2px solid red;
`