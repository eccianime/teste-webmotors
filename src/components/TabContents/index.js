import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { 
    TabContent, 
    Label, CheckMark, FormBox, SelectContainer, CheckBox, LinkedInput, 
    AdvancedSearch, CleanFilters, ButtonOffers, 
} from './TabContentsStyle';
import CleanSelect from '../AtomicItems/CleanSelect';
import { radiusItems, years, prices } from '../../store/staticData'

import radius from '../../assets/words/radius.png';
import brand from '../../assets/words/brand.png';
import model from '../../assets/words/model.png';
import version from '../../assets/words/version.png';

import { getBrands, getModels, getVersions } from "../../actions/app";

function TabContents({ 
    activeTab, 
    car_check, changeCheck,
    brands, getBrands, selectedBrand,
    models, getModels, selectedModel,
    versions, getVersions, selectedVersion,
    changeValue, cleanFields,
    selectedRadius, selectedYear, selectedRange
}) {
    
    useEffect( ()=>{
        !brands.length && getBrands();
        selectedBrand !== '' && getModels( selectedBrand );
        selectedModel !== '' && getVersions( selectedModel );
    }, [ getBrands, getModels, getVersions, selectedBrand, selectedModel, brands ] )
    return (
        <>
            <TabContent active={activeTab === 0}>
                <CheckBox>
                    <Label>Novos<input type="checkbox" checked={ car_check.isNew } onChange={ e => changeCheck( 'isNew', e.target.checked ) }  /><CheckMark /></Label>
                    <Label>Usados<input type="checkbox" checked={ car_check.isOld } onChange={ e => changeCheck( 'isOld', e.target.checked ) } /><CheckMark /></Label>
                </CheckBox>
                <SelectContainer>
                    <FormBox mobile={10} full={5}>
                        <LinkedInput />
                        <CleanSelect type='linked' data={radiusItems} zeroOption={'Select...'} value={selectedRadius} name={'selectedRadius'} onChange={changeValue} icon={radius} />
                    </FormBox>
                    <FormBox mobile={5} full={2.5}>
                        <CleanSelect type='icon' data={brands} zeroOption={'Todas...'} value={selectedBrand} name={'selectedBrand'} onChange={changeValue} icon={brand} />
                    </FormBox>
                    <FormBox mobile={5} full={2.5}>
                        <CleanSelect type='icon' data={models} zeroOption={'Todos...'} value={selectedModel} name={'selectedModel'} onChange={changeValue} icon={model} />
                    </FormBox>
                    <FormBox mobile={5} full={2.5}>
                        <CleanSelect type='text' data={years} zeroOption={'Ano Desejado...'} value={selectedYear} name={'selectedYear'} onChange={changeValue} />
                    </FormBox>
                    <FormBox mobile={5} full={2.5}>
                        <CleanSelect type='text' data={prices} zeroOption={'Faixa de Preço...'} value={selectedRange} name={'selectedRange'} onChange={changeValue} />
                    </FormBox>
                    <FormBox mobile={10} full={5}>
                        <CleanSelect type='icon' data={versions} zeroOption={'Todas...'} value={selectedVersion} name={'selectedVersion'} onChange={changeValue} icon={version} />
                    </FormBox>
                </SelectContainer>
                <FormBox mobile={10} full={5}>
                    <AdvancedSearch>Busca Avançada</AdvancedSearch>
                </FormBox>
                <FormBox mobile={5} full={1.25}>
                    <CleanFilters onClick={cleanFields}>Limpar Filtros</CleanFilters>
                </FormBox>
                <FormBox mobile={5} full={3.75}>
                    <ButtonOffers>VER OFERTAS</ButtonOffers>
                </FormBox>
            </TabContent>
            <TabContent active={activeTab === 1} style={{textAlign: "center"}}>
                <h1>NÃO TEM CONTEÚDO AQUI!</h1>
            </TabContent>
        </>
    )
}

const stateToProps = state => state.app;

const dispatchToProps = dispatch => ({
    getBrands: () => {
        dispatch( getBrands() )
    },
    getModels: id => {
        dispatch( getModels( id ) )
    },
    getVersions: id => {
        dispatch( getVersions( id ) )
    },
    changeCheck: ( name, value ) => {
        dispatch({ type: 'CHANGE_CHECK', name, value })
    },
    changeValue: ( name, value ) => {
        dispatch({ type: 'CHANGE_VALUE', name, value })
    },
    cleanFields: () => {
        dispatch({ type: 'CLEAN_FIELDS' })
    },
});

export default connect( stateToProps, dispatchToProps )( TabContents )