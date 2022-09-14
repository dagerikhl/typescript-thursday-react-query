import { ChangeEvent } from "react";
import styles from "./Pagination.module.css";

export interface PaginationProps {
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

export const Pagination = ({
  page,
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
}: PaginationProps) => {
  const handleLimitChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLimit = +event.target.value;

    if (isNaN(newLimit)) {
      return;
    }

    setLimit(newLimit);
  };

  return (
    <div className={styles.container}>
      <button disabled={!canGoFirst} onClick={goFirst}>
        &lt;&lt;
      </button>
      <button disabled={!canGoPrev} onClick={goPrev}>
        &lt;
      </button>

      <div>{page}</div>

      <button disabled={!canGoNext} onClick={goNext}>
        &gt;
      </button>
      <button
        disabled={!canGoLast}
        title="Not implemented in this workshop"
        onClick={goLast}
      >
        &gt;&gt;
      </button>

      <select value={limit} onChange={handleLimitChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>
    </div>
  );
};
