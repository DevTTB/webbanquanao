import React, {useState} from 'react';
import {Modal, Select} from "antd";
import {Option} from "antd/es/mentions";

function AddressShip(props) {
    const [visible, setVisible] =useState()
    const handleSaveAdress = () => {
        setVisible(false)
    }
    const address = {
    }
    const cityData = ['Hà Nội', 'TPHCM'];
    const districtData = {
        'Hà Nội': ['Ba Vì', 'Sơn Tây'],
        'TPHCM': ['Quận 1', 'Quận 2'],
    };
    const villageData = {
        'Ba Vì': ['Phú Cường', 'Tản Hồng'],
        'Sơn Tây': ['Trung Sơn Trầm', 'Sơn Đông'],
        'Quận 1': ['ac', 'as'],
        'Quận 2': ['qw', 'ww'],
    }
    const [cities, setCities] = useState(cityData[0]);
    const [districts, setDistricts] = useState(districtData[cityData[0]][0]);
    const [villages, setVillages] = useState(villageData[districtData[cityData[0]][0]][0])
    const onCityChange = value => {
        setCities(value)
        setDistricts(districtData[value][0])
        setVillages('')
    };
    const onDistrictChange = value => {
        setDistricts(value)
        setVillages(villageData[value][0])
    };
    const onVillageChange = value => {
        setVillages(value)
    }
    return (
        <div>
            <div onClick={() => setVisible(true)}></div>
            <Modal
            title="Thêm địa chỉ:"
            centered
            visible={visible}
            onOk={() => handleSaveAdress()}
            onCancel={() => setVisible(false)}
            width={'70%'} >
            <div className='d-flex flex-column'>
                <Select defaultValue={cityData[0]} style={{ width: 120 }} onChange={onCityChange}>
                    {cityData.map(city => (
                        <Option key={city}>{city}</Option>
                    ))}
                </Select>
                <Select style={{ width: 120 }} value={districts} onChange={onDistrictChange}>
                    {districtData[`${cities}`].map(district => (
                        <Option key={district}>{district}</Option>
                    ))}
                </Select>
                <Select style={{ width: 120 }} value={villages} onChange={onVillageChange}>
                    {
                        villageData[`${districts}`] && villageData[`${districts}`].map(village => (
                            <Option key={village}>{village}</Option>
                        ))
                    }
                </Select>
            </div>
        </Modal>
        </div>
    );
}

export default AddressShip;