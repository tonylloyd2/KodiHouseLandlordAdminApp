import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch,useSelector } from "react-redux";
import { getEnquiries } from "../features/enquiry/enquirySlice";
import {Link} from "react-router-dom";
import {AiFillDelete} from "react-icons/ai";


const columns =[
    {
        title:"SNO",
        dataIndex:"key",
    },
    {
        title:"Name",
        dataIndex:"name",

    },
    {
        title:"Email",
        dataIndex:"email"

    },
    {
        title:"Mobile",
        dataIndex:"mobile",
    },
    {
        title:"Satus",
        dataIndex:"status",

    },{
        title:"Action",
        dataIndex:"action",
    },

];



const Enquiries =()=>{
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(getEnquiries());
    },[]);

    const enquiryState = useSelector((state)=>state.enquiry.enquiries)

    const data1 =[];
    for(let i =0;i<enquiryState.length;i++){
        data1.push({
            key:i+1,
            name:enquiryState[i].name,
            email:enquiryState[i].email,
            mobile:enquiryState[i].mobile,
            status:(
                <>
                <select 
                name=""
                defaultValue={enquiryState[i].status ? enquiryState[i].status:"Sumitted"}
                className="form-control form-select"
                id=""
                >
                    <option value="submitted">Submitted</option>
                    <option value="Contacted">Contacted</option>
                    <option value="In Progress">In Progresss</option>
                    <option value="Resolved">Resolved</option>
                </select>
                </> 
            ),
            action:(
                <>
                <Link className="fs-5 ms-4 text-danger"><AiFillDelete/></Link>
                </>
            )  

        })
    }
    
    return(
        <>
        <div>
            <h5 className="mb-2 title">Enquiries</h5>
            <div>
                <Table columns={columns} dataSource={data1}/>
            </div>

        </div>
        </>
    )

}

export default Enquiries;

