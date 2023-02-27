import React from 'react';
import './posts.scss';
import { blogsContextType } from '../context/blogsContext';

interface test {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const SinglePost: React.FC<test> = ({ userId, id, title, body }) => {
  return (
    <div className="singlepostbox">
      <div className="title">{title}</div>
      <div className="body">{body}</div>
    </div>
  );
};

export default SinglePost;
