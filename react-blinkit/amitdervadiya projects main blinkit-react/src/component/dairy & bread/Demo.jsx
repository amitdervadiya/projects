import React, { useEffect, useState } from "react";
import "./Dairy.css";
import { useDispatch, useSelector } from "react-redux";
import { apifetch, expenseadd } from "../../redux/FeatureSlice";
import { data } from "autoprefixer";


export default function Dairy() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAddedArray, setIsAddedArray] = useState(Array(data.length).fill(false));
  const [cartItems, setCartItems] = useState({});


  const [isOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };


  const handleAddClick = (index, item) => {
    const updatedState = [...isAddedArray];
    updatedState[index] = true; // Set the clicked product's state to true
    setIsAddedArray(updatedState);
    addDataToCart(item); // Add the item to the cart
  };

  const handleRemoveClick = (index, item) => {
    if (cartItems[index] === 1) {
      const updatedState = [...isAddedArray];
      updatedState[index] = false; // Reset the clicked product's state to false
      setIsAddedArray(updatedState);
    }
    removeItemFromCart(index, item.price); // Remove the item from the cart
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apifetch());
  }, []);
  const datamoney = useSelector((state) => {
    return state.productkey
  })
  const { data: fetchapi, status, error, totalPrice, totalItems } = useSelector(
    (state) => state.featurekey
  );

  const addDataToCart = (item) => {
    dispatch(expenseadd(item));
  };
  const sidebar = [
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/922_1643384380004.png",
      name: "Milk",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/953_1657599742631.png",
      name: "Bread",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/954_1680251634382.png",
      name: "Flakes & Kids Cereals",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/614_1680251576771.png",
      name: "Muesli & Granola",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/614_1680251576771.png",
      name: "Oats",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/923_1643384369257.png",
      name: "Paneer & Tofu",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/952_1657599773117.png",
      name: "Butter & More",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/2253_1694001802103.png",
      name: "Cheese",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1092_1643384330629.png",
      name: "Cream & Whitener",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/130_1643384401123.png",
      name: "Condensed Milk",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1140_1643384951835.png",
      name: "Vermicelli",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1295_1643445863467.png",
      name: "Poha, Daliya & Other Grains",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/644_1690196367179.png",
      name: "Peanut Butter",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1700735371138-2",
      name: "Energy Bars",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1184_1661407202472.png",
      name: "Lassi, Shakes & More",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1612_1666261789562.png",
      name: "Breakfast Mixes",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/609_1695366756108.png",
      name: "Honey & Chyawanprash",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1388_1643446601197.png",
      name: "Sausage, Salami & Ham",
    },
    {
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1425_1643613254262.png",
      name: "Batter",
    },
  ];
  const addItemToCart = (index, item) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[index] = (updatedCart[index] || 0) + 1; // Increment quantity
      return updatedCart;
    });
    dispatch(expenseadd(item.price)); // Update Redux state
  };

  const removeItemFromCart = (index, item) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[index] > 1) {
        updatedCart[index] -= 1; // Decrease quantity
      } else {
        delete updatedCart[index]; // Remove item if quantity is 0
      }
      return updatedCart;
    });
    dispatch(expenseadd(-item.price)); // Update Redux state
  };
  const calculateTotal = () =>
    Object.entries(cartItems).reduce(
      (total, [index, quantity]) => total + quantity * fetchapi[index]?.price,
      0
    );
  const calculateTotalItems = () =>
    Object.values(cartItems).reduce((sum, quantity) => sum + quantity, 0);

  return (
    <>
      <div className="w-full h-[86px] flex">
        <div className="logo h-full w-[9.2%]"></div>

        <div className="location h-full w-[16.8%] flex justify-center items-center">
          <span>
            <h1 className="delivery text-[18px]">Delivery in 8 minutes</h1>
            <font className="font-locate text-[14px]">
              <button>Rajkot, Gujarat, India &#x25BC;</button>
            </font>
          </span>
        </div>

        <div className="search-bar h-full w-[56.2%] flex justify-center items-center">
          <button className="search-btn h-[55%] w-full bg-gray-100 rounded-[10px] flex justify-start items-center ps-4">
            <div className="search-icon fa fa-search text-[20px]"></div>
          </button>
        </div>
        <div className="search-bar h-full w-[17.8%] flex justify-around items-center text-[20px]">
          <font>Login</font>
          <button className="btn-cart p-5 px-10 text-white" onClick={toggleOffCanvas}>
            {calculateTotal() > 0 ? `₹${calculateTotal()}` : "My Cart"}
          </button>
      

          <div
            className={`offcanvas bg-slate-400 h-full w-1/3 fixed top-0 right-0 transform transition-transform duration-300 z-10 ${isOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="p-5">
              <button
                className="text-white bg-red-500 p-2 rounded hover:bg-red-600"
                onClick={toggleOffCanvas}
              >
                Close
              </button>
              <h2 className="text-white text-xl font-bold mt-4">My Cart</h2>

              {/* Cart Items */}
              <div className="cart-items mt-4">
                {Object.keys(cartItems).length > 0 ? (
                  Object.entries(cartItems).map(([key, quantity]) => {
                    const product = fetchapi[key];
                    return (
                      <div
                        key={key}
                        className="cart-item flex justify-between items-center bg-white p-4 mb-2 rounded-md shadow-md"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-12 w-12 object-cover rounded-md"
                        />
                        <div className="flex-1 ml-4">
                          <h3 className="text-lg font-bold">{product.name}</h3>
                          <p className="text-gray-600">₹{product.price} x {quantity}</p>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="text-white bg-red-500 px-3 py-1 rounded-md"
                            onClick={() => removeItemFromCart(key, product)}
                          >
                            -
                          </button>
                          <span className="mx-2">{quantity}</span>
                          <button
                            className="text-white bg-green-500 px-3 py-1 rounded-md"
                            onClick={() => addItemToCart(key, product)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-gray-300">Your cart is empty</p>
                )}
              </div>

              {/* Cart Summary */}
              <div className="cart-summary mt-4 p-4 bg-white rounded-md shadow-md">
                <h3 className="text-lg font-bold">Summary</h3>
                {/* <p className="text-gray-600">Total Items: {totalItems}</p> */}
                <p className="text-gray-600">Total Price: ₹{calculateTotal()}</p>
              </div>
            </div>
          </div>




        </div>
      </div>


      <div className="h-[88vh] w-full border flex justify-center">
        <div className="mini h-full w-[65%] border flex justify-center">
          <div className="sidebar h-full w-[20%] border pt-3 overflow-y-scroll bg-slate-100">
            {sidebar.map((item, index) => (
              <div
                key={item.name || index}
                className={`card-side h-[70px] w-full flex items-center justify-start p-2 overflow-hidden ${selectedIndex === index ? "bg-green-100" : "bg-white"
                  }`}
                onClick={() => setSelectedIndex(index)}
              >
                <div className="h-full overflow-hidden">
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.name || "No description"}
                      className="h-[80px] mt-5 w-[50px] object-top mr-3"
                    />

                  )}
                </div>
                <h1 className="text-[15px] font-bold">{item.name || "No Name"}</h1>
              </div>
            ))}
          </div>

          <div className="main-content h-full w-[80%] py-3 border overflow-x-auto sidebar bg-[#f4f6fb]">
            {status === "loading" && (
              <p className="text-center mt-4 text-gray-500">Loading data...</p>
            )}
            {status === "failed" && (
              <p className="text-center mt-4 text-red-500">
                Error: {error || "Failed to fetch data"}
              </p>
            )}
            <div className="main-slider border flex flex-wrap w-[100%] border-none justify-evenly">
              {status === "succeeded" &&
                fetchapi.map((item, index) => (
                  item.category === "milk" && (
                    <div
                      key={index}
                      className="item-card my-2 border-[#e8e8e8] h-[400px] flex flex-col justify-between items-center p-2 border bg-white rounded-xl md:w-[49%] lg:w-[23%]"
                    >
                      <div className="imgs h-[120px]  w-full">
                        <img src={item.image} alt="" className="" />
                      </div>
                      <div className="product flex justify-between  flex-col items-start px-3 py-2 h-[120px]">
                        <div className="flex h-full justify-center items-center bg-[#f8f8f8]">
                          <img
                            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"
                            alt=""
                            className="w-[10px] h-[10px] "
                          />
                          <span className="text-sm font-bold">11 mins</span>
                        </div>
                        <div className="flex flex-col justify-start p-0 gap-2 items-start h-[68px] overflow-hidden">
                          <span className="text-2xl font-bold">{item.name}</span>
                          <span
                            style={{ fontSize: "14px" }}
                            className="text-[#666666]"
                          >
                            {item.weight}
                          </span>
                        </div>
                        <div className="product-price flex justify-between w-full items-center">
                          <span className="text-bold text-[#1f1f1f]">₹{item.price}</span>
                          {cartItems[index] ? (
                            <div className="flex items-center bg-[#318616] px-3 py-3 gap-1 rounded-md">
                              <button
                                className="text-white border border-[#318616] px-2 rounded-md text-md"
                                onClick={() => removeItemFromCart(index, item)}
                              >
                                -
                              </button>
                              <span className="text-white">{cartItems[index]}</span>
                              <button
                                className="border text-white border-[#318616] px-2 rounded-md text-md"
                                onClick={() => addItemToCart(index, item)}
                              >
                                +
                              </button>
                            </div>
                          ) : (
                            <button
                              className="text-[#318616] border border-[#318616] px-8 py-3 rounded-md text-md"
                              onClick={() => addItemToCart(index, item)}
                            >
                              ADD
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// slice.js
