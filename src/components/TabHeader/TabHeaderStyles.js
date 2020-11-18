import styled from "styled-components";
import Button from '../AtomicItems/Button';

const ButtonSell = styled(Button)`
    margin: 10px 0px;
    float: right;
    background-color: transparent;
    color: orange;
    border: 2px solid orange;
    padding: 5px 20px;
    display: none;

    @media ( min-width: 361px ){
        display: block;
    }
`

const Tab = styled.div`
  overflow: hidden;
  display: flex;
`
export {
    ButtonSell, Tab   
}