import { useEffect } from 'react';
import {React} from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { selector_root } from './selectors';
import selector_counter_state_tutorial from './tutorial/selectors';
import selector_counter_state_getStarted from './getStarted/selectors';


export const ComponentA = () =>{

    const dispatch = useDispatch();

    // const value_t = useSelector(selector_counter_state_tutorial);
    // const value_g = useSelector(selector_counter_state_getStarted);

    const globalState = useSelector(selector_root);


    useEffect(()=>{
    },[])

    return (<MyDiv>
        <>
        beginning of component A
        <br></br>
        i am component A
        <br></br>
        <h1>

        globalState.getStarted.value : {globalState.getStarted.value}
        <br></br>
        globalState.tutorial.value: {globalState.tutorial.value}
        </h1>
        <br></br>
        <br></br>
        end of component A
        </>
    </MyDiv>)

};

export const MyDiv = styled.div`
    border: 2px solid red;
`