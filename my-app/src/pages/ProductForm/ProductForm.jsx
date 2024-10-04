import React, { useState, useRef } from "react";
import "./productform.css";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Endblock from "../../components/EndBlock/Endblock";
import Sidebar from "../../components/SideBarSeller/SidebarSeller";

import axios from "axios";

const ProductForm = () => {
  const name = useRef();
  const description = useRef();
  const price = useRef();
  const [file, setFile] = useState(null);
  const category = useRef();
  const quantity = useRef();
  const bid = useRef();
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name: name.current.value,
      description: description.current.value,
      price: price.current.value,
      quantity: quantity.current.value,
      bid: bid.current.value,
      category: category.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newProduct.image = fileName;
      try {
        await axios.post("http://localhost:5000/upload", data, {
          withCredentials: true,
        });
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/seller/addproduct",
        newProduct,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      window.location.href = "/seller/dashboard";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MainNavbar />

      <div className="formBody">
        <div className="formBackground">
          <div className="formBlock">
            <div className="formBlockLeft">
              <div className="ProductForm">
                <h1 className="ProductTitle">Create Product</h1>

                <form className="product-form" onSubmit={handleSubmit}>
                  <div className="product-box">
                    <div className="product-wrapper">
                      <label htmlFor="title" className="label">
                        Name
                      </label>
                      <input
                        type="text"
                        name="title"
                        className="input-value"
                        placeholder="Title..."
                        ref={name}
                        required
                      />
                    </div>
                  </div>
                  <div className="product-box">
                    <div className="product-wrapper">
                      <label htmlFor="price" className="label">
                        Price
                      </label>
                      <input
                        type="number"
                        name="price"
                        className="input-value"
                        placeholder="Price"
                        ref={price}
                        required
                      />
                    </div>
                  </div>
                  <div className="product-box">
                    <div className="product-wrapper">
                      <label htmlFor="description" className="label">
                        Description
                      </label>
                      <input
                        type="text"
                        name="description"
                        className="input-value"
                        placeholder="Description"
                        ref={description}
                        required
                      />
                    </div>
                  </div>
                  <div className="product-box">
                    <div className="product-wrapper">
                      <label htmlFor="bid" className="label">
                        Bid
                      </label>
                      <input
                        type="number"
                        name="bid"
                        className="input-value"
                        placeholder="Bid Amount"
                        ref={bid}
                        required
                      />
                    </div>
                  </div>
                  <div className="product-box">
                    <div className="product-wrapper">
                      <label htmlFor="category" className="label">
                        Category
                      </label>

                      <select
                        className="categoryBox"
                        name="category"
                        ref={category}
                      >
                        <option value="">Select a category</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Food">Food</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Sports">Sports</option>
                      </select>
                    </div>
                  </div>

                  <div className="product-box">
                    <div className="product-wrapper">
                      <label htmlFor="quantity" className="label">
                        Quantity
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        className="input-value"
                        placeholder="quantity"
                        ref={quantity}
                        required
                      />
                    </div>
                  </div>

                  <div className="product-box">
                    <label htmlFor="image" className="image-label">
                      Image
                    </label>
                    <input
                      type="file"
                      id="file"
                      accept=".png, .jpg, ,jpeg"
                      className="image-file"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                        setImagePreview(URL.createObjectURL(e.target.files[0]));
                      }}
                    />
                  </div>
                  <button className="submit-button">Submit</button>
                </form>
              </div>
            </div>
            <div className="formBlockRight">
              <div className="productImg">
                {imagePreview && <img src={imagePreview} alt="Product" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductForm;
