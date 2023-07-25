import React from "react";

function CategoryHeading(props) {
  return (
    <>
      <h6>{props.title}</h6>
      <hr className="mt-0 mb-0" />
      <ul className="list-group mb-3">{props.children}</ul>
    </>
  );
}

export default CategoryHeading;
