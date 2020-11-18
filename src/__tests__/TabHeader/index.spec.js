import React from 'react';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'
import TabHeader from "../../components/TabHeader";

afterEach( cleanup );

const customStartState = {
    app: {
        activeTab: 0,
    }
}

function reducer( state = customStartState, action  ) {
    switch (action.type) {
        case 'CHANGE_ACTIVE_TAB':
            return { ...state,
              app: {
                    activeTab: action.tab
                }
            }
        default: return state;
    }
}

function renderWithRedux( 
    component, 
    { initialState, store = createStore( reducer, initialState ) } = {}
){
    return {
        ...render( <Provider store={ store }>{component}</Provider> )
    }
}

it( 'renders TabHeader with redux', ()=>{
    const { getByTestId } = renderWithRedux( <TabHeader /> )
    expect( getByTestId('tab-testid-0') ).toHaveTextContent('Carros');
} )

it( 'can switch active tabs from "Carros" to "Motos"', ()=>{
    const { getByTestId } = renderWithRedux( <TabHeader /> )
    fireEvent.click( getByTestId('tab-testid-1') );
    expect( getByTestId('tab-testid-1') ).toHaveStyle('border-bottom: 3px solid #AC333D');
} )

it( 'can switch active tabs from "Motos" to "Carros"', ()=>{
    const { getByTestId } = renderWithRedux( <TabHeader /> )
    fireEvent.click( getByTestId('tab-testid-1') );
    fireEvent.click( getByTestId('tab-testid-0') );
    expect( getByTestId('tab-testid-0') ).toHaveStyle('border-bottom: 3px solid #AC333D');
} )

it( 'can start with a different initial state', ()=>{
    const { getByTestId } = renderWithRedux( <TabHeader />, { initialState: { app: {activeTab: 1} } } )
    expect( getByTestId('tab-testid-1') ).toHaveStyle('border-bottom: 3px solid #AC333D');
} )

it( 'can start with a different store', ()=>{
    const store = createStore( ()=> ({ app: { activeTab: 1 } }) )
    const { getByTestId } = renderWithRedux( <TabHeader />, { store } )
    expect( getByTestId('tab-testid-1') ).toHaveStyle('border-bottom: 3px solid #AC333D');
} )