import React, { useEffect }  from "react";
import { Table } from "antd";
import {AiTwotoneEdit,AiFillDelete} from "react-icons/ai";
import {useDispatch,useSelector} from 'react-redux';
import { getProducts } from "../features/product/productSlice";
import {Link} from "react-router-dom";

const columns =[
    {
        title:"SNO",
        dataIndex:"key",

    },
    {
        title:"Title",
        dataIndex:"title",
        sorter:(a,b)=>a.title.length - b.title.length,
    },
    {
        title:"Brand",
        dataIndex:"brand",
        sorter:(a,b)=>a.brand.length - b.brand.length,
    },
    {
        title:"Category",
        dataIndex:"category",
        sorter:(a,b) =>a.category.length - b.category.length,
    },
    {
        title:"Color",
        dataIndex:"color",
    },
    {
        title:"Price",
        dataIndex:"price",
        sorter:(a,b)=>a.price -b.price,
        },
    {
        title:"Action",
        dataIndex:"action",
    },
];

const data1 =[];
for (let i =0; i<46; i++){
    data1.push({
        key:i,
        name:`Edward King ${i}`,
        product:32,
        status:`London Park Lane no.${i}`
    });
}


const ProductList =()=>{

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[]);

    const productState = useSelector((state)=> state.product.products);
    const data1 =[];
    for(let i=0;i<productState.length; i++){
        data1.push({
            key: i+1,
            title:productState[i].title,
            brand:productState[i].brand,
            category:productState[i].category,
            color:productState[i].color,
            price:`Ksh ${productState[i].price}`,
            action:(
                <>
                <Link to="/" className=" fs-5" >
                <AiTwotoneEdit />
                </Link>

                <Link to="/" className="ms-4 fs-5  text-danger">
                    <AiFillDelete />
                </Link>
                </>
            ) 

        })
    }


    return(
        <>
        <div>
            <h5 className="mb-2 title">Products</h5>
            <div>
                {<Table columns={columns} dataSource={data1} />}
            </div>

        </div>
        </>
        
    )
}

export default ProductList;

