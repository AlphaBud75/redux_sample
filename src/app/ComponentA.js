import { useEffect } from 'react';
import {React} from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'


export const ComponentA = () =>{

    const dispatch = useDispatch();

    // const username = useSelector(selectorUsername);

    useEffect(()=>{
        // dispatch(updateUsernameValue('new username'));
    },[])

    return (<MyDiv>
        <>
        i am component A
        {/* {username} */}
        </>
    </MyDiv>)

};

export const MyDiv = styled.div`
    border: 2px solid red;
`