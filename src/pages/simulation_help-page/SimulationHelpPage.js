import React from 'react';
import './style.scss';
import { useHistory } from 'react-router-dom';
export default function SimulationHelpPage({ setChoose }) {
  const history = useHistory();
  return (
    <div className="simulation-edit-page">
      <div className="content">
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Number of simulations: Số lần bạn muốn chạy mô phỏng</span>
            <span>Stop condition: sẽ được update vào bản sau</span>
            <span>
              Experiment name: Bạn có thể tự đặt tên cho dự án mô phỏng của bạn
            </span>
            <span>Framerate: Bước nhảy mà bạn muốn cho mỗi lần mô phỏng</span>
            <span>
              Outouts: nơi bạn có thể tự customize số biểu đồ hiển thị
            </span>
            <span>Lưu ý: Step = Number of simulations / Frame rate</span>
          </div>
          <img
            src={`../../image/guide.png`}
            style={{ width: '50%', alignSelf: 'center', marginLeft: '10%' }}
            alt=""
          />
        </div>
        <div style={{ fontWeight: 'bold' }}>
          Here is a short vid introduce the procedure of simulation
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <video controls width={800}>
            <source
              src={
                'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div style={{ margin: 'auto' }}>
          <button
            onClick={null}
            className="main-button"
          >
            SIMULATE NOW
          </button>
        </div>
      </div>
    </div>
  );
}
