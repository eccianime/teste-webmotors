import React from 'react';
import { 
  ButtonIcon, ButtonTab,
  BiggerText, RightSide
} from './TabItemStyles';


export default function TabItem({ index, active, label, icon, onClick }) {
    return (
        <ButtonTab data-testid={`tab-testid-${index}`} active={active} onClick={ ()=>onClick( index ) }>
            <ButtonIcon src={ icon  } />
            <RightSide>
                <span>Comprar</span><br/>
                <BiggerText active={active}>{ label }</BiggerText>
            </RightSide>
        </ButtonTab>
    )
}