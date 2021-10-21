import { 
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL,
    DELETE_CATEGORY_RESET,
    CLEAR_ERRORS,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAIL,
    CREATE_CATEGORY_RESET,
    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAIL,
    UPDATE_CATEGORY_RESET,
} from '../Constants/categoryConstant'



export const CategoryReducer = (state = { category: [] }, action) => {
    switch (action.type) {
        case ALL_CATEGORY_REQUEST:
            return {
                loading: true,
                category: []
            }

        case ALL_CATEGORY_SUCCESS:
            return {
                loading:false,
                category: action.payload.category,
            }
        case ALL_CATEGORY_FAIL:
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

//Create Category Reducers
export const createCategoryReducer = (state = {}, action) => {
    switch (action.type) {

        case CREATE_CATEGORY_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CREATE_CATEGORY_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                categoryData: action.payload.category
            }

        case CREATE_CATEGORY_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CREATE_CATEGORY_RESET:
            return {
                ...state,
                categoryData: null
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


//Delete Category Reducer
export const deleteCategoryReducer = (state = {},action) => {
    switch(action.type){
        case DELETE_CATEGORY_REQUEST:
        case UPDATE_CATEGORY_REQUEST:
            return{
                ...state,
                loading: true
            }
        case UPDATE_CATEGORY_SUCCESS:
            return{
                ...state,
                loading: false,
                isUpdated : true,
            }
        case DELETE_CATEGORY_SUCCESS:
        
            return{
                ...state,
                loading: false,
                isDeleted: true
            }
        case DELETE_CATEGORY_FAIL:
        case UPDATE_CATEGORY_FAIL:
            return {
                ...state,
                error: action.payload,
                isDeleted: false,
                isUpdated: false

            }
        case DELETE_CATEGORY_RESET:
        case UPDATE_CATEGORY_RESET:
                return {
                    ...state,
                    isDeleted: false,
                    isUpdated: false
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