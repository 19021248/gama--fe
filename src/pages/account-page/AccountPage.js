import { Avatar, Form, Input, Select } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { getItem } from '../../utils';
import './style.scss';
import { getUser } from '../../service/api';
export default function AccountPage() {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    setUserInfo(getItem('user'));
  }, []);
  useEffect(() => {
    if (userInfo?.id) {
      getUser(userInfo?.id).then((res) => {
        console.log(res.data)
      });
    }
  }, [userInfo?.id]);
  return (
    <div className="account-container">
      <div className="form-body">
        <div className="user-info">
          <Avatar size={90} icon={<UserOutlined />} />
          <p style={{ fontSize: 20, alignSelf: 'center' }}>{userInfo?.email}</p>
        </div>

        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 40 }}
          layout="horizontal"
          size="large"
        >
          <Form.Item>
            Họ và tên
            <Input
              className="main-input"
              placeholder="Nguyen van a"
              value={userInfo?.name}
            />
          </Form.Item>
          <Form.Item style={{ marginTop: 30 }}>
            Ngày sinh
            <Input className="main-input" placeholder="xx/xx/xxxx" />
          </Form.Item>
          <Form.Item style={{ marginTop: 30 }}>
            Giới tính
            <Select>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item style={{ marginTop: 30 }}>
            Số điện thoại
            <Input className="main-input" placeholder="089" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
