import React from "react";

function List(props) {
  return (
    <li className="list-group-item text-capitalize">
      <strong>₹ {props.data.productPrice}</strong> - {props.data.productName}
      {props.children}
      <button className="btn btn-sm btn-outline-success float-end me-2 fw-semibold">
        {props.data.productQuantity}
      </button>
    </li>
  );
}

export default List;
