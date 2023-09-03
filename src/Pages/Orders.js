import React, { useEffect }  from "react";
import { Table } from "antd";
import  {useDispatch,useSelector} from  "react-redux";
import { getOrders } from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import {AiTwotoneEdit,AiFillDelete} from "react-icons/ai";

 

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
        title:"Product",
        dataIndex:"product",
    },
    {
        title:"Amount",
        dataIndex:"amount",
    },
    {
        title:"Date",
        dataIndex:"date"
    },{
        title:"Action",
        dataIndex:"action",
    },
];






const Orders = ()=>{

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getOrders());
    },[]);

    const orderState = useSelector((state)=>state.auth.orders);

    const data1 =[];
    for (let i=0;i<orderState.length;i++){
        data1.push({
            key:i+1,
            name:orderState[i].orderby.firstname,
            product:(
                <Link to={`/admin/order/${orderState[i].orderby._id}`}>
                    View Orders
                </Link>
            ),
            amount:orderState[i].paymentIntent.amount,
            Date:new Date(orderState[i].craeteAt).toLocaleString(),
            action:(
                <>
                <Link to="/" className=""fs-5>
                    <AiTwotoneEdit/>
                </Link>
                <Link>
                <AiFillDelete className="ms-3 fs-5 text-danger"/>
                </Link>
                </>
            )

        })
    }

    return(
        <>
        <div>
            <h5 className="mb-2">Orders</h5>
            <div>
                {<Table columns={columns} dataSource={data1}/>}
            </div>

        </div>
        </>
    )
}

export default Orders;
 