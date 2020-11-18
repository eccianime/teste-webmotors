import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../components/AtomicItems/Button';
import Logo from '../../components/AtomicItems/Logo';
import CleanSelect from '../../components/AtomicItems/CleanSelect';
import TabItem from '../../components/TabItem';

describe('Atomic Items', () => {
    it('Should render Button without errors', () => {
        render(<Button />)
    })
    
    it('Should render Logo without errors', () => {
        render(<Logo />)
    })
    
    it('Should render Clean Select without errors', () => {
        render(<CleanSelect />)
    })
    
    it('Should render TabItem without errors', () => {
        render(<TabItem />)
    })
})
