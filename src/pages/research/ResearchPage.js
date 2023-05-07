import React, { useEffect, useState } from 'react';
import './style.scss';
import { deleteResearch, getAllUser, getResearchAll } from '../../service/api';
import ResearchPost from '../../component/research/topic-post/ResearchPost';
import Paginator from '../../component/paginator/Paginator';
import { getItem } from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { researchCategory } from '../../enum';
import ResearchView from '../../component/research/research-view/ResearchView';
export default function ResearchPage() {
  const [loading, setLoading] = React.useState(false);
  const [researchs, setResearchs] = React.useState([]);
  const [showPostmodal, setShowPostModal] = React.useState(false);
  const [refreshResearch, setRefreshResearch] = React.useState(false);
  const [editContent, setEditContent] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(0);
  const currentUser = getItem('user');
  const [searchText, setSearchText] = useState('');
  const [filteringCategory, setFilteringCategory] = useState(-1);
  const [fileredResearchs, setFilteredResearchs] = useState([]);
  const isAdmin = currentUser?.role === 1;
  const postFreely = isAdmin || currentUser?.role === 2;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUser().then((res) => {
      setUsers(res.data.users);
    });
  }, []);
  useEffect(() => {
    getResearchAll().then((res) => {
      setResearchs(res.data.researchs);
    });
  }, [refreshResearch]);
  useEffect(() => {
    setFilteredResearchs(
      researchs.filter((research) => {
        return (
          research.name.toLowerCase().includes(searchText.toLowerCase()) &&
          (filteringCategory === -1 || research.cate_id === filteringCategory)
        );
      }),
    );
    setCurrentPage(0);
    console.log({ searchText, filteringCategory });
  }, [searchText, filteringCategory, researchs]);
  const changeList = () => setRefreshResearch(!refreshResearch);
  return (
    <>
      <div className="research-page">
        <div className="page-navigator">
          <input
            className="main-input dimmed"
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select
            className="main-input dimmed"
            onChange={(e) => setFilteringCategory(+e.target.value)}
          >
            <option value={-1}>All</option>
            {researchCategory.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>
        <div class="research-content">
          <div className="research-header">
            <h1>Research and Development</h1>
          </div>
          <div className="research-body">
            {postFreely && (
              <div className="publish-research">
                <button
                  className="main-button"
                  onClick={() => setShowPostModal(true)}
                >
                  Publish Research
                </button>
              </div>
            )}
            {fileredResearchs
              .filter((_, index) => index === currentPage)
              .map((research, index) => (
                <ResearchView
                  research={research}
                  changeList={changeList}
                  setShowPostModal={setShowPostModal}
                  setEditContent={setEditContent}
                  users={users}
                  previewMode={0}
                />
              ))}
            {fileredResearchs?.length > 1 && (
              <Paginator
                length={fileredResearchs?.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </div>
        </div>
        <div></div>
      </div>

      <ResearchPost
        show={showPostmodal}
        setShow={setShowPostModal}
        changeList={changeList}
        postFreely={true}
        editContent={editContent}
        setEditContent={setEditContent}
      />
    </>
  );
}
