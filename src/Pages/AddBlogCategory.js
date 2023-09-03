import React from 'react';
import CustomInput from '../Components/CustomInput';


const AddBlogCategory = () => {
    return (
        <>
            <div>
                <h5 className='mb-2 title'>Add Blog Category</h5>
                <div>
                    <form action=''>
                        <CustomInput type="text" label="Enter Blog Category" />
                        <button className='btn btn-success border-0 mt-3 rounded-3 '>
                            Add Blog Category
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}


export default AddBlogCategory;