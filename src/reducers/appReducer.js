import app from './appInitialState'

const appReducer = (state = app, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_TAB':
        return { ...state,
          activeTab: action.tab
        }
    case 'CHANGE_CHECK':
      return { ...state,
        car_check: {
          ...state.car_check,
          [action.name]: action.value
        }
      }
    case 'CHANGE_VALUE':
      return { ...state,
        [action.name]: action.value
      }
    case 'LOAD_BRAND_DATA':
      return { ...state,
        brands: action.data
      }
    case 'LOAD_MODEL_DATA':
      return { ...state,
        models: action.data
      }
    case 'LOAD_VERSION_DATA':
      return { ...state,
        versions: action.data
      }
    case 'CLEAN_FIELDS':
      return { ...state,
        car_check: {
          isNew: false,
          isOld: false
        },
        selectedBrand: '',
        selectedModel: '',
        selectedVersion: '',
        selectedRadius: '',
        selectedYear: '',
        selectedRange: '',        
      }
    default:
        return { ...state }
  }
};

export default appReducer;
