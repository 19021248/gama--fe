import React, { useState } from 'react';
import './style.scss';
import { Button, Form, Input, Select } from 'antd';
import { createTopic, editTopic } from '../../../service/api/index';
import TextArea from 'antd/lib/input/TextArea';
import { topicCategory } from '../../../enum';
import { getItem } from '../../../utils';
import addNotification, { NOTIFICATION_TYPE } from '../../notification';

export default function TopicPost({
  show,
  setShow,
  changeList,
  postFreely,
  editContent,
  setEditContent
}) {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setSubmitting(true);
    if (!editContent) {
      createTopic({
        ...values,
        created_by: getItem('user')?.id,
        status: postFreely ? 1 : 0,
      }).finally(() => {
        addNotification('Your post have been sent', NOTIFICATION_TYPE.SUCCESS);
        form.resetFields();
        setSubmitting(false);
        setShow(false);
        changeList();
      });
    } else {
      editTopic(editContent.id, {
        ...values,
      })
        .then((res) => {})
        .catch((err) => {
          //addNotification('Error when logging in', NOTIFICATION_TYPE.ERROR);
        })
        .finally(() => {
          addNotification(
            'Your post have been edited',
            NOTIFICATION_TYPE.SUCCESS,
          );
          form.resetFields();
          setSubmitting(false);
          setShow(false);
          changeList();
          setEditContent(null);
        });
    }
  };
  return (
    <div className={`${!show && 'hidden'} topic-post-modal`}>
      <div
        className="bg"
        onClick={() => {
          setShow(false);
          setEditContent(null);
        }}
      ></div>
      <div className="post-body">
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={
            editContent !== null
              ? {
                  title: editContent.title,
                  content: editContent.content,
                  cate_id: editContent.cate_id,
                }
              : { remember: true }
          }
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          Title
          <Form.Item name="title">
            <Input className="main-input" placeholder="Enter your post title" />
          </Form.Item>
          Content
          <Form.Item name="content">
            <TextArea className="main-input" placeholder="Enter the content" />
          </Form.Item>
          <Form.Item name="cate_id">
            <Select>
              {topicCategory.map((item, index) => (
                <Select.Option
                  onClick={() => console.log(item)}
                  style={{
                    backgroundColor: item.color,
                    color: 'white',
                    width: '50%',
                    borderRadius: 20,
                  }}
                  value={item.id}
                  key={index}
                >
                  {item.name}
                </Select.Option>
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
