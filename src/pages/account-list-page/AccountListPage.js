import { Avatar, Form, Input, Select } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { getItem } from '../../utils';
import './style.scss';
import { getAllUser, getUser, updateUser } from '../../service/api';
import { UserAvatar } from '../../component/avatar/UserAvatar';
import { userRole } from '../../enum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

export default function AccountListPage() {
  const [userInfo, setUserInfo] = useState();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUser(getItem('user')?.id).then((res) => {
      setUserInfo(res.data.user);
    });
    getAllUser().then((res) => {
      setUserList(res.data.users);
    });
  }, []);

  return (
    <div className="account-list-container">
      <div className="account-list">
        <div className="account-item">
          <div></div>
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
        </div>
        {userList.map((item, index) => (
          <div className="account-item">
            <UserAvatar size={64} user={item.id} />
            <div className="account-name">{item.name}</div>
            <div className="account-email">{item.email}</div>
            <select
              defaultValue={item.role ?? 0}
              onChange={(e) => {
                let newUserList = [...userList];
                newUserList[index] = { ...item, role: +e.target.value };
                setUserList(newUserList);
              }}
            >
              {userRole.map((role) => (
                <option value={role.id}>{role.name}</option>
              ))}
            </select>
            <div className="account-action">
              <div
                onClick={() => {
                  updateUser(item.id, { role: item.role }).then((res) => {
                    console.log(res);
                  });
                }}
              >
                <FontAwesomeIcon icon={faSave} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
