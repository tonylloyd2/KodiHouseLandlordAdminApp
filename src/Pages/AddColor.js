import React from "react";
import CustomInput from "../Components/CustomInput";

const AddColor =()=>{
    return(
        <>
        <div>
            <h5 className="mb-2 title ">Add Color</h5>
            <div>
                <form action="">
                    <CustomInput type="color" label="Enter Color"/>
                    <button type="submit" className="btn
                     btn-success border-0 rounded-3 mt-3 "> Add Color</button>
                </form>
            </div>

        </div>
        </>
    )


}


export default AddColor