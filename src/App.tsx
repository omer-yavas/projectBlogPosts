import React from 'react';
import './App.scss';
import PostsToShow from './components/PostsToShow';
import BlogsContextProvider from './context/blogsContext';
import FilterContextProvider from './context/filterContext';
import UiContextProvider from './context/uiContext';

function App() {
  return (
    <div className="app">
      <BlogsContextProvider>
        <UiContextProvider>
          <FilterContextProvider>
            <PostsToShow />
          </FilterContextProvider>
        </UiContextProvider>
      </BlogsContextProvider>
      {/*
        
      */}
    </div>
  );
}

export default App;
