import React, {useState} from 'react';
import {Button, Form, Input, InputNumber} from "antd";

function ProductForm(props) {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [quantity, setQuantity] = useState()
    const [brand, setBrand] = useState()
    const [size, setSize] = useState()
    const [sale, setSale] = useState(0)
    const [color, setColor] = useState()
    const [url, setUrl] = useState()
    const [category, setCategory] = useState()
    const [subcategory, setSubCategory] = useState()
    const [description, setDescription] = useState()
    const [material, setMaterial] = useState()

    const submitCreateProduct = e => {
        e.preventDefault()

        const data = {
            name: name,
            brand: brand,
            color: color,
            category: category,
            description: description,
            price: price,
            quantity: quantity,
            sale: sale,
            size: size,
            url: url,
            subcategory: subcategory,
            material: material,
        }

        console.log(data)
    }

    return (
        <Form name="nest-messages" style={{}}>
            <Form.Item name={['product', 'name']} label="Name" rules={[{ required: true }]}>
                <Input onChange={(e) => setName(e.target.value)}/>
            </Form.Item>
            <Form.Item name={['product', 'price']} label="Price" rules={[{ type: 'number', min: 0}]}>
                <Input defaultValue={0} onChange={(e) => setPrice(e.target.value)}/>
            </Form.Item>
            <Form.Item name={['product', 'quantity']} label="Quantity" rules={[{ type: 'number', min: 0 }]}>
                <Input defaultValue={0} onChange={(e) => setQuantity(e.target.value)}/>
            </Form.Item>
            <Form.Item name={['product', 'brand']} label="Brand">
                <Input onChange={(e) => setBrand(e.target.value)}/>
            </Form.Item>
            <Form.Item name={['product', 'size']} label="Size">
                <Input onChange={(e) => setSize(e.target.value)}/>
            </Form.Item>
            <Form.Item name={['product', 'color']} label="Color">
                <Input onChange={(e) => setColor(e.target.value)}/>
            </Form.Item>
            <Form.Item name={['product', 'url']} label="Url">
                <Input onChange={(e) => setUrl(e.target.value)}/>
            </Form.Item>
            <Form.Item name={['product', 'category']} label="category">
                <Input onChange={(e) => setCategory(e.target.value)}/>
            </Form.Item>
            <Form.Item name={['product', 'subcategory']} label="subcategory">
                <Input onChange={(e) => setSubCategory(e.target.value)}/>
            </Form.Item>
            <Form.Item name={['product', 'material']} label="Material">
                <Input onChange={(e) => setMaterial(e.target.value)}/>
            </Form.Item>
            <Form.Item name={['product', 'decription']} label="Decription">
                <Input.TextArea onChange={(e) => setDescription(e.target.value)}/>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" onClick={submitCreateProduct}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default ProductForm;