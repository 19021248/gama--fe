import React, { useState } from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faCircleCheck,
  faCircleXmark,
  faPaperPlane,
  faPlane,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { UserAvatar } from '../../avatar/UserAvatar';
import { getItem } from '../../../utils';
import {
  approveTopic,
  bookmarkTopic,
  deleteReply,
  deleteTopic,
  disapproveTopic,
  getUser,
  replyTopic,
} from '../../../service/api';
import { useEffect } from 'react';

export default function TopicView({
  post,
  user,
  comment,
  showApproval,
  changeList,
  changeComment,
}) {
  const [topicUser, setTopicUser] = useState({});
  const [commentContent, setCommentContent] = useState('');
  useEffect(() => {
    getUser(post?.created_by).then((res) => {
      setTopicUser(res.data.user);
    });
  }, []);

  const currentUser = getItem('user');
  return (
    <div className="post-item">
      <div className="approve-button">
        {showApproval && (
          <>
            <div
              className={`clickable-icon ${post.status === 1 && 'approved'}`}
              onClick={() => {
                approveTopic(post.id).finally(() => {
                  changeList();
                });
              }}
            >
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
            <div
              className={`clickable-icon ${post.status === 2 && 'disapproved'}`}
              onClick={() => {
                disapproveTopic(post.id).finally(() => {
                  changeList();
                });
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </>
        )}
        <div
          className="clickable-icon"
          onClick={() => {
            bookmarkTopic(post.id, currentUser.id);
          }}
        >
          <FontAwesomeIcon icon={faBookmark} />
        </div>
        {(showApproval || post.created_by === currentUser?.id) && (
          <div
            className="clickable-icon"
            onClick={() => {
              deleteTopic(post.id).finally(() => {
                changeList();
              });
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </div>
        )}
      </div>

      <div className="post-item-header">{post.title}</div>
      <div className="post-item-subheader">
        <UserAvatar className="post-item-avatar" src={topicUser?.gavatar_num} />
        <div className="post-item-name">
          {topicUser?.name ?? 'Anonymous User'}
        </div>
      </div>
      <div className="post-item-body">{post.content}</div>

      <div className="post-item-interact">
        <div class="interact-comment">
          <input
            placeholder="Comments"
            value={commentContent}
            onChange={(e) => {
              setCommentContent(e.target.value);
            }}
          />
          <div
            className="commentSend"
            onClick={() => {
              replyTopic({
                topic_id: post.id,
                content: commentContent,
                created_by: currentUser.id,
              }).finally(() => {
                setCommentContent('');
                changeComment();
              });
            }}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </div>
      </div>

      <div className="post-item-footer">
        {comment
          .filter((c) => c.topic_id === post.id)
          .map((c, index) => (
            <div className="comment-item" key={index}>
              <UserAvatar
                className="comment-avatar"
                src={user?.find((user) => user.id === c.created_by)?.avatar}
              />
              <div className="comment-content">{c.content}</div>
              {(showApproval || c.created_by === currentUser?.id) && (
                <div
                  className="delete-comment"
                  onClick={() => {
                    deleteReply(c.id).finally(() => {
                      changeComment();
                    });
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
