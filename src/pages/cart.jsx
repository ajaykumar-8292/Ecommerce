import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import image from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";
import image4 from "../assets/image-4.png";
import image5 from "../assets/image-5.png";
import image6 from "../assets/image-6.png";
import image7 from "../assets/image-7.png";
import image8 from "../assets/image-8.png";
import image9 from "../assets/image-9.png";
import image10 from "../assets/image-10.png";
import image11 from "../assets/image-11.png";
import image12 from "../assets/image-12.png";
import image13 from "../assets/image-13.png";
import image14 from "../assets/image-14.png";
import image15 from "../assets/image-15.png";
import image16 from "../assets/image-16.png";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = existingCart.find(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = existingCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const updateQuantity = (id, change) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + change,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeProduct = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const products = [
    {
      id: 101,
      name: "Smartphone",
      image: image,
      price: 24999,
      oldPrice: 29999,
      rating: 4.5,
    },
    {
      id: 102,
      name: "Air Fryer",
      image: image2,
      price: 4999,
      oldPrice: 7999,
      rating: 4.2,
    },
    {
      id: 103,
      name: "Android Tablet",
      image: image3,
      price: 18999,
      oldPrice: 24999,
      rating: 4.4,
    },
    {
      id: 104,
      name: "Bluetooth Speaker",
      image: image4,
      price: 2199,
      oldPrice: 3499,
      rating: 4.1,
    },
    {
      id: 105,
      name: "Coffee Machine",
      image: image5,
      price: 3999,
      oldPrice: 5999,
      rating: 4.3,
    },
    {
      id: 106,
      name: "4K Camera",
      image: image6,
      price: 55999,
      oldPrice: 69999,
      rating: 4.5,
    },
    {
      id: 107,
      name: "Office Bag",
      image: image7,
      price: 1499,
      oldPrice: 2499,
      rating: 4.0,
    },
    {
      id: 108,
      name: "Smart Watch",
      image: image8,
      price: 2999,
      oldPrice: 4999,
      rating: 4.6,
    },
    {
      id: 109,
      name: "Monitor",
      image: image9,
      price: 14999,
      oldPrice: 18999,
      rating: 4.4,
    },
    {
      id: 110,
      name: "RGB Mouse",
      image: image10,
      price: 1299,
      oldPrice: 1999,
      rating: 4.3,
    },
    {
      id: 111,
      name: "Beauty Product",
      image: image11,
      price: 1099,
      oldPrice: 1999,
      rating: 4.5,
    },
    {
      id: 112,
      name: "Travel Bag",
      image: image12,
      price: 1999,
      oldPrice: 2999,
      rating: 4.1,
    },
    {
      id: 113,
      name: "Keyboard",
      image: image13,
      price: 1699,
      oldPrice: 2499,
      rating: 4.3,
    },
    {
      id: 114,
      name: "Men Jacket",
      image: image14,
      price: 2999,
      oldPrice: 4999,
      rating: 4.2,
    },
    {
      id: 115,
      name: "Men T-Shirt",
      image: image15,
      price: 899,
      oldPrice: 1499,
      rating: 4.0,
    },
    {
      id: 116,
      name: "Office Chair",
      image: image16,
      price: 8999,
      oldPrice: 12999,
      rating: 4.4,
    },
  ];

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      {/* CART */}
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          My Cart
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-xl p-10 text-center shadow">
            <h2 className="text-2xl font-bold">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some products to your cart.
            </p>

            <Link
              to="/products"
              className="inline-block mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">

            {/* CART PRODUCTS */}
            <div className="lg:col-span-2 space-y-4">

              {cart.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow p-4"
                >
                  <div className="flex flex-col md:flex-row gap-5">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full md:w-40 h-40 object-contain"
                    />

                    <div className="flex-1">

                      <h2 className="text-xl font-bold">
                        {product.name}
                      </h2>

                      <p className="text-gray-500 mt-2">
                        {product.description}
                      </p>

                      <p className="text-green-600 font-bold mt-2">
                        ₹{product.price.toLocaleString("en-IN")}
                      </p>

                      <div className="flex items-center gap-3 mt-4">

                        <button
                          onClick={() =>
                            updateQuantity(product.id, -1)
                          }
                          className="bg-gray-200 px-4 py-2 rounded"
                        >
                          -
                        </button>

                        <span className="font-bold">
                          {product.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(product.id, 1)
                          }
                          className="bg-gray-200 px-4 py-2 rounded"
                        >
                          +
                        </button>

                      </div>

                      <p className="font-bold mt-3">
                        Total: ₹
                        {(
                          product.price * product.quantity
                        ).toLocaleString("en-IN")}
                      </p>

                      <button
                        onClick={() =>
                          removeProduct(product.id)
                        }
                        className="text-red-500 mt-3"
                      >
                        Remove
                      </button>

                    </div>
                  </div>
                </div>
              ))}

            </div>

            {/* ORDER SUMMARY */}
            <div className="bg-white rounded-xl shadow p-6 h-fit">

              <h2 className="text-2xl font-bold mb-5">
                Order Summary
              </h2>

              <div className="flex justify-between mb-3">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Subtotal</span>
                <span>
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Delivery</span>
                <span className="text-green-600">
                  FREE
                </span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>

              <Link
  to="/checkout"
  className="block w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-lg font-bold mt-6 text-center"
>
  Place Order
</Link>

            </div>
          </div>
        )}

        {/* MANY PRODUCT CARDS */}
        <div className="mt-12">

          <h2 className="text-3xl font-bold mb-6">
            More Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md p-5 hover:-translate-y-2 hover:shadow-xl transition"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain"
                />

                <div className="mt-4">

                  <p className="text-yellow-500 font-semibold">
                    ⭐ {product.rating}
                  </p>

                  <h3 className="text-xl font-bold mt-2">
                    {product.name}
                  </h3>

                  <div className="flex gap-2 items-center mt-3">

                    <span className="text-xl font-bold">
                      ₹{product.price.toLocaleString("en-IN")}
                    </span>

                    <span className="text-gray-400 line-through">
                      ₹{product.oldPrice.toLocaleString("en-IN")}
                    </span>

                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-lg font-bold mt-4 cursor-pointer"
                  >
                    Add to Cart
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Cart;