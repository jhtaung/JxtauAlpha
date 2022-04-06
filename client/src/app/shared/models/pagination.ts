export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export class PaginatedResult<T> {
  result!: T;
  pagination!: Pagination;
}

export class PaginationParams {
  pageNumber: number = 1;
  pageSize: number = 10;
  orderBy: string = "";
}
