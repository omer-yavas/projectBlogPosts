import React from 'react';
import DarkMode from './components/DarkMode';
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
            <DarkMode />
          </FilterContextProvider>
        </UiContextProvider>
      </BlogsContextProvider>
      {/*
        
      */}
    </div>
  );
}

export default App;
