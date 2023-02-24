import React from 'react';
import { useState, useContext } from 'react';
import { BlogsContext } from '../context/blogsContext';
import { UiContext } from '../context/uiContext';
import { FilterContext } from '../context/filterContext';

const PostsToShow: React.FC = () => {
  const posts = useContext(BlogsContext);
  const uiConfig = useContext(UiContext);
  const filterResult = useContext(FilterContext);

  const [currentPage, setCurrentPage] = useState(1);

  const searchHandler = (event: React.FormEvent<HTMLInputElement>) => {
    uiConfig.changeSearchText((event.target as HTMLTextAreaElement).value);
  };

  return (
    <div>
      <p>Search</p>
      <input onChange={searchHandler} />
      <div>
        <p>All Posts</p>
        <div>{posts.map((item) => `--${item.title}`)}</div>
        <p>Filtered Posts</p>
        <div>{filterResult.map((item) => `--${item.title}`)}</div>
      </div>
    </div>
  );
};

export default PostsToShow;
