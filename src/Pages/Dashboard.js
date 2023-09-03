
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
const columns = [
    {
        title: "SNO",
        dataIndex: "key",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Product",
        dataIndex: "product",
    },
    {
        title: "Status",
        dataIndex: "status"
    }
];

const data1 = [];
for (let i = 0; i < 46; i++) {
    data1.push({
        key: i,
        name: `Edward King ${i}`,
        product: 32,
        status: `London Park Lane no.${i}`
    });
}


const Dashboard = () => {
    const data = [
        {
            type: "Jan",
            sales: 38,
        },
        {
            type: "Feb",
            sales: 52,
        },
        {
            type: "Mar",
            sales: 61,

        },
        {
            type: "Apr",
            sales: 145

        },
        {
            type: "May",
            sales: 48,
        },
        {
            type: "Jun",
            sales: 38,
        },
        {
            type: "Jul",
            sales: 38,
        }, {
            type: "Aug",
            sales: 38
        },
        {
            type: "sept",
            sales: 38,
        },
        {
            type: "Oct",
            sales: 38,

        },
        {
            type: "Nov",
            sales: 38
        },
        {
            type: "Dec",
            sales: 38,
        },
    ];
    const config = {
        data,
        xField: "type",
        yField: "sales",
        color: ({ type }) => {
            return "#ffd333"
        },
        label: {
            position: "middle",
            style: {
                fill: "#FFFFFF",
                opacity: 1,
            },
        },

        xAxis: {
            label: {
                autoHide: true,
                autoRotate: false,
            },
        },
        meta: {
            type: {
                alias: "Month",
            },
            sales: {
                alias: "Income",
            },
        },
    };

    return (
        <>
            <div>
                <h5 className="mb-2 title">Dashboard</h5>
                <div className="d-flex justify-content-between align-items-center gap-3">
                    <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded-3">
                        <div>
                            <p className="desc">Total</p>
                            <h6 className="mb-0 sub-title">Ksh 1100</h6>
                        </div>
                        <div className="d-flex flex-column align-items-end" >
                            <h6><BsArrowDownRight />32%</h6>
                            <p className="mb-0 desc" >Compare To April 2023</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-end  flex-grow-1 bg-white p-3 rounded-3">
                        <div>
                            <p className="desc">Total</p>
                            <h6 className="mb-0 sub-title">Ksh 1100</h6>
                        </div >
                        <div className="d-flex flex-column align-items-end">
                            <h6 className="red"> <BsArrowDownRight />32%</h6>
                            <p className="mb-0 desc">compared To April 2023</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-end  flex-grow-1 bg-white p-3 rounded-3">
                        <div>
                            <p className="desc">Total</p>
                            <h6 className="mb-0 sub-title">ksh 1100</h6>
                        </div>
                        <div className="d-flex flex-column align-items-end">
                            <h6 className="green"><BsArrowDownRight />32%</h6>
                            <p className="mb-0 desc">Copared To April 2023</p>
                        </div>

                    </div>
                </div>

                <div className="mt-3">
                    <h5 className="mb-4 title">Income Statistics</h5>
                    <div>
                        <Column {...config} />
                    </div>
                </div>
                <div className="mt-3">
                    <h4 className="mb-4 title">Recent Orders</h4>
                    <div>
                        <Table columns={columns} dataSource={data1} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard