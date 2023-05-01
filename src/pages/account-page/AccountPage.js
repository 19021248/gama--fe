import { Avatar, Form, Input, Select } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { getItem } from '../../utils';
import './style.scss';
import { getUser } from '../../service/api';
const profession = [
  {
    name: 'User',
    description: 'Assess patient',
  },
  {
    name: 'ADmin',
    description: 'Assess patient',
  },
];
export default function AccountPage() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUser(getItem('user')?.id).then((res) => {
      setUserInfo(res.data);
    });
  }, []);
  return (
    <div className="account-container">
      <div className="profession">
        {profession.map((item) => (
          <div className="profession-item"></div>
        ))}
      </div>
      <div className="form-body">
        <Form layout="horizontal" size="large">
          <div className="form-col left">
            Name / Surname
            <Form.Item name="name">
              <Input
                className="main-input"
                placeholder="John Doe"
                defaultValue={userInfo?.name}
              />
            </Form.Item>
            Birth day
            <Form.Item name="birthday">
              <Input
                className="main-input"
                defaultValue={userInfo?.birthday}
                placeholder="12/20/1999"
              />
            </Form.Item>
            <div className="gender-ava">
              <Avatar size={90} icon={<UserOutlined />} />
              Gender
              <Form.Item name="gender">
                <Select defaultValue={userInfo?.gender}>
                  <Select.Option value="0">Male</Select.Option>
                  <Select.Option value="1">Female</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </div>
          <div className="form-col right">
            Address
            <Form.Item name="address">
              <Input
                className="main-input"
                defaultValue={userInfo?.address}
                placeholder="123 Avenue St."
              />
            </Form.Item>
            Phone number
            <Form.Item name="phone_number">
              <Input
                className="main-input"
                defaultValue={userInfo?.phone_number}
                placeholder="098xxxxxx"
              />
            </Form.Item>
            Email
            <Form.Item name="email">
              <Input
                className="main-input"
                defaultValue={userInfo?.email}
                placeholder="exmaplle@mail"
              />
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}
