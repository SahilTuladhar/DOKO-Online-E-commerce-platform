import React, { useState, useRef } from "react";
import "./update.css";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Endblock from "../../components/EndBlock/Endblock";
import Sidebar from "../../components/SideBarSeller/SidebarSeller";
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdateForm() {
  const name = useRef();
  const description = useRef();
  const price = useRef();
  const [file, setFile] = useState(null);
  const category = useRef();
  const quantity = useRef();
  const bid = useRef();
  const [imagePreview, setImagePreview] = useState(null);
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateProduct = {};
    if (name.current.value) {
      updateProduct.name = name.current.value;
    }
    if (description.current.value) {
      updateProduct.description = description.current.value;
    }
    if (price.current.value) {
      updateProduct.price = price.current.value;
    }
    if (quantity.current.value) {
      updateProduct.quantity = quantity.current.value;
    }
    if (bid.current.value) {
      updateProduct.bid = bid.current.value;
    }
    if (category.current.value) {
      updateProduct.category = category.current.value;
    }

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      updateProduct.image = fileName;
      try {
        await axios.post("http://localhost:5000/upload", data, {
          withCredentials: true,
        });
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const response = await axios.patch(
        `http://localhost:5000/seller/product/update/${id}`,
        updateProduct,
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
                <h1 className="ProductTitle">Update Product</h1>
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
                        placeholder="Bid Ammount"
                        ref={bid}
                      />
                    </div>
                  </div>
                  <div className="product-box">
                    <div className="product-wrapper">
                      <label htmlFor="category" className="label">
                        Category
                      </label>

                      <select name="category" ref={category}>
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
                      />
                    </div>
                  </div>

                  <div className="product-box">
                    <label htmlFor="image" className="label">
                      Image
                    </label>
                    <input
                      type="file"
                      id="file"
                      accept=".png, .jpg, ,jpeg"
                      className="input-file"
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
}

export default UpdateForm;
