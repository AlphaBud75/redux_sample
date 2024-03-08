import { React } from 'react-dom';
import styled from 'styled-components'
import { increment } from './slice';
import { useDispatch, useSelector } from 'react-redux';



export const ComponentB = () => {

    const dispatch = useDispatch();

    return (<MyDiv>
        <>
            i am componentB

            <button onClick={() => { dispatch(increment(null)) }} >inc</button>

        </>
    </MyDiv>)

};

export const MyDiv = styled.div`
    border: 2px solid red;
`