import { useContext } from 'react';
import { FilterContext } from '../context/filterContext';

const Pagination = () => {
  const filterResult = useContext(FilterContext);

  if (filterResult.length > 0) {
    const pageTotal = Math.trunc((filterResult.length - 1) / 10) + 1;
  }
  return <div></div>;
};

export default Pagination;
