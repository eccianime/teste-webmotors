import styled from "styled-components";
import Button from '../AtomicItems/Button'
import colors from '../../config/colors'

const ButtonIcon = styled.img`
  width: 30px;
`

const ButtonTab = styled(Button)`
    padding: 10px;
    transition: 0.3s;
    font-weight: normal;
    border: none;
    display: flex;
    align-items: flex-end;
    border-bottom: 3px solid ${ props => props.active ? colors.primary: colors.translucid };
    background-color: ${colors.lightGray};
`

const BiggerText = styled.span`
  font-size: 18px;
  text-transform: uppercase;
  color: ${ props => props.active ? colors.primary : colors.secondary };
`

const RightSide = styled.div`
  text-align: left;
  padding-left: 10px;
  color: ${colors.secondary};
  line-height: 1.2;
`

export {
    ButtonIcon, ButtonTab, 
    BiggerText, RightSide   
}