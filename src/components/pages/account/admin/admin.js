import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Tabs, Table, Space, Modal} from "antd";
import 'antd/dist/antd.css';
import ProductForm from "./productform";
import axios from "axios";
import userApi from "../../../../custom-axios/userApi";
import axiosClient from "../../../../custom-axios/axiosClient";
import UserForm from "./userform";
import StatisForm from "./statisform";
import Footer from "../../../common/footer";
import Header from "../../../common/header";
const {TabPane} = Tabs

const AdminPage = () => {

    return (
        <>
            <Header />
            <div style={{padding: '0 50px'}}>

                <Tabs tabPosition={'top'}>
                    <TabPane tab="Thêm sản phẩm" key="1" style={{maxWidth: 500}}>
                        <div>
                            <ProductForm />
                        </div>
                    </TabPane>
                    <TabPane tab="Quản lý Tài Khoản" key="2">
                        <UserForm/>
                    </TabPane>
                    <TabPane tab="Quản lý Sản phẩm" key="3">
                        <StatisForm />
                    </TabPane>
                </Tabs>
            </div>
            <Footer />
        </>

    );
};

export default AdminPage;