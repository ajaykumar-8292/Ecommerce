import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import image from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";
import image4 from "../assets/image-4.png";
import image6 from "../assets/image-6.png";
import image7 from "../assets/image-7.png";



function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

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

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (

     <>
    <div className=" bg-gray-100 px-4 py-10">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-2 text-3xl font-bold">
          Shopping Cart
        </h1>

        <p className="mb-8 text-gray-600">
          {totalItems} Product(s) in your cart
        </p>

        {cart.length === 0 ? (
          <div className="rounded-lg bg-white p-10 text-center shadow">
            <h2 className="mb-3 text-2xl font-bold">
              🛒 Your Cart is Empty
            </h2>

            <p className="mb-6 text-gray-500">
              Add some products to your cart.
            </p>

            <Link
              to="/products"
              className="inline-block rounded-lg bg-yellow-400 px-6 py-3 font-semibold hover:bg-yellow-500"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

            {/* PRODUCTS */}
            <div className="space-y-4 lg:col-span-2">

              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow sm:flex-row sm:items-center"
                >

                  {/* IMAGE */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 w-full object-contain sm:w-32"
                  />

                  {/* DETAILS */}
                  <div className="flex-1">

                    <h2 className="text-xl font-bold">
                      {product.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p>

                    <p className="mt-2 text-lg font-bold">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>

                    {/* QUANTITY */}
                    <div className="mt-3 flex items-center gap-3">

                      <button
                        onClick={() =>
                          updateQuantity(product.id, -1)
                        }
                        className="h-8 w-8 rounded border border-black"
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
                        className="h-8 w-8 rounded border border-black"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* PRODUCT TOTAL */}
                  <div className="text-right">

                    <p className="text-xl font-bold">
                      ₹
                      {(
                        product.price * product.quantity
                      ).toLocaleString("en-IN")}
                    </p>

                    <button
                      onClick={() =>
                        removeProduct(product.id)
                      }
                      className="mt-3 text-red-500 hover:underline"
                    >
                      Remove
                    </button>

                  </div>

                </div>
              ))}

            </div>

            {/* ORDER SUMMARY */}
            <div className="h-fit rounded-lg bg-white p-6 shadow">

              <h2 className="mb-5 border-b pb-4 text-2xl font-bold">
                Order Summary
              </h2>

              <div className="flex justify-between py-2">
                <span>Total Products</span>
                <span className="font-semibold">
                  {totalItems}
                </span>
              </div>

              <div className="flex justify-between py-2">
                <span>Subtotal</span>
                <span>
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="my-4 border-t"></div>

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
              </div>

              <button className="mt-6 w-full rounded-lg bg-yellow-400 py-3 font-bold hover:bg-yellow-500">
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="mt-3 block text-center text-blue-600 hover:underline"
              >
                Continue Shopping
              </Link>

            </div>

          </div>
        )}

      </div>
    </div>


<div className='w-full   p-4  grid gap-6 sm:grid-cols-2 lg:grid-cols-6 '>

 <div className="rounded-xl bg-white p-4 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  w-full md:w-60  ">
            <div className=" ">
                <img src={image} alt="image-1" className="w-full" />
                 <p className=" pt-5">4.5⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Mobiles</h3>
            <p className="mt-2 text-gray-500 ">
              5G Smartphone
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">17%</span>
            <p className="line-through"> 29,999</p> 
            <span className="font-bold">  ₹24,999</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Add to Cart</button>
          </div>


          <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl md:w-60 w-full">
            <div className=" ">
                <img src={image2} alt="image2" className="w-full" />
                 <p className=" pt-5">3.1⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Air </h3>
            <p className="mt-2 text-gray-500 ">
              HAVELLS Prolife Brio Air Fryer 4.2 L
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">38%</span>
            <p className="line-through"> 7,999</p> 
            <span className="font-bold">  ₹4,999</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Add to Cart</button>
          </div>


          <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl md:w-60 w-full ">
            <div className=" ">
                <img src={image3} alt="image3" className="w-full" />
                 <p className=" pt-5">4.5⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Android </h3>
            <p className="mt-2 text-gray-500 ">
              MOTOROLA pad 60 neo 8 GB RAM 128 GB
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">24%</span>
            <p className="line-through"> 24,999</p> 
            <span className="font-bold">  ₹18,999</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Add to Cart</button>
          </div>




          <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl md:w-60 w-full ">
            <div className=" ">
                <img src={image4} alt="image4" className="w-full" />
                 <p className=" pt-5">4.2⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Speaker</h3>
            <p className="mt-2 text-gray-500 ">
              FERONS Wireless rechargeable brand new...
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">37%</span>
            <p className="line-through"> 3,499</p> 
            <span className="font-bold">  ₹2,199</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Add to Cart</button>
          </div>




           <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl md:w-60 w-full ">
                      <div className=" ">
                          <img src={image6} alt="image6" className="w-full" />
                           <p className=" pt-5">3.2⭐Ratting</p>
                      </div>
                      <h3 className="mt-1 text-xl font-bold pr-50">Cameras</h3>
                      <p className="mt-2 text-gray-500 ">
                        Supreno 4k action camera 4k action camera Sports
                      </p>
                      <div className="flex gap-2 ">
                        <span className="text-blue-600 font-bold">40%</span>
                      <p className="line-through"> 69,999</p> 
                      <span className="font-bold">  ₹55,999</span>
                     </div>
                     <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Add to Cart</button>
                    </div>
          
          
          
          
          
           <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl md:w-60 w-full ">
                      <div className=" ">
                          <img src={image7} alt="image7" className="w-full" />
                           <p className=" pt-5">2.5⭐Ratting</p>
                      </div>
                      <h3 className="mt-1 text-xl font-bold pr-50">Bag</h3>
                      <p className="mt-2 text-gray-500 ">
                        Arctic Fox Shutter Basics Grey  Camera Bag (Black)
                      </p>
                      <div className="flex gap-2 ">
                        <span className="text-blue-600 font-bold">40%</span>
                      <p className="line-through"> 2499</p> 
                      <span className="font-bold">  ₹1499</span>
                     </div>
                     <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Add to Cart</button>
                    </div>






    </div>

   </>






  );
}

export default Cart;