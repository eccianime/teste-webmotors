import React from 'react';
import { SelectWithIcon, LinkedSelect, Select } from '../TabContents/TabContentsStyle'

const CleanSelect = ({ data, zeroOption, value, name, onChange, icon, type }) =>{
    const showOptions = (options, name) => (
        !!options && options.map( (item, index) => (
            <option value={item.ID} key={`option-${name}-${index}`}>{item.Name}</option>
        ))
    )
    return (
        type === 'icon' ? (
            <SelectWithIcon value={value} onChange={ e => onChange( name, e.target.value ) } icon={icon}>
                <option value=''>{zeroOption}</option>
                { showOptions( data, name ) }
            </SelectWithIcon>
        ) : type === 'linked' ? (
            <LinkedSelect style={{paddingLeft: 40}} value={value} onChange={ e => onChange( name, e.target.value ) } icon={icon}>
                <option value=''>{zeroOption}</option>
                { showOptions( data, name ) }
            </LinkedSelect>
        ) : (
            <Select value={value} onChange={ e => onChange( name, e.target.value ) }>
                <option value=''>{zeroOption}</option>
                { showOptions( data, name ) }
            </Select>
        )
    )
}

export default CleanSelect;