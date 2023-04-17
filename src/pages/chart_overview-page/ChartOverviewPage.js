import React from 'react';
import Header from '../../component/header/Header';

export default function ChartOverviewPage() {
  return (
    <div
      style={{
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <h1 style={{ fontSize: 50, fontWeight: 600, textAlign: 'center' }}>
      CHART OVERVIEW 
      </h1>
      <img
        src="https://i.imgur.com/2m61koy.jpg"
        style={{ width: '80%', alignSelf: 'center', marginLeft: '10%' }}
        alt=''
      />
      <img
        src="https://i.imgur.com/lWfaVcV.jpg"
        style={{ width: '80%', alignSelf: 'center', marginLeft: '10%' }}
        alt=''
      />
      <img
        src="https://i.imgur.com/QBk3gP4.jpg"
        style={{ width: '80%', alignSelf: 'center', marginLeft: '10%' }}
        alt=''
      />
      <img
        src="https://i.imgur.com/l3npGrr.jpg"
        style={{ width: '80%', alignSelf: 'center', marginLeft: '10%' }}
        alt=''
      />
    </div>
  );
}
