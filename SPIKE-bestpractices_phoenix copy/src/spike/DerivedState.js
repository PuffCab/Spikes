import React, { useState } from "react";

function DerivedState() {
  const [cart, setCart] = useState([
    { id: 1, name: "cola", units: 2 },
    { id: 2, name: "chips", units: 3 },
    { id: 3, name: "water", units: 1 },
  ]);

  // const [selectedItem, setSelectedItem] = useState({});
  const [selectedProductId, setselectedProductId] = useState(null);

  const increment = (id) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, units: item.units + 1 };
        } else {
          return item;
        }
      });
    });
  };

  const selectedProduct = cart.find((cartProduct) => {
    return cartProduct.id === selectedProductId;
  });

  const handleChooseItem = (id) => {
    // const item = cart.find((product) => {
    //   return product.id === id;
    // });
    // setSelectedItem(item);
    setselectedProductId(id);
  };

  return (
    <div className="container">
      <h2>Derived State</h2>

      <h4>All items</h4>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <span>
              {item.name}
              <button
                onClick={() => {
                  handleChooseItem(item.id);
                }}
              >
                select
              </button>
            </span>
            <div className="quantity">
              <button>-</button>
              <span> {item.units}</span>
              <button
                onClick={() => {
                  increment(item.id);
                }}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
      <h4>Selected Product</h4>
      <div className="selected-product">
        <p>{selectedProduct?.name}</p>
        <p>{selectedProduct?.units}</p>
      </div>
    </div>
  );
}

export default DerivedState;
