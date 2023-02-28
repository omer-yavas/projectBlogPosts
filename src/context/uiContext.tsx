import React, { useState } from 'react';

type uiContextType = {
  searchValue: string;
  changeSearchText: any;
  darkTheme: boolean;
  changeTheme: any;
};

interface Props {
  children: React.ReactNode;
}

export const UiContext = React.createContext<uiContextType>({
  searchValue: '',
  changeSearchText: null,
  darkTheme: false,
  changeTheme: null,
});

const UiContextProvider: React.FC<Props> = (props) => {
  const [searchText, setSearchText] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);

  const changeSearchText = (text: string) => {
    setSearchText(text.toLowerCase());
  };

  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <UiContext.Provider
      value={{
        searchValue: searchText,
        changeSearchText,
        darkTheme,
        changeTheme,
      }}
    >
      {props.children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
