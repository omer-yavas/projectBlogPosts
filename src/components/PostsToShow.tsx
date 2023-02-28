import React from 'react';
import { useState, useContext } from 'react';
import { BlogsContext } from '../context/blogsContext';
import { UiContext } from '../context/uiContext';
import { FilterContext } from '../context/filterContext';
import Pagination from './Pagination';
import NoPosts from './NoPosts';
import { blogsContextType } from '../context/blogsContext';
import SinglePost from './SinglePost';
import './posts.scss';

let PageSize = 10;

const PostsToShow: React.FC = () => {
  const posts = useContext(BlogsContext);
  const uiConfig = useContext(UiContext);
  const filterResult = useContext(FilterContext);
  let currentData: blogsContextType = [];
  const [currentPage, setCurrentPage] = useState(1);

  const searchHandler = (event: React.FormEvent<HTMLInputElement>) => {
    uiConfig.changeSearchText((event.target as HTMLTextAreaElement).value);
  };

  if (filterResult.length > 0) {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    currentData = filterResult.slice(firstPageIndex, lastPageIndex);
    if (currentData.length === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <div>
      <h1>BlogCenter-ByYomer</h1>
      <h3>Best Blog of the Year!</h3>
      <input onChange={searchHandler} placeholder="Search..." />
      <div>
        <div>
          <div className="postsbox">
            {currentData.map((item) => (
              <SinglePost
                id={item.id}
                title={item.title}
                body={item.body}
                userId={item.userId}
              />
            ))}
          </div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={filterResult.length}
            pageSize={PageSize}
            siblingCount={1}
            onPageChange={(page: number) => setCurrentPage(page)}
          />
        </div>
        <div>{currentData.length === 0 ? <NoPosts /> : null}</div>
      </div>
    </div>
  );
};

export default PostsToShow;
