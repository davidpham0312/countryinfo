import PageLink from '../PageLink/PageLink';
import './Pagination.css';

export type Props = {
  currentPage: number;
  lastPage: number;
  maxLength: number;
  setCurrentPage: (page: number) => void;
};

export default function Pagination({
  currentPage,
  lastPage,
  maxLength,
}: Props) {
  const baseUrl = 'https://example.com/posts';
  const pageNums = [1, 2, 3];

  return (
    <nav className="pagination" aria-label="Pagination">
      <PageLink
        href={`${baseUrl}/${currentPage - 1}`}
        disabled={currentPage === 1}
      >
        Previous
      </PageLink>
      {pageNums.map((pageNum, idx) => (
        <PageLink
          key={idx}
          href={`${baseUrl}/${pageNum}`}
          active={currentPage === pageNum}
          disabled={isNaN(pageNum)}
        >
          {pageNum}
        </PageLink>
      ))}
      <PageLink
        href={`${baseUrl}/${currentPage + 1}`}
        disabled={currentPage === lastPage}
      >
        Next
      </PageLink>
    </nav>
  );
}