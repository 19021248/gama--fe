import React, { useState } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faCircleCheck,
  faCircleXmark,

} from '@fortawesome/free-solid-svg-icons';
import { UserAvatar } from '../../avatar/UserAvatar';
import { getItem } from '../../../utils';

export default function TopicView({ post, user, comment, showApproval }) {
  const topicUser = user.find((user) => user?.id === post?.created_by);
  const currentUser = getItem('user');
  return (
    <div className="post-item">
      <div>
        <FontAwesomeIcon className="bookmark-icon" icon={faBookmark} />
      </div>
      {showApproval && (
        <div className="approve-button">
          <div>
            <FontAwesomeIcon icon={faCircleCheck} />
          </div>
          <div>
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
        </div>
      )}
      <div className="post-item-header">{post.title}</div>
      <div className="post-item-subheader">
        <UserAvatar className="post-item-avatar" src={topicUser?.gavatar_num} />
        <div className="post-item-name">
          {topicUser?.name ?? 'Anonymous User'}
        </div>
      </div>
      <div className="post-item-body">{post.content}</div>
      <div className="post-item-interact">
        <input placeholder="Comments" className="interact-comment" />
      </div>
      <div className="post-item-footer">
        {comment
          .filter((c) => c.topic_id === post.id)
          .map((c) => (
            <div className="comment-item">
              <UserAvatar
                className="comment-avatar"
                src={user.find((user) => user.id === c.created_by)?.avatar}
              />
              <div className="comment-content">{c.content}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
