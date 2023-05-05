import React from 'react';
import './style.scss';

const ResearchView = ({ research }) => {
  return (
    <div className="research-item">
      <div className="title">{research.name}</div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: research.content }}
      ></div>
    </div>
  );
};
export default ResearchView;
