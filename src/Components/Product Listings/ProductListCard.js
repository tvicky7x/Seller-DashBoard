import React from "react";

function ProductListCard(props) {
  return (
    <div className="card mt-3">
      <div className="card-header">
        <h2>
          Product Listings <i className="bi bi-card-checklist"></i>
        </h2>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default ProductListCard;
