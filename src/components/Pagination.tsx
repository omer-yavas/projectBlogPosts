import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './UsePagination';
import './pagination.scss';

interface Props {
  onPageChange: Function;
  totalCount: number;
  siblingCount: number;
  currentPage: number;
  pageSize: number;
  className: string;
}

const Pagination: React.FC<Props> = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (
    currentPage === 0 ||
    (paginationRange !== undefined && paginationRange.length < 2)
  ) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage =
    paginationRange !== undefined
      ? paginationRange[paginationRange.length - 1]
      : null;
  return (
    <div className="pag-box">
      <ul
        className={classnames('pagination-container', {
          [className]: className,
        })}
      >
        {/* Left navigation arrow */}
        <li
          className={classnames('pagination-item', {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange !== undefined &&
          paginationRange.map((pageNumber) => {
            // If the pageItem is a DOT, render the DOTS unicode character
            if (pageNumber === DOTS) {
              return <li className="pagination-item dots">&#8230;</li>;
            }

            // Render our Page Pills
            return (
              <li
                className={classnames('pagination-item', {
                  selected: pageNumber === currentPage,
                })}
                key={pageNumber}
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </li>
            );
          })}
        {/*  Right Navigation arrow */}
        <li
          className={classnames('pagination-item', {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
