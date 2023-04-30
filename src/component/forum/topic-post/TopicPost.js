import React, { useState } from 'react';
import './style.scss';
import { Button, Form, Input, Select } from 'antd';
import { createTopic } from '../../../service/api/index';
import TextArea from 'antd/lib/input/TextArea';
import { topicCategory } from '../../../enum';
import { getItem } from '../../../utils';
export default function TopicPost({ show, setShow }) {
  const [isSubmitting, setSubmitting] = useState(false);
  const onFinish = (values) => {
    setSubmitting(true);
    createTopic({ ...values, created_by: getItem('user')?.id, status: 0 })
      .then((res) => {})
      .catch((err) => {
        //addNotification('Error when logging in', NOTIFICATION_TYPE.ERROR);
      })
      .finally(() => {
        setSubmitting(false);
        setShow(false);
      });
  };
  return (
    <div className={`${!show && 'hidden'} topic-post-modal`}>
      <div className="bg" onClick={() => setShow(false)}></div>
      <div className="post-body">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          title
          <Form.Item name="title">
            <Input className="main-input" placeholder="Enter your post title" />
          </Form.Item>
          content
          <Form.Item name="content">
            <TextArea className="main-input" placeholder="Enter the content" />
          </Form.Item>
          <Form.Item name="category">
            <Select>
              {topicCategory.map((item) => (
                <Select.Option value={item.id}>{item.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <button
            type="submit"
            htmlType="submit"
            disabled={isSubmitting}
            className="main-button"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}
