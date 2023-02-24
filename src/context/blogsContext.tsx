import React from 'react';
import { useState, useEffect } from 'react';

type blogsContextType =
  | []
  | { userId: number; id: number; title: string; body: string }[];

export const BlogsContext = React.createContext<blogsContextType>([]);

interface Props {
  children: React.ReactNode;
}

const BlogsContextProvider: React.FC<Props> = (props) => {
  const [posts, setPosts] = useState<blogsContextType>([]);

  useEffect(() => {
    const posts = fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return res.json();
      })
      .then(function (data) {
        setPosts(data);
        console.log(data);
      });
  }, []);
  return (
    <BlogsContext.Provider value={posts}>
      {posts.length > 0 ? props.children : null}
    </BlogsContext.Provider>
  );
};

export default BlogsContextProvider;
