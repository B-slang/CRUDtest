import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useAlert } from 'react-alert'
import {updateCategory} from '../Actions/categoryActions'

import { UPDATE_CATEGORY_RESET} from '../Constants/categoryConstant'

const UpdateCategory = ({history,match}) => {
    const [name, setName] = useState('') 
    const {isUpdated} = useSelector(state => state.categoryDeleted)
    const dispatch = useDispatch();
    const alert = useAlert();

    const categoryId = match.params.id;

useEffect(() => {
    if(isUpdated){
        alert.success('Category Updated Successfully');
        history.push('/category')
        dispatch({type : UPDATE_CATEGORY_RESET})
    }
},[isUpdated,history,alert,dispatch]);

const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateCategory(categoryId,name));

    
}        

    return (
        <div>
            <h1 className="text-white"> Update category</h1>
            <form  onSubmit={submitHandler}  >
                    <div className="form-group text-white">
                        <label htmlFor="text"> <h5> Category Name </h5></label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Category Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <small id="text" className="form-text text-muted">Update Category</small>
                    </div>
                    
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
        </div>
    )
}

export default UpdateCategory
