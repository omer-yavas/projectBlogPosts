import React, { useState } from 'react';

type uiContextType = { searchValue: string; changeSearchText: any };

interface Props {
  children: React.ReactNode;
}

export const UiContext = React.createContext<uiContextType>({
  searchValue: '',
  changeSearchText: null,
});

const UiContextProvider: React.FC<Props> = (props) => {
  const [searchText, setSearchText] = useState('');
  const changeSearchText = (text: string) => {
    setSearchText(text);
  };

  return (
    <UiContext.Provider value={{ searchValue: searchText, changeSearchText }}>
      {props.children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
