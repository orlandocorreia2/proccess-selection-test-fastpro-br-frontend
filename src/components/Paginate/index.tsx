import React, { useCallback, useMemo } from 'react';
import Pagination from 'react-js-pagination';
import { Container } from './styles';

export interface PaginationProps {
  active_page: number;
  per_page: number;
  total_items_count: number;
}

export interface PaginateProps {
  paginate: PaginationProps;
  setPaginate: React.Dispatch<React.SetStateAction<PaginationProps>>;
}

export const Paginate: React.FC<PaginateProps> = ({
  paginate,
  setPaginate,
}) => {
  const showPaginate = useMemo(() => {
    const { per_page, total_items_count } = paginate;

    return (
      per_page > 0 && total_items_count > 0 && total_items_count / per_page > 1
    );
  }, [paginate]);

  const handlePageChange = useCallback(
    page => {
      setPaginate({ ...paginate, active_page: page });
    },
    [paginate, setPaginate],
  );

  return (
    <Container>
      {showPaginate && (
        <Pagination
          activePage={paginate.active_page}
          itemsCountPerPage={paginate.per_page}
          totalItemsCount={paginate.total_items_count}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          prevPageText="<"
          nextPageText=">"
        />
      )}
    </Container>
  );
};
