import { React } from 'react-dom';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { increment_t } from './tutorial/slice';
import { increment_g } from './getStarted/slice';



export const ComponentB = () => {

    const dispatch = useDispatch();

    return (<MyDiv>
        <>
            i am componentB

            <button onClick={() => {
                dispatch(increment_t(null))
            }} >inc tutorial</button>

            <button onClick={() => {
                dispatch(increment_g(null))
            }} >inc getStarted</button>

        </>
    </MyDiv>)

};

export const MyDiv = styled.div`
    border: 2px solid red;
`

export const selector_counter_state = 1;
const variable_1 = 1;
export default variable_1;