import React, { useRef } from "react";

function Form(props) {
  const productName = useRef();
  const productPrice = useRef();
  const productQuantity = useRef();
  const productCategory = useRef();
  function addProduct(e) {
    e.preventDefault();
    if (
      productName.current.value === "" ||
      productPrice.current.value === "" ||
      productQuantity.current.value === "" ||
      productCategory.current.value === ""
    ) {
      return;
    }
    let productObject = {
      productName: productName.current.value,
      productPrice: productPrice.current.value,
      productQuantity: productQuantity.current.value,
      productCategory: productCategory.current.value,
    };
    productObject.id = Math.floor(Math.random() * 100000).toString(36);
    if (localStorage.getItem("productObject") === null) {
      localStorage.setItem("productObject", JSON.stringify([productObject]));
    } else {
      let oldData = JSON.parse(localStorage.getItem("productObject"));
      oldData.push(productObject);
      localStorage.setItem("productObject", JSON.stringify(oldData));
    }
    props.onSubmit(JSON.parse(localStorage.getItem("productObject")));
    e.target.reset();
  }
  return (
    <div className="card">
      <div className="card-header">
        <h2>
          Product Details <i className="bi bi-box-seam"></i>
        </h2>
      </div>
      <div className="card-body">
        <form action="#" onSubmit={addProduct}>
          <div>
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input type="text" className="form-control" ref={productName} />
          </div>
          <div>
            <label htmlFor="productPrice" className="form-label">
              Product Price
            </label>
            <div className="input-group">
              <label className="input-group-text">₹</label>
              <input
                type="number"
                className="form-control"
                ref={productPrice}
                min={1}
              />
            </div>
          </div>
          <div>
            <label htmlFor="productQuantity" className="form-label">
              Product Quantity
            </label>
            <input
              type="number"
              className="form-control"
              ref={productQuantity}
              min={1}
            />
          </div>
          <div>
            <label htmlFor="productCategory" className="form-label">
              Product Category
            </label>
            <select
              name="productCategory"
              id="productCategory"
              className="form-select"
              ref={productCategory}
            >
              <option value="Food">Food</option>
              <option value="Clothing">Clothing</option>
              <option value="Home appliances">Home appliances</option>
              <option value="Mobile phones">Mobile phones</option>
              <option value="Skin Care">Skin Care</option>
            </select>
          </div>
          <div className="d-grid mt-3">
            <button className="btn btn-sm btn-warning fw-semibold">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
