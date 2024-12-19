import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";

const Cart = () => {
  const { error, isLoading, Razorpay } = useRazorpay();

  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 })); // Increase quantity by 1
  };

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(addToCart({ ...item, quantity: -1 })); // Decrease quantity by 1
    } else {
      handleRemove(item.id); // Remove item if quantity becomes 0
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const totalprice = cartItems.reduce((total, item) => total + item.price * item.quantity,0);


  const handlePayment = () => {
    const options = {
      key: "rzp_test_5MuPFDwxbo7KTy",
      amount: 50000, // Amount in paise
      currency: "INR",
      name: "Test Company",
      description: "Test Transaction",
      handler: (response) => {
        console.log(response);
        alert("Payment Successful!");
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };


  return (
    <div className="container mt-5">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={item.id}
            >
              <div className="d-flex align-items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginRight: "20px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <p>
                    <b>Product Name:</b> {item.name}
                  </p>
                  <p>
                    <b>Price:</b> ₹{item.price}
                  </p>
                  <p>
                    <b>Quantity:</b>
                    <button
                      className="btn btn-sm btn-secondary mx-2"
                      onClick={() => handleDecreaseQuantity(item)}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="btn btn-sm btn-secondary mx-2"
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      +
                    </button>
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    <b>Total Price: ₹{item.quantity * item.price} </b>
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="btn btn-danger btn-md"
              >
                Remove
              </button>
            </li>
          ))}
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <h3>
              <b>Total Price:</b>
            </h3>
            <h3>
              <b>₹{totalprice}</b>
            </h3>
            <button className="btn btn-primary btn-md" onClick={handlePayment} disabled={isLoading}>
              <b> Pay Now </b>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Cart;
