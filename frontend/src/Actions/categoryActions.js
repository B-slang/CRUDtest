import axios from 'axios';

import { 
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL,
    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_FAIL,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAIL,
    UPDATE_CATEGORY_REQUEST,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_FAIL,
    CLEAR_ERRORS

} from '../Constants/categoryConstant'

//Get ALl Category
export const getCategory = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_CATEGORY_REQUEST })

        const { data } = await axios.get(`/category`)

        dispatch({
            type: ALL_CATEGORY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_CATEGORY_FAIL,
        })
    }
}
//Create a Category
export const createCategory = (CategoryName) => async (dispatch) => {
    
    try{
        console.log(CategoryName);
        dispatch({type : CREATE_CATEGORY_REQUEST})

        const {data} = await axios.post(`/category/`,{CategoryName})

        dispatch({
            type : CREATE_CATEGORY_SUCCESS,
            payload : data,
        })
    }
    catch (error) {

        dispatch({
            type : CREATE_CATEGORY_FAIL,
            payload : error.response.data.message
        })
        
    }
}
//Update a Category
export const updateCategory = (id,CategoryName) => async (dispatch) => {
    console.log(id, CategoryName);
    try{

        dispatch({
            type : UPDATE_CATEGORY_REQUEST
        })
        const {data} = await axios.put(`/category/${id}`,{CategoryName})
        
        dispatch({
            type : UPDATE_CATEGORY_SUCCESS,
            payload : data
        })

    }
    catch (error) {
        dispatch({
            type : UPDATE_CATEGORY_FAIL
        })
    }

}

//Delete A Category
export const deleteCategory = (id) =>  async (dispatch) => {
    try{
        dispatch({ type : DELETE_CATEGORY_REQUEST})

        const {data} = await axios.delete(`/category/${id}`)
        dispatch({
            type: DELETE_CATEGORY_SUCCESS,
            payload: data.success
            
        })

    }
    catch (error) {
        dispatch({
            type : DELETE_CATEGORY_FAIL
        })
    }
}


// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}