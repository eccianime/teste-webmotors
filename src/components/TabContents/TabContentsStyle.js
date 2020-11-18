import styled from "styled-components";
import Button from '../AtomicItems/Button';
import colors from '../../config/colors'
import location from '../../assets/images/location.png';
import where from '../../assets/words/where.png';

const TabContent = styled.div`
  background-color: ${colors.white};
  padding: 20px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
  display: ${ props => props.active ? 'block' : 'none' } ;

  @media ( min-width: 361px ){
    padding: 20px 40px;
  }
`

const Label = styled.label`
    position: relative;
    margin-right: 35px;
    padding-left: 35px;
    cursor: pointer;
    font-size: 14px;
    user-select: none;

    & input{
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    & input:checked ~ span {
        background-color: white;
        border: 1px solid ${colors.mediumGray};
    }

    & span:after {
        left: 5px;
        top: 0px;
        width: 3px;
        height: 8px;
        border: solid ${colors.primary};
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }

    & input:checked ~ span:after {
        display: block;
    }
`

const CheckMark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: white;
    border: 1px solid ${colors.mediumGray};

    &:after {
        content: "";
        position: absolute;
        display: none;
    }
`

const FormBox = styled.div`
    width: ${ props => `${props.mobile*10}%` };
    box-sizing: border-box;
    padding: 5px;
    display: inline-block;

    @media ( min-width: 361px ){
        width: ${ props => `${props.full*10}%` };
    } 
`

const Select = styled.select`
    height: 30px;
    padding: 5px;
    width: 100%;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 2px;
    border: 1px solid ${colors.mediumGray};
    border-radius: 2px;
    font-weight:bold;

    & option{
        font-weight:bold;
    }
`

const AdvancedSearch = styled(Button)`
    background-color: transparent;
    border: none;
    font-size: 14px;
    color: ${colors.primary};

    &:before{
        content: '>';
        padding-right: 10px;
    }
`

const SelectContainer = styled.div`
    margin-bottom: 0px;

    @media( min-width: 361px ){
        margin-bottom: 30px;
    }
`

const CleanFilters = styled(Button)`
    background-color: ${colors.translucid};
    border: none;
    font-weight: normal;
    font-size: 12px;
    color: ${colors.secondary};
`

const CheckBox = styled.div`
    padding: 5px;
`

const ButtonOffers = styled(Button)`
    display: block;
    width: 100%;
    background-color: ${colors.primary};
    color: ${colors.white};
    border: none;
    padding: 10px 20px;
    font-size: 14px;
`

const LinkedInput = styled.input`
    width: 60%;
    padding: 5px 5px 5px 90px;
    box-sizing: border-box;    
    outline: none;
    border-radius: 2px 0px 0px 2px;
    border: 1px solid ${colors.mediumGray};
    background: url( ${where} ) no-repeat 30px 7px, url( ${location} ) no-repeat 10px 5px;
    background-size: 50px, 13px;
    background-clip: border-box;
    height: 30px;
    font-weight: bold;

    @media( min-width: 361px ){
        width: 75%;
    }
`

const SelectWithIcon = styled( Select )`
    background: 
        url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>") no-repeat 100% 2px, 
        url( ${props => props.icon} ) no-repeat 5px 7px;
    background-size: 24px, 50px;
    background-clip: border-box;
    padding-top: 6px;
    padding-left: 58px;
`

const LinkedSelect = styled( SelectWithIcon )`
    width: 40%;
    border-radius: 0px 2px 2px 0px;
    border-left: none;
    padding-left: 90px;
    @media( min-width: 361px ){
        width: 25%;
    }
`

export {
    TabContent, 
    Label, CheckMark, FormBox, Select, SelectContainer, CheckBox, LinkedInput, SelectWithIcon , LinkedSelect,
    AdvancedSearch, CleanFilters, ButtonOffers,
}