import React from 'react';
import Header from '../../component/header/Header';
import './style.scss';
import { Chart } from 'react-charts';
export default function ChartCreatePage() {
  const data = [
    {
      label: 'React Charts',
      data: [
        {
          date: new Date(),
          stars: 23467238,
        },
      ],
    },
  ];
  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum) => datum.date,
    }),
    [],
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum) => datum.stars,
      },
    ],
    [],
  );
  return (
    <div className='chart-create-page'>
      Create your own chart
      <div className="row">
        <div className="col">Gey</div>
        <div className="col">
          {' '}
          <Chart
            options={{
              data,
              primaryAxis,
              secondaryAxes,
            }}
          />
        </div>
      </div>
    </div>
  );
}
