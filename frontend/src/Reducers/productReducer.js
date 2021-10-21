import { 
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_RESET,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
    CREATE_PRODUCT_RESET,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_RESET,
    
    CLEAR_ERRORS
} from '../Constants/productsConstant'


export const newProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {

        case CREATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_PRODUCT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.product
            }

        case CREATE_PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CREATE_PRODUCT_RESET:
            return {
                ...state,
                success: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}


export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }

        case ALL_PRODUCTS_SUCCESS:
            return {
                loading:false,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                resPerPage: action.payload.resPerPage
            }
        case ALL_PRODUCTS_FAIL:
            return {
                loading:false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}
export const deleteProductReducer = (state = {},action) => {
    switch(action.type){
        case DELETE_PRODUCT_REQUEST:
        case UPDATE_PRODUCT_REQUEST:

            return{
                ...state,
                loading: true
            }

        case UPDATE_PRODUCT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    isUpdated: true
                }
        case DELETE_PRODUCT_SUCCESS:        
            return{
                ...state,
                loading: false,
                isDeleted: action.payload
            }
        case DELETE_PRODUCT_FAIL:
        case UPDATE_PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_PRODUCT_RESET:
        case UPDATE_PRODUCT_RESET:
        
            return {
                    ...state,
                    isUpdated: false,
                    isDeleted: false
            }
        case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null
             }
        default:
            return state
        
        
    }
}

