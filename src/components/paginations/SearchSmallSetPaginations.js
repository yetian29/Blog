import React from 'react'
import ArrowLeftIcon from '../Icons/ArrowLeftIcon'
import ArrowRightIcon from '../Icons/ArrowRightIcon'
import { useState } from 'react'

function SmallSetPagination({ blog_search_page, term, count}) {

  const [activePage, setActivePage] = useState(1);
  const [listingsPerPage, setListingsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const visitPage = (page) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
    setActivePage(page);
    blog_search_page(term, page)
  };
  const previous_number = () => {
    if (currentPage !== 1) {
      window.scrollTo(0, 0);
      setCurrentPage(currentPage - 1);
      setActivePage(currentPage - 1);
      blog_search_page(term, currentPage - 1)


    }

  };
  const next_number = () => {
    if (currentPage !== Math.ceil(count/6)) {
      window.scrollTo(0, 0);
      setCurrentPage(currentPage + 1);
      setActivePage(currentPage + 1);
      blog_search_page(term, currentPage + 1)
    }
  };

  let numbers = [];
  const get_numbers = () => {
    let itemsPerPage = listingsPerPage;
    let pageNumber = 1;

    for (let i = 0; i < count; i+=itemsPerPage) {
      const page = pageNumber;
      let content = null;

       if (activePage === page) {
          content = (
              <div key={i} className={`hidden md:-mt-px md:flex`}>
                  <div className="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                  {pageNumber}
                  </div>
              </div>
          );
        }
        else {
          content = (
              <div key={i} onClick={() => {
                visitPage(page)
                }} className={`hidden md:-mt-px md:flex`}>
                <div className="cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                  {pageNumber}
                </div>
              </div>
          );
        }
         numbers.push(
          content
        );
        pageNumber++;
    }

    return numbers

  }
  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="-mt-px w-0 flex-1 flex">
        <button
          onClick={() => {previous_number()}}
          className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          <ArrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            Previous
        </button>
      </div>
      {get_numbers()}
      <div className="-mt-px w-0 flex-1 flex justify-end">
        <button
          onClick={() => {next_number()}}
          className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
        Next
          <ArrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
      </div>
    </nav>
  )
}

export default SmallSetPagination