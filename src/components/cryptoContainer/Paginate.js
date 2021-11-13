import ReactPaginate from "react-paginate";
import { PaginateStyle } from "../styles/PaginateStyle.style";

const Paginate = ({ onPageClick }) => {
 return (
  <PaginateStyle>
   <ReactPaginate
    breakLabel={window.innerWidth > 600 ? "..." : "."}
    nextLabel={window.innerWidth > 600 ? "Next >" : ">>"}
    previousLabel={window.innerWidth > 600 ? "< Previous" : "<<"}
    onPageChange={onPageClick}
    pageCount={250}
    pageRangeDisplayed={window.innerWidth > 600 ? 3 : 2}
    marginPagesDisplayed={window.innerWidth > 600 ? 2 : 1}
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
