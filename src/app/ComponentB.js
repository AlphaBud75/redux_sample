import { React } from 'react-dom';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { increment_t } from './tutorial/slice';
import { increment_g } from './getStarted/slice';
import { useState } from 'react';



export const ComponentB = () => {

    const dispatch = useDispatch();
    const [input_number, setInput_number] = useState(1)

    return (<MyDiv>
        <>
            i am componentB
            <button onClick={() => {
                dispatch(increment_g({how_many: input_number, marker: 'i incremented by'+input_number}))
            }} >inc by 10  getStarted</button>

            <button onClick={() => {
                dispatch(increment_t(10))
            }} >inc tutorial </button>

<input value = {input_number}
onChange={(event)=>{setInput_number(event.target.value)}}
></input>

        </>
    </MyDiv>)

};

export const MyDiv = styled.div`
    border: 2px solid red;
`

export const selector_counter_state = 1;
const variable_1 = 1;
export default variable_1;