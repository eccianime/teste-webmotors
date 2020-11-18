import React from 'react';
import { connect } from 'react-redux';

import Car from '../../assets/images/car.png';
import CarActive from '../../assets/images/car_active.png';
import Bike from '../../assets/images/motorbike.png';
import BikeActive from '../../assets/images/motorbike_active.png';

import TabItem from '../TabItem';
import { ButtonSell, Tab } from './TabHeaderStyles';

function TabHeader({ activeTab, changeActiveTab }) {
    const tabs = [
        { label: 'Carros', icon: Car, activeIcon: CarActive  },
        { label: 'Motos', icon: Bike, activeIcon: BikeActive  },
    ]
    const showTabs = items => (
        items.map( ( item, index ) => (
            <TabItem 
                key={`tab-${index}`} 
                index={index}
                label={item.label} 
                icon={activeTab === index ? item.activeIcon : item.icon} 
                onClick={changeActiveTab} 
                active={activeTab === index}
            />
        ))
    )
    return(
        <div>
            <ButtonSell>Vender meu Carro</ButtonSell>
            <Tab>{ showTabs( tabs ) }</Tab>
        </div>
    )
}

const stateToProps = state => state.app;

const dispatchToProps = dispatch => ({
    changeActiveTab: tab => {
        dispatch({ type: 'CHANGE_ACTIVE_TAB', tab })
    }
});

export default connect( stateToProps, dispatchToProps )( TabHeader )