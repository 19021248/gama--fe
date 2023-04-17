import React from 'react';
import Header from '../../component/header/Header';
import './style.scss';
const teamMember = [
  {
    name: 'Đỗ Đại Dương',
    photo: '../../image/DuongDai.png',
    position: 'Chủ tịch',
    description: 'This is a description',
  },
  {
    name: 'Nguyễn Văn A',
    position: 'Chủ tịch',
    photo: '../..//image/human.webp',

    description: 'This is a description',
  },
  {
    name: 'Nguyễn Văn B',
    position: 'Chủ tịch',
    photo: '../..//image/human.webp',

    description: 'This is a description',
  },
];
export default function InitiativeTeamPage() {
  return (
    <div className="team main-initiative-container">
      <Header />
      <div className="main-frame">
        <div class="banner">
          <div class="banner-title">Team</div>
          <div class="banner-subtitle">Thành viên nhóm</div>
        </div>
        <div class="content">
          {teamMember.map((member, index) => (
            <div className="member">
              <img
                className="member-photo"
                src={member.photo}
                alt={member.name}
              />
              <div className="member-name">{member.name}</div>
              <div className="member-position">{member.position}</div>
              <div className="member-description">{member.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
