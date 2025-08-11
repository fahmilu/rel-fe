import React from 'react';

const Pagination = ({ 
    currentPage, 
    totalPages, 
    onPageChange, 
    itemsPerPage, 
    totalItems,
    className = ""
}) => {
    // Generate page numbers for pagination
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;
        
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }
        }
        
        return pages;
    };

    // Handle page change
    const handlePageChange = (page) => {
        if (typeof page === 'number' && page !== currentPage) {
            onPageChange(page);
            // Scroll to top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    if (totalPages <= 1) return null;

    return (
        <div className={`pagination ${className}`}>
            {/* Previous Button */}
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="pagination-button"
                aria-label="Go to previous page"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <mask id="mask0_2031_481" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}>
                        <rect width={24} height={24} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_2031_481)">
                        <path d="M10.8 12L14.7 15.9C14.8834 16.0834 14.975 16.3167 14.975 16.6C14.975 16.8834 14.8834 17.1167 14.7 17.3C14.5167 17.4834 14.2834 17.575 14 17.575C13.7167 17.575 13.4834 17.4834 13.3 17.3L8.70005 12.7C8.60005 12.6 8.52922 12.4917 8.48755 12.375C8.44588 12.2584 8.42505 12.1334 8.42505 12C8.42505 11.8667 8.44588 11.7417 8.48755 11.625C8.52922 11.5084 8.60005 11.4 8.70005 11.3L13.3 6.70005C13.4834 6.51672 13.7167 6.42505 14 6.42505C14.2834 6.42505 14.5167 6.51672 14.7 6.70005C14.8834 6.88338 14.975 7.11672 14.975 7.40005C14.975 7.68338 14.8834 7.91672 14.7 8.10005L10.8 12Z" fill="#454545" />
                    </g>
                </svg>
            </button>
            
            {/* Page Numbers */}
            <div className="pagination-page-numbers">
                {getPageNumbers().map((page, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(page)}
                        disabled={page === '...'}
                        className={`page-number ${
                            page === currentPage
                                ? 'current'
                                : page === '...'
                                ? 'ellipsis'
                                : ''
                        }`}
                        aria-label={page === '...' ? undefined : `Go to page ${page}`}
                        aria-current={page === currentPage ? 'page' : undefined}
                    >
                        {page}
                    </button>
                ))}
            </div>
            
            {/* Next Button */}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="pagination-button"
                aria-label="Go to next page"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <mask id="mask0_2031_497" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={24} height={24}>
                        <rect width={24} height={24} fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_2031_497)">
                        <path d="M12.6 12L8.70005 8.10005C8.51672 7.91672 8.42505 7.68338 8.42505 7.40005C8.42505 7.11672 8.51672 6.88338 8.70005 6.70005C8.88338 6.51672 9.11672 6.42505 9.40005 6.42505C9.68338 6.42505 9.91672 6.51672 10.1 6.70005L14.7 11.3C14.8 11.4 14.8709 11.5084 14.9125 11.625C14.9542 11.7417 14.975 11.8667 14.975 12C14.975 12.1334 14.9542 12.2584 14.9125 12.375C14.8709 12.4917 14.8 12.6 14.7 12.7L10.1 17.3C9.91672 17.4834 9.68338 17.575 9.40005 17.575C9.11672 17.575 8.88338 17.4834 8.70005 17.3C8.51672 17.1167 8.42505 16.8834 8.42505 16.6C8.42505 16.3167 8.51672 16.0834 8.70005 15.9L12.6 12Z" fill="#454545" />
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default Pagination;
