import React, { useState } from "react";
import CustomInput from "../Components/CustomInput";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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


const AddBlog = () => {
    const [desc, setDesc] = useState();
    const handleDesc = (e) => {
        console.log(e)
    }

    return (
        <>

            <div>
                <h5 className="mb-2 title"> Add Blog</h5>
                <div className="">
                   
                    <form action="">

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
                        <div className="mt-4">

                            <CustomInput type="text" label="Enter Blog Title" />

                        </div>
                        <select className="form-control py-2 mb-3" name="" id="">
                            <option value="">
                                select A Blog Category
                            </option>
                        </select>
                        <ReactQuill theme="snow" value={desc}
                            onChange={(evt) => {
                                handleDesc(evt)
                            }} />
                        <button type="submit" className="btn btn-success border-0 rounded-3 mt-3 my-2"> Add Blog</button>
                    </form>
                </div>

            </div>


        </>
    )
}

export default AddBlog;



