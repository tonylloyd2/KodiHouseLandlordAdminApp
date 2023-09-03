import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {getBlogCategory} from  "../features/blogcategory/blogCategorySlice"
import { Link } from "react-router-dom";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";

const columns = [
  {
    title: "SNO",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter:(a,b)=>a.name.length - b.name.length
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const BlogCategoryList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogCategory());
  }, []);
  const blogcategorystate = useSelector(
    (state) => state.bCategory.bCategories);
  const data1 = [];
  for (let i = 0; i < blogcategorystate.length; i++) {
    data1.push({
      key: i + 1,
      name: blogcategorystate[i].title,
      action: (
        <>
        <Link className="fs-5"> <AiTwotoneEdit/></Link>
        <Link className="ms-4 text-danger border-0 fs-5"><AiFillDelete/></Link>
        </>
      ),
    });
  }

  return (
    <>
      <div>
        <h5 className="mb-2 title title">Blog Category</h5>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </>
  );
};

export default BlogCategoryList;
