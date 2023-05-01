import React from 'react';
export const UserAvatar = ({ src, className }) => {
  return (
    <img
      className={`user-avatar ${className}`}
      src={
        src
          ? `https://i.pravatar.cc/150?img=${src}`
          : '../../image/default_user.png'
      }
      alt="avatar"
    />
  );
};
