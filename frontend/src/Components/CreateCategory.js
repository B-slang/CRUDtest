import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useAlert } from 'react-alert'
import {createCategory , clearErrors} from '../Actions/categoryActions'
import { CREATE_CATEGORY_RESET} from '../Constants/categoryConstant'
const CreateCategory = ({history}) => {
    const [name, setName] = useState('') 

    const dispatch = useDispatch();
    const alert = useAlert();
    const {categoryData , error }  = useSelector(state => state.createCategory)
useEffect(() => {
    if(categoryData) {
        alert.success("Category Added Successfully ");
        history.push('/category')
        dispatch({ type: CREATE_CATEGORY_RESET })
    }
    if(error) {
        alert.error(error);
        history.push('/category')
        dispatch(clearErrors());
    }
 

},[categoryData,error,alert,dispatch,history])


const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createCategory(name));
    
}    
    return (
        <div>
            <h1 className="text-white"> Create a new category</h1>
            <form  onSubmit={submitHandler}  >
                    <div className="form-group text-white">
                        <label htmlFor="text"> <h5> Category Name </h5></label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Category Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <small id="text" className="form-text text-muted text-white">Create a new Category</small>
                    </div>
                    
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
        </div>
    )
}

export default CreateCategory
