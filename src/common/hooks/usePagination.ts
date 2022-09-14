import { useCallback, useState } from "react";

interface PaginationProps {
  index: number;
  page: number;
  canGoFirst: boolean;
  canGoPrev: boolean;
  canGoNext: boolean;
  canGoLast: boolean;
  goFirst: () => void;
  goPrev: () => void;
  goNext: () => void;
  goLast: () => void;
  limit: number;
  setLimit: (limit: number) => void;
}

export const usePagination = (
  initialIndex = 0,
  initialLimit = 3,
  lastPage = 0
): PaginationProps => {
  const [index, setIndex] = useState(initialIndex);
  const [limit, setLimit] = useState(initialLimit);

  const canGoFirst = index !== 0;
  const canGoPrev = index !== 0;
  const canGoNext = true;
  const canGoLast = false;

  const goFirst = useCallback(() => {
    setIndex(0);
  }, []);

  const goPrev = useCallback(() => {
    setIndex((current) => current - 1);
  }, []);

  const goNext = useCallback(() => {
    setIndex((current) => current + 1);
  }, []);

  const goLast = useCallback(() => {
    setIndex(lastPage);
  }, [lastPage]);

  return {
    index,
    page: index + 1,
    canGoFirst,
    canGoPrev,
    canGoNext,
    canGoLast,
    goFirst,
    goPrev,
    goNext,
    goLast,
    limit,
    setLimit,
  };
};
