import React from 'react';
import './style.scss';
import { getItem } from '../../../utils';
import { deleteResearch } from '../../../service/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { researchCategory } from '../../../enum';
// preview mode
// 0 in research page
// 1 in news
// 2 in research
const ResearchView = ({
  research,
  changeList,
  setEditContent,
  setShowPostModal,
  users,
  previewMode,
}) => {
  const currentUser = getItem('user');
  const isAdmin = currentUser?.role === 1;

  return (
    <div
      className={`research-item ${
        /* previewMode === 0 ? 'preview-mode' : '' */ ''
      }
      
    }`}
    >
      <div className="approve-button">
        {(isAdmin || research.created_by === currentUser?.id) && (
          <React.Fragment>
            <div
              className="clickable-icon"
              onClick={() => {
                deleteResearch(research.id).finally(() => {
                  changeList();
                });
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </div>
            <div
              className="clickable-icon"
              onClick={() => {
                setEditContent(research);
                setShowPostModal(true);
              }}
            >
              <FontAwesomeIcon icon={faPencil} />
            </div>
          </React.Fragment>
        )}
      </div>
      <h2 className="title">{research.name} </h2>
      <div className="category">
        <span>Category: </span>
        <span
          style={{
            color: researchCategory.find(
              (category) => category.id === research.cate_id,
            )?.color,
          }}
        >
          {
            researchCategory.find(
              (category) => category.id === research.cate_id,
            )?.name
          }
        </span>
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: research.content }}
      ></div>
      <div className="author">
        <span>Author: </span>
        <span>
          {users.find((user) => user.id === research.created_by)?.name}
        </span>
      </div>
    </div>
  );
};
export default ResearchView;
