import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,

} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { MdDashboardCustomize } from "react-icons/md"
import { BsPeople } from "react-icons/bs"
import { useNavigate } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { SiBrandfolder } from "react-icons/si";
import { TbCategory} from "react-icons/tb";
import { AiOutlineBgColors } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { ImBlogger2 } from "react-icons/im";
import { LiaBlogSolid } from "react-icons/lia";
import { BiSolidMessageEdit } from "react-icons/bi"
import { Outlet } from 'react-router-dom';
import userImage from "../Images/user.jpg";
import { MdNotificationsNone } from "react-icons/md";
import { Link } from 'react-router-dom';


const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>
          <h2 className='text-center text-white mb-0 py-3 fs-4'>
            <span className='sm-logo'>ZN</span>
            <span className='lg-logo'>ZeeNet</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}

          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key)
            }
          }}

          items={[
            {
              key: '',
              icon: <MdDashboardCustomize className='fs-5' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <BsPeople className='fs-5' />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <AiOutlineShopping className='fs-5 ' />,
              label: 'Catalog',
              children: [
                {
                  key: "product",
                  icon: <BsCart3 className='fs-5' />,
                  label: " Add Product"
                }, {
                  key: "product-list",
                  icon: <BsCart3 className='fs-5' />,
                  label: "Product List"
                }, {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-5" />,
                  label: " Add Brand"
                }, {
                  key: "brand-list",
                  icon: <SiBrandfolder className="fs-5" />,
                  label: "Brand List"
                },
                {
                  key: "category",
                  icon: <TbCategory className="fs-5" />,
                  label: " Add Category"
                },
                {
                  key: "category-list",
                  icon: <TbCategory className="fs-5" />,
                  label: "Category List"

                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-5" />,
                  label: "Color"
                }, {
                  key: "color-list",
                  icon: <AiOutlineBgColors className="fs-5" />,
                  label: "Color List"
                }

              ]
            },
            {
              key: "orders",
              icon: <FaClipboardList className="fs-5" />,
              label: "Orders"
            },
            {
              key: "blogs",
              icon: <ImBlogger2 className="fs-5" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <LiaBlogSolid className="fs-5" />,
                  label: " Add Blog ",
                },
                {
                  key: "blog-list",
                  icon: <ImBlogger2 className='fs-5' />,
                  label: "Blog List"
                },
                {
                  key: "blog-category",
                  icon: <LiaBlogSolid className="fs-5" />,
                  label: "Add Blog Category"
                },
                {
                  key: "blog-category-list",
                  icon: <ImBlogger2 className='fs-5' />,
                  label: "Blog Category List"
                }
              ]

            },
            {
              key: "enquiries",
              icon: <BiSolidMessageEdit className="fs-5" />,
              label: "Enquiries"
            }

          ]}
        />
      </Sider>
      <Layout>
        <Header className='d-flex justify-content-between ps-1 pe-5'
          style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)} className='trigger'
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className='d-flex gap-4 align-items-center'>
            <div className='position-relative'>
              <MdNotificationsNone className='fs-4' />
              <span className='badge bg-warning rounded-circle p-1 position-absolute'>2</span>

            </div>


            <div className='d-flex gap-3 align-items-center'>
              <img
                width={32}
                height={32}
                src={userImage} alt='userimage'>
              </img>
            </div>
            <div
             role='button' 
             id="dropdownMenuLink"
             data-bs-toggle="dropdown"
             aria-expanded="false"
             >
              <h5 className='mb-0'>Omollo</h5>
              <p className='mb-0'>omollo@dev.com</p>
            </div>
            <div className='dropdown-menu'
             aria-labelledby='dropdownMenuLink'
             style={{height:"auto", lineHeight:"20px" }}>
              <li>
                <Link to="/" className='dropdown-item py-1 mb-1'>
                  View Profile
                </Link>
                </li>

                <li>
                <Link to="/" className='dropdown-item py-1 mb-1'>
                  Signout
                </Link>
                </li>

             
            </div>

          </div>

        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;