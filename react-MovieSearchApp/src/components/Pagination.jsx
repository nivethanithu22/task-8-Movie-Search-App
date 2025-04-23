export default function Pagination({ currentPage, totalResults, onPageChange }) {
    const totalPages = Math.ceil(totalResults / 10);
    return (
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Prev
        </button>
        <span className="self-center text-white">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    );
  }