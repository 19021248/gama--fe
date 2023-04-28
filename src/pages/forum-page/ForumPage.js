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
  const [searchText, setSearchText] = useState('');
  const [filteredPost, setFilteredPost] = useState(forum_posts);
  useEffect(() => {
    const newForum = forum_posts.filter((user) =>
      user.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredPost(newForum);
  }, [searchText]);
  return (
    <div className="forum-container">
      <div className="forum-sidebar-left">
        <div className="forum-sidebar-item search">
          <FontAwesomeIcon icon={faSearch} />
          <input
            className="post-search"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
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
        {filteredPost.map((post, index) => (
          <div className="post-item" key={index}>
            <FontAwesomeIcon className="bookmark-icon" icon={faBookmark} />

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
            <div className="post-item-interact">
              <input placeholder="Comments" className="interact-comment" />
            </div>
            <div className="post-item-footer">
              {forum_comments
                .filter((c) => c.post_id === post.id)
                .map((c) => (
                  <div className="comment-item">
                    <img
                      className="comment-avatar"
                      src={forum_users[c.user_id].avatar}
                      alt="avatar"
                    />
                    <div className="comment-content">{c.content}</div>
                  </div>
                ))}
            </div>
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
