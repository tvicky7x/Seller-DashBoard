import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import "./App.css";
import ProductListCard from "./Components/Product Listings/ProductListCard";
import CategoryHeading from "./Components/Category/CategoryHeading";
import { useEffect, useState } from "react";
import List from "./Components/Category/List";

function App() {
  const category = [
    "Food",
    "Clothing",
    "Home appliances",
    "Mobile phones",
    "Skin Care",
  ];

  const [productObject, setProduct] = useState([]);

  function addProduct(data) {
    setProduct(data);
  }
  useEffect(() => {
    if (localStorage.getItem("productObject") === null) {
      setProduct([]);
    } else {
      setProduct(JSON.parse(localStorage.getItem("productObject")));
    }
  }, []);

  function deleteProduct(id) {
    localStorage.setItem(
      "productObject",
      JSON.stringify(
        productObject.filter((item) => {
          return item.id !== id;
        })
      )
    );
    setProduct(
      productObject.filter((item) => {
        return item.id !== id;
      })
    );
  }

  return (
    <>
      <Header></Header>
      <div className="container pb-4 pt-4 size">
        <Form onSubmit={addProduct}></Form>
        <ProductListCard>
          {category.map((cat) => {
            return (
              <CategoryHeading title={cat} key={cat}>
                {productObject
                  .filter((item) => {
                    return item.productCategory === cat;
                  })
                  .map((item) => {
                    return (
                      <List key={item.id} data={item}>
                        <button
                          className="btn btn-sm btn-danger float-end fw-bold"
                          onClick={() => {
                            deleteProduct(item.id);
                          }}
                        >
                          X
                        </button>
                      </List>
                    );
                  })}
              </CategoryHeading>
            );
          })}
        </ProductListCard>
      </div>
    </>
  );
}

export default App;
