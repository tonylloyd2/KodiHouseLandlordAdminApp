import React from "react";
import CustomInput from "../Components/CustomInput";

const AddCategory =()=>{
    return(
        <>
        <div>
            <h5 className="mb-2 title"> Add Category</h5>
            <div>
                <form action="">
                    <CustomInput type="text" label="Enter Blog "/>
                    <button type="submit" className="btn btn-success border-0 rounded-3 mt-3 ">
                     Add Category</button>

                </form>

            </div>
        </div>
        </>
    )
}

export default AddCategory;


