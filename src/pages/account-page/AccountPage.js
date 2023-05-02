import { Avatar, Form, Input, Select } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { getItem } from '../../utils';
import './style.scss';
import { getUser, updateUser } from '../../service/api';
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
  const [userInfo, setUserInfo] = useState();
  const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
    getUser(getItem('user')?.id).then((res) => {
      setUserInfo(res.data.user);
    });
  }, []);

  const onFinish = (values) => {
    setSubmitting(true);
    updateUser(getItem('user')?.id, {
      ...values,
      birthday: new Date(values.birthday)
        .toISOString()
        .slice(0, 19)
        .replace('T', ' '),
    })
      .then((res) => {
        setUserInfo(res.data);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <div className="account-container">
      {/*       <div className="profession">
        {profession.map((item) => (
          <div className="profession-item"></div>
        ))}
      </div> */}
      {userInfo && (
        <div className="form-body">
          <Form
            layout="horizontal"
            size="large"
            onFinish={onFinish}
            initialValues={{
              name: userInfo?.name,
              birthday: userInfo?.birthday,
              gender: userInfo?.gender,
              address: userInfo?.address,
              phone_number: userInfo?.phone_number,
              email: userInfo?.email,
              nationality: userInfo?.nationality,
            }}
          >
            <div className="form-col left">
              Name / Surname
              <Form.Item name="name">
                <Input className="main-input" placeholder="John Doe" />
              </Form.Item>
              Birth day
              <Form.Item
                name="birthday"
                rules={[
                  {
                    pattern: /\d+-\d+-\d+/,
                    message: 'Not date format! (yyyy-mm-dd)',
                  },
                ]}
              >
                <Input className="main-input" placeholder="1999-01-01" />
              </Form.Item>
              <div className="gender-ava">
                <Avatar size={90} icon={<UserOutlined />} />
                Gender
                <Form.Item name="gender">
                  <Select>
                    <Select.Option value="0">Male</Select.Option>
                    <Select.Option value="1">Female</Select.Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            <div className="form-col right">
              Address
              <Form.Item name="address">
                <Input className="main-input" placeholder="123 Avenue St." />
              </Form.Item>
              Phone number
              <Form.Item name="phone_number">
                <Input className="main-input" placeholder="098xxxxxx" />
              </Form.Item>
              Email
              <Form.Item
                name="email"
                rules={[
                  {
                    pattern: /\S+@\S+\.\S+/,
                    message: 'Not email format!',
                  },
                ]}
              >
                <Input className="main-input" placeholder="exmaplle@mail" />
              </Form.Item>
              <Form.Item name="nationality">
                <Input className="main-input" placeholder="Vietnamese" />
              </Form.Item>
              <button type="submit" htmlType="submit" className="main-button">
                Submit
              </button>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
}
