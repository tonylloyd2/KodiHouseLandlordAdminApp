import { Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {AiTwotoneEdit,AiFillDelete} from "react-icons/ai";
import { getColors } from "../features/color/colorSlice";


const columns=[
    {
        title:"SNO",
        dataIndex:"key",
    },
    {
        title:"Name",
        dataIndex:"name", 
    },
    {
        title:"Action",
        dataIndex:"action"
    },
];


const ColorList = ()=>{
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(getColors())
    },[]);

    const colorstate= useSelector((state)=>state.color.colors);
    const data1=[];

    for(let i=0; i<colorstate.length; i++){
        data1.push({
            key:i+1,
            name:colorstate[i].title,
            action:(
                <>
                <Link className="fs-5"><AiTwotoneEdit/></Link>
                <Link className="fs-5 ms-4 text-danger"><AiFillDelete/></Link>
                </>
            )
        })
    }

    return(
        <>
        <div>
            <h5 className="mb-2 title">Colors</h5>
            <div>
                <Table columns={columns} dataSource={data1}/>
            </div>
        </div>

        
        </>
    )
}

export default ColorList;

