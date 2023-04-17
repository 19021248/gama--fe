import React from 'react';
import Header from '../../component/header/Header';
import './style.scss';

export default function InitiativeReachPage() {
  return (
    <div className="reach main-initiative-container">
      <Header />
      <div className="main-frame">
        <div class="banner">
          <div class="banner-title">Reach</div>
          <div class="banner-subtitle">Mục tiêu</div>
        </div>
        <div class="content">
          <div className="reach-item">
            <span className="item-title">Nhiệm vụ</span>
            <span className="item-description">
              PhET Global is an initiative to improve the quality of global math
              and science education by increasing PhET simulation access and
              impact around the world.
            </span>
          </div>
          <div className="reach-item">
            <span className="item-title">Mục tiêu đã đạt được</span>
            <span className="item-description">Tán 200 em</span>
          </div>
          <div className="reach-item">
            <span className="item-title"></span>
            <span className="item-description"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
