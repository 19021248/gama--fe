import React, { useState, useEffect } from 'react';
import './style.scss';
import { Button } from 'antd';
import PageFooter from '../edit-page/page-footer/PageFooter';
const usedTech = [
  {
    name: 'aws',
    fullName: 'Amazon Web Services',
    url: 'https://aws.amazon.com/',
  },
  {
    name: 's3',
    fullName: 'Simple Storage Service',
    url: 'https://aws.amazon.com/s3/',
  },
  {
    name: 'react',
    fullName: 'React',
    url: 'https://reactjs.org/',
  },
  {
    name: 'lavarel',
    fullName: 'Lavarel',
    url: 'https://laravel.com/',
  },
  {
    name: 'mysql',
    fullName: 'MySQL',
    url: 'https://www.mysql.com/',
  },
  {
    name: 'gama',
    fullName: 'Gama Platform',
    url: 'https://gama-platform.github.io/',
  },
];
export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="header">
        <img
          alt="logo"
          src="https://uet.vnu.edu.vn/wp-content/uploads/2017/02/logo2_new.png"
        />
        <p className="test">HANOI UNIVERSITY OF ENGINEERING AND TECHNOLOGY</p>
        <button className="ld-btn" type="link" href="https://uet.vnu.edu.vn/">
          <span
            style={{
              padding: 12,
              width: '100%',
            }}
          >
            Find Us
          </span>
        </button>
      </div>
      <div className="content">
        <div className="overlay">
          <h2 id="name">
            CLOUD APPLICATION SHOWING MULTI-AGENT SIMULATE USING GAMA PLATFORM
          </h2>
          <button className="ld-btn" type="link" href="/login">
            Learn More
          </button>
        </div>
      </div>

      <div className="text-content">
        <div className="ld-title">3 Trăm triệu người dùng</div>
      </div>

      <div className="content introWeb">
        <div className="descript-overlay">
          <h1 className="ld-title">WEBSITE FOR SIMULATING</h1>
          <h2 id="webContent">
            Sản phẩm từ dự án mô phỏng đa tác tử được phát triển bởi Mr Trường
            and Dr Phạm Linh từ những năm 2020 trải qua 3 năm nghiên cứu và phát
            triển đã cho ra thành quả như giờ.
          </h2>
        </div>
      </div>

      <div className="text-content">
        <div className="ld-title">3 Trăm triệu người dùng</div>
      </div>

      <div className="content intro-ai">
        <div className="descript-overlay">
          <h1 className="ld-title">Multi-Agent Based System</h1>
          <h2 id="webContent">
            Mô phỏng đa tác tử ngày nay, hệ thống đa tác tử hay còn gọi là mô
            phỏng đa tác tử (Multi-Agent Based System) [Drogoul & Gaudou, 2012]
            được sử dụng rộng rãi trong nhiều lĩnh vực khác nhau và nó dần thay
            thế cho các kỹ thuật mô phỏng vi mô, mô phỏng dựa trên hướng đối
            tượng hay dựa trên từng cá thể đã sử dụng trước đây. GIúp chúng ta
            có cái nhìn trực quan hóa hơn về từng cá thể và có thể sử dụng một
            cách dễ dàng với tất cả người dùng
          </h2>
        </div>
      </div>

      <div className="text-content">
        <div className="ld-title">Các công nghệ sử dụng</div>
        <div className="technology">
          {usedTech.map((item) => (
            <div className="tech-item">
              <img
                className="tech-img"
                alt={item.fullName}
                src={`./landing-page/${item.name}.png`}
                onClick={() => window.open(item.url, '_blank')}
              />
              {item.fullName}
            </div>
          ))}
        </div>
      </div>
      <div className="text-content">
        <h1
          style={{
            fontSize: 40,
            fontWeight: 600,
            textAlign: 'center',
          }}
        >
          DATA
        </h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://dim.mcusercontent.com/cs/3dde047e26aba42bc27abe601/images/400906a6-cbc3-5a8f-312c-647ab0a585cc.png?w=397&dpr=1" />
          <img src="https://dim.mcusercontent.com/cs/3dde047e26aba42bc27abe601/images/f6a33d8b-2fbb-925e-ed84-4223d41b8e45.png?w=397&dpr=1" />
          <img src="https://dim.mcusercontent.com/cs/3dde047e26aba42bc27abe601/images/59ad6448-bbeb-e72e-5be6-a35f1c84e6ea.png?w=397&dpr=1" />
        </div>
        <ul
          style={{
            marginTop: 20,
            marginLeft: '20%',
            alignContent: 'center',
            width: '60%',
          }}
        >
          <span style={{ fontSize: 20 }}>
            Dữ liệu được trích xuất từ 1 file tổng hợp 1 đàn lợn ở trang trại Le
            Magneraud (Charente-Maritime, Pháp)
          </span>
        </ul>
      </div>
      <PageFooter />
    </div>
  );
}
