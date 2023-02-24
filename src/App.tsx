import React from 'react';
import './App.css';
import PostsToShow from './components/PostsToShow';
import BlogsContextProvider from './context/blogsContext';
import FilterContextProvider from './context/filterContext';
import UiContextProvider from './context/uiContext';

function App() {
  return (
    <div>
      <BlogsContextProvider>
        <UiContextProvider>
          <FilterContextProvider>
            <PostsToShow></PostsToShow>
          </FilterContextProvider>
        </UiContextProvider>
      </BlogsContextProvider>
      {/*
        
      */}
    </div>
  );
}

export default App;
