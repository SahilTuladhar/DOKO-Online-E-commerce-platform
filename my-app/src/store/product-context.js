import { createContext } from "react";

const ProductContext = createContext({
  productClicked: {},
});

export function ProductContextProvider(props) {

 const userProduct = {};

 const context = {
  productClicked: userProduct,
 };

  return (
    <ProductContext.Provider value={context}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
