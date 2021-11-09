import ReactPaginate from "react-paginate";
import { PaginateStyle } from "../styles/PaginateStyle.style";

const Paginate = ({ onPageClick }) => {
 return (
  <PaginateStyle>
   <ReactPaginate
    breakLabel="..."
    nextLabel="Next >"
    previousLabel="< Previous"
    onPageChange={onPageClick}
    pageCount={250}
    pageRangeDisplayed={3}
    marginPagesDisplayed={2}
    containerClassName={"pagination"}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextClassName={"page-item"}
    nextLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    activeClassName={"active"}
   />
  </PaginateStyle>
 );
};

export default Paginate;
