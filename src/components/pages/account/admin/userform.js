import React, {useEffect, useState} from 'react';
import userApi from "../../../../custom-axios/userApi";
import axiosClient from "../../../../custom-axios/axiosClient";
import {Space, Table, Modal, Button} from "antd";

function UserForm(props) {
    const [totalUser, setTotalUser] = useState([])
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const getAllUser = async () => {
            const data  = await userApi.getAllUsers()
            setTotalUser(data)
            console.log(data)
        }
        getAllUser()
    }, [])

    const onDelete = async _id => {
        console.log('run', _id)
        const deleteUser = await axiosClient.get(`/users/delete/${_id}`)
    }
    const onOk = (id) => {
        setVisible(false)
        onDelete(id)
    };

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
                    <a>Reset password</a>
                    {/*<div>*/}
                    {/*    <Button type="primary" onClick={() => setVisible(true)}>*/}
                    {/*        Modal*/}
                    {/*    </Button>*/}
                    {/*    {visible && Modal.confirm({*/}
                    {/*        title: 'Confirm',*/}
                    {/*        content: 'Bla bla ...',*/}
                    {/*        onOk: () => onOk(record._id),*/}
                    {/*        onCancel: () => setVisible(false),*/}
                    {/*        okText: '确认',*/}
                    {/*        cancelText: '取消',*/}
                    {/*    })}*/}
                    {/*</div>*/}
                </Space>
            ),
        },
    ];
    return (
        <>
            <label>Total User: <strong>{totalUser?.length}</strong></label>
            <Table columns={columns} dataSource={totalUser} />
        </>
    );
}

export default UserForm;