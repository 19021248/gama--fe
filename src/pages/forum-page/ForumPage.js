import { Avatar, Form, Input, Select } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { getItem } from '../../utils';
import './style.scss';
import { getUser } from '../../service/api';
import { forum_comments, forum_posts, forum_users } from './ForumDB';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faComment,
  faHouseChimney,
  faPlus,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

export default function ForumPage() {
  return (
    <div className="forum-container">
      <div className="forum-sidebar-left">
        <div className="forum-sidebar-item search">
          <FontAwesomeIcon icon={faSearch} />
          Search
        </div>
        <div className="forum-sidebar-item">
          <FontAwesomeIcon icon={faHouseChimney} />
          Home
        </div>
        <div className="forum-sidebar-item">
          <FontAwesomeIcon icon={faComment} />
          Your thread
        </div>
        <div className="forum-sidebar-item">
          <FontAwesomeIcon icon={faBookmark} />
          Saved
        </div>
      </div>
      <div className="forum-body">
        <div className="post-create">
          <input className="post-create-input" placeholder="Title" />
          <FontAwesomeIcon icon={faPlus} />
        </div>
        {forum_posts.map((post, index) => (
          <div className="post-item" key={index}>
            <div className="post-item-header">{post.title}</div>
            <div className="post-item-subheader">
              <img
                className="post-item-avatar"
                src={forum_users[post.user_id].avatar}
                alt="avatar"
              />
              <div className="post-item-name">
                {forum_users[post.user_id].name}
              </div>
            </div>
            <div className="post-item-body">{post.content}</div>
            <div className="post-item-footer"></div>
          </div>
        ))}
      </div>
      <div className="forum-sidebar-right">
        {forum_users.map((user, index) => (
          <div className="forum-sidebar-item" key={index}>
            <img
              className="forum-sidebar-item-avatar"
              src={user.avatar}
              alt="avatar"
            />
            <div className="forum-sidebar-item-name">{user.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
