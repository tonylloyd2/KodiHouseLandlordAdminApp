import React from "react";
import CustomInput from "../Components/CustomInput";

const AddBrand =()=>{
    return(
        <>
        <div>
            <h5 className="mb-2 title"> Add Brand</h5>
            <div>
                <form action="">
                    <CustomInput type="text" label="Enter Blog "/>
                    <button type="submit" className="btn btn-success border-0 mt-3 rounded-3 ">
                     Add Brand</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default AddBrand;


