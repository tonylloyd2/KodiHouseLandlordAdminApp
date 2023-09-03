import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import { getCategories } from "../features/category/categorySlice";

const columns = [
  {
    title: "SNO",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a,b) => a.name.length - b.name.length
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];



const CategoryList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const categorystate = useSelector((state) => state.category.categories);
  const data1 = [];
  for (let i = 0; i <categorystate.length; i++) {
    data1.push({
      key: i+1,
      name:categorystate[i].title,
      action:(
        <>
        <Link className="fs-5">
            <AiTwotoneEdit/>
        </Link>
        <Link className="fs-5 ms-4 text-danger">
            <AiFillDelete/>
        </Link>
        </>

      )
    });
  }

  return (
    <>
      <div>
        <h5 className="mb-2 title"> Product Categories</h5>
        <div>{<Table columns={columns} dataSource={data1} />}</div>
      </div>
    </>
  );
};

export default CategoryList;
