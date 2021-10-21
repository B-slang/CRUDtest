import React,{Fragment,useEffect}from 'react'
import { Link} from "react-router-dom"
import {getCategory , deleteCategory } from "../Actions/categoryActions"
import { useDispatch , useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import {DELETE_CATEGORY_RESET} from '../Constants/categoryConstant'
const AllCategory = () => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const {category} = useSelector(state => state.category);
    const { isDeleted } = useSelector(state => state.categoryDeleted);



useEffect(() => {   
    dispatch(getCategory());

    
    if (isDeleted) {
        alert.success('Category deleted successfully');
        dispatch({ type: DELETE_CATEGORY_RESET })
    }
},[isDeleted,alert,dispatch]);

const deleteCategoryHandler = (id) => {
    dispatch(deleteCategory(id));

}

    return(
        <Fragment>
  <div className="row text-white">
    <div className="col text-white">
        <h1 >All Category </h1>
        </div>
        <div className="col my-2 margin-left" style={{marginInlineStart: 450}}>
         <Link to={`/`} className="btn btn-success"  >Homepage</Link>
        <Link to={`/category/create`} className="btn btn-warning ml-2">Create Category</Link>
</div>
</div>
<table className="table text-white">
  <thead>
    <tr>     
      <th scope="col">CategoryId</th>
      <th scope="col">CategoryName</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>

 

 <tbody>
    {category.map(item => (
        <tr key={item._id}> 
        <th scope="row"> {item._id}</th>
        <td>{item.CategoryName}</td>
         
        <td>  
        <Fragment>
                    <Link to={`/category/update/${item._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteCategoryHandler(item._id)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </Fragment>
        </td>        
      </tr>

    ))}

</tbody> 



  
</table>

        </Fragment>
    )

}

export default AllCategory
