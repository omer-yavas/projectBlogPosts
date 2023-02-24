import React, { useState, useContext, useEffect } from 'react';
import { BlogsContext } from './blogsContext';
import { UiContext } from './uiContext';

interface Props {
  children: React.ReactNode;
}

type filteredPostsContextType =
  | []
  | { userId: number; id: number; title: string; body: string }[];

export const FilterContext = React.createContext<filteredPostsContextType>([]);

const FilterContextProvider: React.FC<Props> = (props) => {
  const allPosts = useContext(BlogsContext);
  const uiConfig = useContext(UiContext);

  const [filteredPosts, setFilteredPosts] = useState<filteredPostsContextType>(
    []
  );

  useEffect(() => {
    const filterResult = allPosts.filter((post) =>
      post.title.toLowerCase().includes(uiConfig.searchValue)
    );
    setFilteredPosts(filterResult);
  }, [uiConfig]);

  return (
    <FilterContext.Provider value={filteredPosts}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
