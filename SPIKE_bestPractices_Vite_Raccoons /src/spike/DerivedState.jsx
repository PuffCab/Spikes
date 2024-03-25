import React, { useState } from "react";

function DerivedState() {
  const [cart, setCart] = useState([
    { id: 1, name: "cola", units: 2 },
    { id: 2, name: "chips", units: 3 },
    { id: 3, name: "water", units: 1 },
  ]);

  // const [selectedItem, setSelectedItem] = useState({});
  const [selectedItemId, setselectedItemId] = useState(null);

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

  const product = cart.find((item) => {
    return item.id === selectedItemId;
  });

  const handleChooseItem = (id) => {
    console.log("id :>> ", id);
    // const item = cart.find((product) => {
    //   return product.id === id;
    // });
    // setSelectedItem(item);
    setselectedItemId(id);
  };

  return (
    <div>
      <h2>La Deriva, by Vetusta Morlaz (derived State)</h2>
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
      <div>
        {/* <p>{selectedItem.name}</p>
        <p>{selectedItem.units}</p> */}
        <p>{product?.name}</p>
        <p>{product?.units}</p>
      </div>
    </div>
  );
}

export default DerivedState;
