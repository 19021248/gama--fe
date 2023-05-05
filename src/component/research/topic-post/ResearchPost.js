import React, { useEffect, useState } from 'react';
import './style.scss';
import { Button, Form, Input, Select } from 'antd';
import {
  createResearch,
  createTopic,
  editTopic,
} from '../../../service/api/index';
import TextArea from 'antd/lib/input/TextArea';
import { topicCategory } from '../../../enum';
import { getItem } from '../../../utils';
import addNotification, { NOTIFICATION_TYPE } from '../../notification';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { $getRoot, $getSelection } from 'lexical';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';

import { lexiTheme } from './LexiTheme';
export default function ResearchPost({
  show,
  setShow,
  changeList,
  postFreely,
  editContent,
  setEditContent,
}) {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form] = Form.useForm();
  const [content, setContent] = useState('');
  function onChange(editorState) {
    editorState.read(() => {
      // Read the contents of the EditorState here.
      const root = $getRoot();
      const selection = $getSelection();

      console.log(root, selection);
      setContent(root.innerHTML);
    });
  }
  const onFinish = (values) => {
    setSubmitting(true);
    createResearch({
      ...values,
      created_by: getItem('user')?.id,
      content: content,
    }).finally(() => {
      addNotification('Your post have been sent', NOTIFICATION_TYPE.SUCCESS);
      form.resetFields();
      setSubmitting(false);
      setShow(false);
      changeList();
    });
  };
  function MyCustomAutoFocusPlugin() {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
      // Focus the editor when the effect fires!
      editor.focus();
    }, [editor]);

    return null;
  }

  // Catch any errors that occur during Lexical updates and log them
  // or throw them as needed. If you don't throw them, Lexical will
  // try to recover gracefully without losing user data.
  function onError(error) {
    console.error(error);
  }

  const initialConfig = {
    namespace: 'MyEditor',
    lexiTheme,
    onError,
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
              : {}
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
            <LexicalComposer initialConfig={initialConfig}>
              <RichTextPlugin
                contentEditable={
                  <ContentEditable className="SKEditor__content" />
                }
                placeholder={<div>Enter some text...</div>}
                ErrorBoundary={LexicalErrorBoundary}
              />
              <OnChangePlugin onChange={onChange} />
              <HistoryPlugin />
              <MyCustomAutoFocusPlugin />
            </LexicalComposer>
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
