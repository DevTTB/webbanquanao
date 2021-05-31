import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Tabs, Table, Space} from "antd";
import 'antd/dist/antd.css';
import ProductForm from "./productform";
import axios from "axios";
import userApi from "../../../../custom-axios/userApi";
import axiosClient from "../../../../custom-axios/axiosClient";
const {TabPane} = Tabs

const AdminPage = () => {
    const [totalUser, setTotalUser] = useState([])

    useEffect(() => {
        const getAllUser = async () => {
            const data  = await userApi.getAllUsers()
            setTotalUser(data)
            console.log(data)
        }
        getAllUser()
    }, [])

    const onDeleteUser = async _id => {
        console.log('run', _id)
        const deleteUser = await axiosClient.get(`/users/delete/${_id}`)
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            key: '_id',
            render: text => <label>{text}</label>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <label>{text}</label>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'isAdmin',
            dataIndex: 'isAdmin',
            key: 'isAdmin',
            render: (text, record) => record.isAdmin ? 'Admin' : 'User'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>Edit</a>
                    <a onClick={() => onDeleteUser(record._id)}>Delete</a>
                </Space>
            ),
        },
    ];

    return (
        <div style={{padding: '0 50px'}}>
            <Tabs tabPosition={'top'}>
                <TabPane tab="Products" key="1" style={{maxWidth: 500}}>
                    <ProductForm />
                </TabPane>
                <TabPane tab="Users" key="2">
                    <label>Total User: <strong>{totalUser.length}</strong></label>
                    <Table columns={columns} dataSource={totalUser} />
                </TabPane>
                <TabPane tab="Tab 3" key="3">

                </TabPane>
            </Tabs>
        </div>

    );
};

export default AdminPage;