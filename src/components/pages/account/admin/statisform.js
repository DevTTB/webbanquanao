import React, {useEffect, useState} from 'react';
import {Space, Table} from "antd";
import productApi from "../../../../custom-axios/productApi";

function StatisForm(props) {
    const [totalProduct, setTotalProduct] = useState()

    useEffect(() => {
        const getData = async () => {
            const data  = await productApi.getAll()
            setTotalProduct(data)
        }
        getData()
    },[])
    const columns = [{
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
        title: 'Price',
            dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Quantity',
            dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Color',
            dataIndex: 'color',
        key: 'color',
        render: (text, record) => record.color.map(item => item+' ')
    },
    {
        title: 'Size',
            key: 'size',
        render: (text, record) => record.size.map(item => item+' '),
    },
        {
            title: 'Image',
            key: 'url',
            render: (text, record) => record.url.map(item => <img className='img-statis' src={item}/>)
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Subcategory',
            dataIndex: 'subcategory',
            key: 'subcategory',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (text, record) => <p className='description-statis'>{text}</p>
        },
        {
            title: 'Material',
            dataIndex: 'material',
            key: 'material',
        },

];
    return (
        <div>
            <label>Total product: <strong>{totalProduct?.length}</strong></label>
            <Table columns={columns} dataSource={totalProduct} />
        </div>
    );
}

export default StatisForm;