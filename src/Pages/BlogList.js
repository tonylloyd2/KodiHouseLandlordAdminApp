import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch,useSelector } from "react-redux";
import { getBlogs } from "../features/blogs/blogSlice";
import { Link } from "react-router-dom";
import {AiTwotoneEdit,AiFillDelete} from "react-icons/ai";



const columns=[
    {
        title:"SNO",
        dataIndex:"key",

    },
    {
        title:"Tittle",
        dataIndex:"name",

    },
    {
        title:"Category",
        dataIndex:'category'
    },
    {
        title:"action",
        dataIndex:"action",
    },
];

const BlogList =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getBlogs());
    },[]);

    const blogState = useSelector((state)=>state.blog.blogs);

    const data1 =[];
    for(let i =0; i<blogState.length;i++){
        data1.push({
            key:i+1,
            name:blogState[i].title,
            category:blogState[i].category,
            action:(
                <>
                <Link className="fs-5"><AiTwotoneEdit/></Link>
                <Link className="ms-4 text-danger border-0 fs-5"><AiFillDelete/></Link>
                </>
            )

        })
    }

    return(
        <>
        <div>
            <h4 className="mb-2 title">Blog List</h4>
            <div>
                <Table columns={columns} dataSource={data1}/>
            </div>
        </div>


        </>
    )
}

export default BlogList;

