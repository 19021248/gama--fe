import React, { useState, useEffect } from 'react';
import './style.scss';
import { Button } from 'antd';
import PageFooter from '../edit-page/page-footer/PageFooter';
export default function Introduction() {
  return (
    <div className="landing-page">
      <div className="header">
        <img
          alt="logo"
          src="https://uet.vnu.edu.vn/wp-content/uploads/2017/02/logo2_new.png"
        />
        <p className="test">HANOI UNIVERSITY OF ENGINEERING AND TECHNOLOGY</p>
        <Button
          style={{
            backgroundColor: '#161317',
            width: '120px',
            height: '60px',
            color: 'white',
            fontSize: '24px',
            fontWeight: '600',
            padding: '10px',
          }}
          type="link"
          href="https://uet.vnu.edu.vn/"
        >
          <span
            style={{
              padding: 12,
              width: '100%',
            }}
          >
            Find Us
          </span>
        </Button>
      </div>
      <div className="content">
        <div className="overlay">
          <h2 id="name">
            CLOUD APPLICATION SHOWING MULTI-AGENT SIMULATE USING GAMA PLATFORM
          </h2>
          <Button
            style={{
              backgroundColor: '#161317',
              width: '150',
              height: '60px',
              color: 'white',
              fontSize: '24px',
              fontWeight: '600',
              padding: '10px',
              minHeight: '60px',
            }}
            type="link"
            href="/login"
          >
            <span
              style={{
                width: '100%',
                paddingTop: 12,
              }}
            >
              Learn More
            </span>
          </Button>
        </div>
      </div>
      <div className="text-content introWeb">
        <h1 id="nameWeb">WEBSITE FOR SIMULATING</h1>
        <h2 id="webContent">
          Sản phẩm từ dự án mô phỏng đa tác tử được phát triển bởi Mr Trường and
          Dr Phạm Linh từ những năm 2020 trải qua 3 năm nghiên cứu và phát triển
          đã cho ra thành quả như giờ.
        </h2>
      </div>

      <img
        alt="lazada"
        src="https://uet.vnu.edu.vn/wp-content/uploads/2023/03/hb-lazada1.jpg"
        className="image"
      />

      <div className="text-content">
        <div className="two-col">
          <div className="col-item">
            <h1 style={{ fontSize: 34, fontWeight: 600 }}>ĐẶT VẤN ĐỀ</h1>
            <p style={{ fontSize: 20, color: 'black' }}>
              Mô phỏng đa tác tử ngày nay, hệ thống đa tác tử hay còn gọi là mô
              phỏng đa tác tử (Multi-Agent Based System) [Drogoul & Gaudou,
              2012] được sử dụng rộng rãi trong nhiều lĩnh vực khác nhau và nó
              dần thay thế cho các kỹ thuật mô phỏng vi mô, mô phỏng dựa trên
              hướng đối tượng hay dựa trên từng cá thể đã sử dụng trước đây.
              GIúp chúng ta có cái nhìn trực quan hóa hơn về từng cá thể và có
              thể sử dụng một cách dễ dàng với tất cả người dùng
            </p>
          </div>
          <img
            className="col-item"
            alt="abs"
            src="https://dim.mcusercontent.com/cs/3dde047e26aba42bc27abe601/images/5d2cf9de-b14a-f585-6e21-acdfe0b0be7b.png?rect=8%2C0%2C242%2C256&w=608&dpr=1"
          />
        </div>
      </div>

      <div className="text-content">
        <div className="two-col">
          <div className="col-item">
            <img
              alt="technology"
              src="https://dim.mcusercontent.com/cs/3dde047e26aba42bc27abe601/images/29129a01-132f-e419-da30-a8be6554c2bf.png?w=608&dpr=1"
            />
          </div>
          <div className="col-item">
            <h1 style={{ fontSize: 40, fontWeight: 600 }}>CÔNG NGHỆ SỬ DỤNG</h1>
            <ul>
              <li style={{ fontSize: 30, color: 'black', marginLeft: 50 }}>
                AWS, S3
              </li>
              <li style={{ fontSize: 30, color: 'black', marginLeft: 50 }}>
                REACT JS
              </li>
              <li style={{ fontSize: 30, color: 'black', marginLeft: 50 }}>
                MY SQL WORKBENCH
              </li>
              <li style={{ fontSize: 30, color: 'black', marginLeft: 50 }}>
                LARAVEL
              </li>
              <li style={{ fontSize: 30, color: 'black', marginLeft: 50 }}>
                GAMA PLATFORM
              </li>
            </ul>
          </div>
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
          <li style={{ fontSize: 20 }}>
            Dữ liệu được trích xuất từ 1 file tổng hợp 1 đàn lợn ở trang trại Le
            Magneraud (Charente-Maritime, Pháp)
          </li>
        </ul>
      </div>
      <PageFooter />
    </div>
  );
}
