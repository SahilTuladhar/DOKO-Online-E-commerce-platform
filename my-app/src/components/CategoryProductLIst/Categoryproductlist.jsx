import classes from "./categoryproductlist.module.css";
import Productitem from "../ProductItem/Productitem";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";

function Categoryproductlist(props) {
  const Id = props.category;

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
      <div className={classes.listCover}>
        <h1>{props.categoryTitle}</h1>
        <hr />

        <ul className={classes.list}>
          {props.data.map((p) => {
            if (p.category === Id) {
              return (
                <Productitem
                  image={p.image}
                  productName={p.name}
                  price={p.price}
                />
              );
            }
          })}
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

export default Categoryproductlist;

// import classes from "./categoryproductlist.module.css";
// import Productitem from "../ProductItemSeller/ProductitemSeller";

// function Categoryproductlist(props) {
//   const Id = props.category;
//   return (
//     <div className={classes.listCover}>
//       <h1>{props.categoryTitle}</h1>
//       <hr />

//       <ul className={classes.list}>
//         {props.product.map((p) => {
//           if (p.categoryID === Id) {
//             return (
//               <Productitem
//                 image={p.image}
//                 productName={p.productName}
//                 price={p.price}
//               />
//             );
//           }
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Categoryproductlist;
