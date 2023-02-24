import React, { useState } from 'react';

export const PaginationContext = React.createContext([]);

interface Props {
  children: React.ReactNode;
}

const PaginationContextProvider: React.FC<Props> = (props) => {
  const [page, setPage] = useState([]);
  return (
    <PaginationContext.Provider value={page}>
      {props.children}
    </PaginationContext.Provider>
  );
};

export default PaginationContextProvider;
