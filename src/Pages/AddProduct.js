import React, { useState } from "react";
import CustomInput from "../Components/CustomInput";
import ReactQuill from "react-quill";

import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;


const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};


const AddProduct =()=>{
    const [desc,setDesc] = useState();
    const handleDesc = (e)=>{
        setDesc(e)
    };

    return(
        <>
        <div>
            <h5 className="mb-2 title"> Add Product</h5>
        <form action="">
            <CustomInput type="text" label="Enter Product Title"/>
            <div className="mb-3">
            <ReactQuill
             theme="snow"
             value={desc}
             onChange={(evt) =>{
                handleDesc(evt);
             }}
            />
            </div>
            <CustomInput type="number" label="Enter Product price"/>
            <select name="" className="form-control py-3 mb-3" id="">
                <option>
                    Select Brand
                </option>
            </select>

            <select name="" className="form-control py-3 mb-3">
                <option>
                    Select Category
                </option>
            </select>
            <select name="" className="form-control py-3 mb-3" id="">
                <option>
                    Select Color
                </option>
            </select>

            <CustomInput type="number" label="Enter Product price"/>
            <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                band files
                            </p>
                        </Dragger>

            <button className="btn btn-success border-0 rounded-3 mt-3">
                Add Product
            </button>

        </form>
        </div>
        
        </>
    )
}

export default AddProduct;