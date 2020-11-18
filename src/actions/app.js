import API from '../api'

const api = new API()

export const getBrands = () => dispatch => {
    api.getBrands().then( resp => {
        const { data } = resp;
        dispatch({ type: 'LOAD_BRAND_DATA', data })
    })
}

export const getModels = id => dispatch => {
    api.getModels( id ).then( resp => {
        const { data } = resp;
        dispatch({ type: 'LOAD_MODEL_DATA', data })
    })
}

export const getVersions = id => dispatch => {
    api.getVersions( id ).then( resp => {
        const { data } = resp;
        dispatch({ type: 'LOAD_VERSION_DATA', data })
    })
}