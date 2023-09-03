import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brands/brandSlice";
import {Link} from "react-router-dom";
import {AiTwotoneEdit,AiFillDelete} from "react-icons/ai";

const columns = [
  {
    title: "SNO",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const BrandList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  }, []);

  const brandstate = useSelector((state) => state.brand.brands);
  const data1 = [];
  for (let i = 0; i < brandstate.length; i++) {
    data1.push({
      key: i + 1,
      name: brandstate[i].title,
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
        <h5 className="mb-2 title">Product Brands</h5>
        <div>{<Table columns={columns} dataSource={data1} />}</div>
      </div>
    </>
  );
};
export default BrandList;
