import classes from "./cartproductlist.module.css";
import Cartproductitem from "../CartProductItem/Cartproductitem";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

function Cartproductlist(props) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className={classes.listCover} key={props.id}>
        <h1>{props.title}</h1>
        <ul className={classes.list}>
          {currentItems.map((p) => (
            <Cartproductitem
              id={p._id}
              image={p.image}
              productName={p.name}
              price={p.price}
              description={p.description}
              seller={p.seller._id}
            />
          ))}
        </ul>
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={classes.pagination}
        pageLinkClassName={classes.pagenum}
        previousLinkClassName={classes.pagenum}
        nextLinkClassName={classes.pagenum}
        activeLinkClassName={classes.active}
      />
    </>
  );
}

export default Cartproductlist;
