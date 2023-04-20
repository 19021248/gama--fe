import React from 'react';
import { Line, Column, Pie, G2 } from '@ant-design/charts';
import { Row, Col, Button, Form, Input, Progress } from 'antd';
import { useEffect, useState } from 'react';
import './style.scss';
export default function Dashboard() {
  const G = G2.getEngine('canvas');

  const allWidth = 500,
    allHeigh = 300;
  const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  const [firstChartData, setFirstChartData] = useState([
    {
      name: '1',
      value: 2,
    },
    {
      name: '2',
      value: 4,
    },
    {
      name: '3',
      value: 5,
    },
    {
      name: '4',
      value: 6,
    },
    {
      name: '5',
      value: 3,
    },
  ]);
  const firstChartConfig = {
    data: firstChartData,
    xField: 'name',
    yField: 'value',
    width: allWidth,
    height: allHeigh,
    autoFit: false,
    color: ({ label }) => {
      return randomColor();
    },
    label: {
      position: 'bottom',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };

  const [secondChartData, setSecondChartData] = useState([
    {
      percentage: 25,
      label: '',
    },
    {
      percentage: 35,
      label: '',
    },
  ]);
  const genderDataGraphConfig = {
    appendPadding: 10,
    data: secondChartData,
    angleField: 'percentage',
    colorField: 'label',
    color: ({ label }) => {
      return randomColor();
    },
    width: allWidth,
    height: allHeigh + 100,
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
  };

  const [thirdChartData, setThirdChartData] = useState([
    {
      name: '1',
      value: 2,
    },
    {
      name: '2',
      value: 5,
    },
    {
      name: '3',
      value: 6,
    },
    {
      name: '4',
      value: 3,
    },
    {
      name: '5',
      value: 4,
    },
  ]);
  const thirdChartConfig = {
    data: thirdChartData,
    xField: 'name',
    yField: 'value',
    width: allWidth,
    height: allHeigh,
    autoFit: false,
    color: ({ label }) => {
      return randomColor();
    },
    label: {
      position: 'bottom',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return (
    <div className="chart-overview-page">
      <Row>
        <h1>Chart overview </h1>
      </Row>
      <Row gutter={10}>
        <Col span={12}>Em yêu</Col>{' '}
        <Col span={12}>
          <Column {...firstChartConfig} conf loading={false} />
        </Col>
      </Row>{' '}
      <Row gutter={10}>
        <Col span={12}>Em yêu 2</Col>{' '}
        <Col span={12}>
          <Pie {...genderDataGraphConfig} conf loading={false} />
        </Col>
      </Row>{' '}
      <Row gutter={10}>
        <Col span={12}>Em yêu 3</Col>{' '}
        <Col span={12}>
          <Line {...thirdChartConfig} conf loading={false} />
        </Col>
      </Row>
    </div>
  );
}
