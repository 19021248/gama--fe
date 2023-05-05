import React from 'react';
import './style.scss';
const Paginator = ({ researchs, currentPage, setCurrentPage }) => {
  return (
    <div className="paginator middle">
      <div className="pagination">
        <ul>
          {researchs.map((_, index) => (
            <li
              key={index}
              className={index === currentPage ? 'active' : ''}
              onClick={() => setCurrentPage(index)}
            >
              <a href="#"></a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Paginator;
