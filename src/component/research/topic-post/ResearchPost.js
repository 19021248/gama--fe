import React, { useEffect, useState } from 'react';
import './style.scss';
import { Button, Form, Input, Select } from 'antd';
import { createResearch, editResearch } from '../../../service/api/index';
import { researchCategory } from '../../../enum';

import { getItem } from '../../../utils';
import addNotification, { NOTIFICATION_TYPE } from '../../notification';

import { CKEditor } from 'ckeditor4-react';

export default function ResearchPost({
  show,
  setShow,
  changeList,
  postFreely,
  editContent,
  setEditContent,
}) {
  const [isSubmitting, setSubmitting] = useState(false);
  const [content, setContent] = useState(editContent?.content ?? '');

  const onFinish = (values) => {
    setSubmitting(true);
    if (!editContent) {
      createResearch({
        ...values,
        created_by: getItem('user')?.id,
        content: content,
      }).finally(() => {
        addNotification('Your post have been sent', NOTIFICATION_TYPE.SUCCESS);
        setSubmitting(false);
        setShow(false);
        changeList();
      });
    } else {
      editResearch(editContent.id, {
        ...values,
        content: content,
      }).finally(() => {
        addNotification('Your post have been sent', NOTIFICATION_TYPE.SUCCESS);
        setSubmitting(false);
        setShow(false);
        changeList();
      });
    }
  };

  return (
    <div className={`${!show && 'hidden'} research-post-modal`}>
      <div
        className="bg"
        onClick={() => {
          setShow(false);
          setEditContent(null);
        }}
      ></div>
      <div className="post-body">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={
            editContent !== null
              ? {
                  name: editContent.name,
                  content: editContent.content,
                  cate_id: editContent.cate_id,
                }
              : {}
          }
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          Title
          <Form.Item name="name">
            <Input className="main-input" placeholder="Enter your post title" />
          </Form.Item>
          Content
          <Form.Item name="content">
            <CKEditor
              style={{ width: '100%' }}
              initData={editContent?.content ?? ''}
              onChange={(e) => {
                setContent(e.editor.getData());
              }}
            />
          </Form.Item>
          <Form.Item name="cate_id">
            <Select>
              {researchCategory.map((item, index) => (
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
