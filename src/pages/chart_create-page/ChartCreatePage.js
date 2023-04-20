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
  const ChartDataCreateItem = (
    data,
    setData,
    label1,
    label2,
    setLabel1 = null,
    setLabel2 = null,
  ) => {
    return (
      <div className="chart-data-create">
        <div className="chart-row">
          <div>{label1}</div>
          <div>{label2}</div>
        </div>
        {data.map((el, index) =>
          index === 0 ? (
            <></>
          ) : (
            <div className="chart-row">
              <Input
                default={el.name}
                onChange={(e) => {
                  let newData = [...data];
                  newData[index].name = e.target.value;
                  setData(newData);
                }}
              />
              <Input
                default={el.value}
                onChange={(e) => {
                  let newData = [...data];
                  newData[index].value = e.target.value;
                  setData(newData);
                }}
              />
            </div>
          ),
        )}
        <Button
          onClick={() => {
            let newData = [...data];
            newData.push({ name: '', value: '' });
            setData(newData);
          }}
        >
          Add new field
        </Button>
      </div>
    );
  };
  const [firstChartData, setFirstChartData] = useState([]);
  const [firstChartLabel1, setFirstChartLabel1] = useState('Goal');
  const [firstChartLabel2, setFirstChartLabel2] = useState('Time');

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
    meta: {
      name: {
        alias: firstChartLabel1,
      },
      value: {
        alias: firstChartLabel2,
      },
    },
  };

  const [secondChartData, setSecondChartData] = useState([]);
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

  const [thirdChartData, setThirdChartData] = useState([]);
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
    <div className="chart-create-page">
      <Row>
        <h1>Chart overview </h1>
      </Row>
      <Row gutter={10}>
        <Col span={12}>
          {ChartDataCreateItem(
            firstChartData,
            setFirstChartData,
            firstChartLabel1,
            firstChartLabel2,
            setFirstChartLabel1,
            setFirstChartLabel2,
          )}
        </Col>{' '}
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
