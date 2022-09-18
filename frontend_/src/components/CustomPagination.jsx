import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const CustomPagination = ({ postsPerPage, totalPosts, currentPageState }) => {
    function handleFirstClick(e) {
        currentPageState.setCurrentPage(1);
        return;
    }

    function handlePrevClick(e) {
        e.preventDefault();
        if(currentPageState.currentPage == 1){
            return;
        }
        currentPageState.setCurrentPage(currentPageState.currentPage-1);
    }

    function handleNextClick(e) {
        e.preventDefault();
        if(currentPageState.currentPage == pageNumbers.length){
            return;
        }
        currentPageState.setCurrentPage(currentPageState.currentPage+1);
    }

    function handleLastClick(e) {
        e.preventDefault();
        currentPageState.setCurrentPage(pageNumbers.length);
        return;
    }

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination>
            <Pagination.First onClick={handleFirstClick} />
            <Pagination.Prev onClick={handlePrevClick} />
            <Pagination.Item active>{currentPageState.currentPage}</Pagination.Item>
            <Pagination.Next onClick={handleNextClick} />
            <Pagination.Last onClick={handleLastClick} />
            <div>Showing page {currentPageState.currentPage} of {pageNumbers[pageNumbers.length - 1]}</div>
        </Pagination>
    );
};

export default CustomPagination;