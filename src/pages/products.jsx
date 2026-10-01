import { Link } from "react-router-dom";




import { FaSearch } from "react-icons/fa";
import { VscDebugStepInto } from "react-icons/vsc";
import { FaMicrophone } from "react-icons/fa";




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
import image17 from "../assets/image-17.png";
import image18 from "../assets/image-18.png";
import image19 from "../assets/image-19.png";
import image20 from "../assets/image-20.png";
import image21 from "../assets/image-21.png";
import image22 from "../assets/image-22.png";
import image23 from "../assets/image-23.png";
import image24 from "../assets/image-24.png";
import image25 from "../assets/image-25.png";
import image26 from "../assets/image-26.png";
import image27 from "../assets/image-27.png";
import image28 from "../assets/image-28.png";
import image29 from "../assets/image-29.png";

function Products() {




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

    alert(`${product.name} added to cart`);
  };





  
  return (
    <>
   
      {/*Search bar */}

      <div className="flex   md:pl-100   h-18 pt-2 pb-3 pl-2 pr-2  bg-gray-500 sticky top-16">
        <div className="flex gap-3 bg-white rounded-lg md:pl-5 pl-2 w-full">
            <FaSearch className="text-4xl mt-2 cursor-pointer   " />

            <input type="text" className=" border border-black rounded-lg mt-1 h-10  "   placeholder="Search product... "  ></input>
         

<div className="flex  md:ml-100  pt-3 ">

            
             <FaMicrophone  className="text-3xl cursor-pointer ml-23" />
             </div>
            
</div>
       

      </div>



      {/*categroies */}
<div className=" md:flex col-gap-10  md:pr-10 ">
    {/*left side */}
    <div className=" hidden md:sticky md:top-34 md:w-1/5 md:self-start w-full  md:block  md:h-160 bg-gray-400  pt-5 pl-20   ">
        <h2 className="pb-5 font-bold text-white text-2xl ">CATEGORIES</h2>

        <Link
            to="/products"
            className="text-black hover:text-blue-400 "
          >
            <h3 className=" text-white  hover:text-blue-400 text-2xl font-bold">All</h3>
          </Link>

           <Link
            to="/"
            className="text-black hover:text-blue-400  "
          >
            <h3 className="mt-2  text-white  hover:text-blue-400 font-bold">Mobile</h3>
          </Link>

           <Link
            to="/"
            className="text-black hover:text-blue-400 "
          >
            <h3 className="mt-2 text-white  hover:text-blue-400 font-bold">Laptop</h3>
          </Link>

           <Link
            to="/"
            className="text-black hover:text-blue-400 "
          >
            <h3 className="mt-2  text-white  hover:text-blue-400 font-bold">Headphone</h3>
          </Link>

           <Link
            to="/"
            className="text-black hover:text-blue-400 "
          >
            <h3 className="mt-2  text-white  hover:text-blue-400 font-bold">Shoes</h3>
          </Link>

           <Link
            to="/"
            className="text-black hover:text-blue-400 "
          >
            <h3 className="mt-2  text-white  hover:text-blue-400 font-bold">Fashion</h3>
          </Link>

           <Link
            to="/"
            className="text-black hover:text-blue-400 "
          >
            <h3 className="mt-2  text-white  hover:text-blue-400 font-bold">Gaming</h3>
          </Link>

           <Link
            to="/"
            className="text-black hover:text-blue-400 "
          >
            <h3 className="mt-2 text-white  hover:text-blue-400 font-bold">Accessories</h3>
          </Link>

          <Link
            to="/"
            className="text-black hover:text-blue-400 "
          >
            <h3 className="mt-2 text-white  hover:text-blue-400 font-bold">Boy,s</h3>
          </Link>

          <Link
            to="/"
            className="text-black hover:text-blue-400 "
          >
            <h3 className="mt-2 text-white  hover:text-blue-400 font-bold">Beauty</h3>

          </Link>

          <Link
            to="/"
            className="text-black hover:text-blue-400 "
          >
            <h3 className="mt-2 text-white  hover:text-blue-400 font-bold">Girl,s</h3>
          </Link>


          <Link
            to="/"
            className="text-black hover:text-blue-400 "
          >
            <h3 className="mt-2 text-white  hover:text-blue-400 font-bold">Men,s</h3>
          </Link>

          <Link
            to="/"
            className="text-black hover:text-blue-400 "
          >
            <h3 className="mt-2 text-white  hover:text-blue-400 font-bold">Baby Girl,s</h3>
          </Link>


          <Link
            to="/"
            className="text-black hover:text-blue-400 "
          >
            <h3 className="mt-2 text-white  hover:text-blue-400 font-bold">Coocks</h3>
          </Link>

          <Link
            to="/"
            className="text-black hover:text-blue-400 "
          >
            <h3 className="mt-2 text-white  hover:text-blue-400 font-bold">Eletronics</h3>
          </Link>

          <Link
            to="/"
            className="text-black hover:text-blue-400 "
          >
            <h3 className="mt-2 text-white  hover:text-blue-400 font-bold">Drink</h3>
          </Link>


          <Link
            to="/"
            className="text-black hover:text-blue-400 "
          >
            <h3 className="mt-2 text-white  hover:text-blue-400 font-bold">Fruits</h3>
          </Link>



    </div>




{/*right side */}


    <div className="md:w-1/1 w-full   p-4  grid gap-6 sm:grid-cols-2 lg:grid-cols-4  overflow-y-auto"> 

          <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
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
           <button
           
  onClick={() =>
    addToCart({
      id: 1,
      name: "5G Smartphone",
      category: "Mobiles",
      image: image,
      description: "5G Smartphone",
      price: 24999,
      oldPrice: 29999,
      discount: 17,
      rating: 4.5,
    })
  }
  className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13  cursor-pointer">Shop Now</button>
          </div>


          <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
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
           <button
             onClick={() =>
    addToCart({
      id: 1,
      name: "Air Fryer",
      category: " cooking",
      image: image,
      description: "Air Fryer",
      price: 4999,
      oldPrice: 7999,
      discount: 38,
      rating: 3.1,
    })
  }
            className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 cursor-pointer ">Shop Now</button>
          </div>





          <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
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
           <button
           onClick={() =>
    addToCart({
      id: 1,
      name: "Android",
      category: " Android Mobiles",
      image: image,
      description: "Android",
      price: 18999,
      oldPrice: 24999,
      discount: 24,
      rating: 4.5,
    })
  }
           className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 cursor-pointer">Shop Now</button>
          </div>




          <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
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
           <button 
           onClick={() =>
    addToCart({
      id: 1,
      name: "Speaker",
      category: "Bluetooth Speaker",
      image: image,
      description: "Speaker",
      price: 2199,
      oldPrice: 3499,
      discount: 37,
      rating: 4.2,
    })
  }
           
           
           className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 cursor-pointer ">Shop Now</button>
          </div>


          <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image5} alt="image5" className="w-full" />
                 <p className=" pt-5">3.3⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Coffee</h3>
            <p className="mt-2 text-gray-500 ">
              ROSSMANN Espresso Machine, 20 bar.....
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">33%</span>
            <p className="line-through"> 5,999</p> 
            <span className="font-bold">  ₹3,999</span>
           </div>
           <button 
           onClick={() =>
    addToCart({
      id: 1,
      name: "Coffee",
      category: "Coffee",
      image: image,
      description: "coffee",
      price: 3999,
      oldPrice: 5999,
      discount: 33,
      rating: 3.3,
    })
  }
           
           className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 cursor-pointer ">Shop Now</button>
          </div>




           <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
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
           <button  
           onClick={() =>
    addToCart({
      id: 1,
      name: "Cameras",
      category: "Cameras",
      image: image,
      description: "cameras",
      price: 55999,
      oldPrice: 69999,
      discount: 40,
      rating: 3.2,
    })
  }
           className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 cursor-pointer ">Shop Now</button>
          </div>





 <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
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
           <button 
           onClick={() =>
    addToCart({
      id: 1,
      name: "Bag",
      category: "Office Bag",
      image: image,
      description: "Office Bag",
      price: 1499,
      oldPrice: 2499,
      discount: 40,
      rating: 2.5,
    })
  }
           
           className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13  cursor-pointer">Shop Now</button>
          </div>





 <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image8} alt="image8" className="w-full" />
                 <p className=" pt-5">4.9⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Watch</h3>
            <p className="mt-2 text-gray-500 ">
              GOBOULT Drift BT Calling HD Display, 140+ Watchface, BT calling
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">40%</span>
            <p className="line-through"> 4999</p> 
            <span className="font-bold">  ₹2,999</span>
           </div>
           <button 
           onClick={() =>
    addToCart({
      id: 1,
      name: "Smart Watch",
      category: "Watch",
      image: image,
      description: "Noice Smaet Watch 22mm ",
      price: 2999,
      oldPrice: 4999,
      discount: 40,
      rating: 4.9,
    })
  }
           
           className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 cursor-pointer">Shop Now</button>
          </div>



 

 <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image9} alt="image9" className="w-full" />
                 <p className=" pt-5">4.6⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Monitor</h3>
            <p className="mt-2 text-gray-500 ">
              Lenovo L-Series 68.58 cm (27 inch) Quad HD LED Backlit IPS Panel
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">21%</span>
            <p className="line-through"> 18,999</p> 
            <span className="font-bold">  ₹14,999</span>
           </div>
           <button
           onClick={() =>
    addToCart({
      id: 1,
      name: "Monitor ",
      category: "Monitor",
      image: image,
      description: "Monitor",
      price: 18999,
      oldPrice: 14999,
      discount: 21,
      rating: 4.6,
    })
  }
           className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13  cursor-pointer">Shop Now</button>
          </div>


 
 <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image10} alt="image10" className="w-full" />
                 <p className=" pt-5">4.7⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Mouse</h3>
            <p className="mt-2 text-gray-500 ">
              Flipkart SmartBuy D3 RGB lighting wired mouse Wired Ambidextrou
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">35%</span>
            <p className="line-through"> 1,999</p> 
            <span className="font-bold">  ₹1,299</span>
           </div>
           <button 
           
           onClick={() =>
    addToCart({
      id: 1,
      name: "Mouse",
      category: "Mouse",
      image: image,
      description: "Wrieless Mouse",
      price: 1299,
      oldPrice: 1999,
      discount: 35,
      rating: 4.7,
    })
  }
           
           className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>





 <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image11} alt="image11" className="w-full" />
                 <p className=" pt-5">4.9⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Stand</h3>
            <p className="mt-2 text-gray-500 ">
              Beauty and personal-care products
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">45%</span>
            <p className="line-through"> 1,999</p> 
            <span className="font-bold">  ₹1099</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>



 <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image13} alt="image13" className="w-full" />
                 <p className=" pt-5">4.1⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Large</h3>
            <p className="mt-2 text-gray-500 ">
              SAKSHI FASHION 70 L Strolley Duffel Bag - Duffle Wheeler Bag for
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">33%</span>
            <p className="line-through"> 2999</p> 
            <span className="font-bold">  ₹1999</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>




<div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image14} alt="image14" className="w-full" />
                 <p className=" pt-5">4.3⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Keyboard</h3>
            <p className="mt-2 text-gray-500 ">
              EVM WDK-216 Wired USB Standard Laptop Keyboard Compatible 
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">36%</span>
            <p className="line-through"> 2499</p> 
            <span className="font-bold">  ₹1699</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>




<div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image15} alt="image15" className="w-full" />
                 <p className=" pt-5">4.2⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Jacket</h3>
            <p className="mt-2 text-gray-500 ">
              HEMLOCK Men Solid Bomber Jacket
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">40%</span>
            <p className="line-through"> 4999</p> 
            <span className="font-bold">  ₹2999</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>




<div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image16} alt="image16" className="w-full" />
                 <p className=" pt-5">4.0⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">T-Shirt</h3>
            <p className="mt-2 text-gray-500 ">
             Woops studio! Men Graphic Print Crew Neck Pure Cotton Black T-Shi
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">40%</span>
            <p className="line-through"> 1499</p> 
            <span className="font-bold">  ₹899</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>





<div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image17} alt="image17" className="w-full" />
                 <p className=" pt-5">4.1⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Chair</h3>
            <p className="mt-2 text-gray-500 ">
              The Sleep Company Onyx SmartGRID Premium Orthopedic High-Back
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">31%</span>
            <p className="line-through"> 12,999</p> 
            <span className="font-bold">  ₹8,999</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>





<div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image18} alt="image18" className="w-full" />
                 <p className=" pt-5">2.1⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">SSD</h3>
            <p className="mt-2 text-gray-500 ">
              SanDisk E30 1 TB External Solid State Drive (SSD) 800 MB/s, USB 3.
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">30%</span>
            <p className="line-through"> 9,999</p> 
            <span className="font-bold">  ₹6,999</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>





<div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image19} alt="image19" className="w-full" />
                 <p className=" pt-5">3.4⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Power</h3>
            <p className="mt-2 text-gray-500 ">
              boAt 20000 mAh 22.5 W Compact Pocket Size Power Bank
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">40%</span>
            <p className="line-through"> 1999</p> 
            <span className="font-bold">  ₹1199</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>





<div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image20} alt="image20" className="w-full" />
                 <p className=" pt-5">4.2⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Shoes</h3>
            <p className="mt-2 text-gray-500 ">
              URBANBOX Latest Trending Casual Running Walking Sneaker Sneaker
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">40%</span>
            <p className="line-through"> 3999</p> 
            <span className="font-bold">  ₹2399</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>




<div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image21} alt="image21" className="w-full" />
                 <p className=" pt-5">4.1⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Laptops</h3>
            <p className="mt-2 text-gray-500 ">
              Lenovo 100e Chromebook Gen 4 MediaTek Kompanio 520...
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">18%</span>
            <p className="line-through"> 64,999</p> 
            <span className="font-bold">  ₹52,999</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>



          <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image22} alt="image22" className="w-full" />
                 <p className=" pt-5">4.1⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">LED</h3>
            <p className="mt-2 text-gray-500 ">
              Orient Electric 10 W Motion Sensor Round B22 LED Bulb (White)
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">40%</span>
            <p className="line-through"> 999</p> 
            <span className="font-bold">  ₹599</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>



          <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image23} alt="image23" className="w-full" />
                 <p className=" pt-5">4.1⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">LED TV</h3>
            <p className="mt-2 text-gray-500 ">
              Thomson 108 cm (43 inch) QLED Full HD Smart Google TV 2026 Edition with Google Voice 
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">28%</span>
            <p className="line-through"> 45,999</p> 
            <span className="font-bold">  ₹32,999</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>



          <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image24} alt="image24" className="w-full" />
                 <p className=" pt-5">3.5⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Watch</h3>
            <p className="mt-2 text-gray-500 ">
              Noise Twist Hyper 1.38 Display, 14-Day Battery Life, Smart Islan
                     </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">48%</span>
            <p className="line-through"> 4,999</p> 
            <span className="font-bold">  ₹2,999</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>



          <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image25} alt="image25" className="w-full" />
                 <p className=" pt-5">4.2⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Eyewear</h3>
            <p className="mt-2 text-gray-500 ">
              Lenskart Blu Full Rim Square Anti Glare & Blue Cut Computer Glass For Men &
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">50%</span>
            <p className="line-through"> 1999</p> 
            <span className="font-bold">  ₹999</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>



          <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image26} alt="image26" className="w-full" />
                 <p className=" pt-5">4.4⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Bags</h3>
            <p className="mt-2 text-gray-500 ">
              WROGN Large 35 L Laptop Backpack Cadillac Unisex Bag with rain co..
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">40%</span>
            <p className="line-through"> 1999</p> 
            <span className="font-bold">  ₹1199</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>



          <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image27} alt="image27" className="w-full" />
                 <p className=" pt-5">3.9⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Charger</h3>
            <p className="mt-2 text-gray-500 ">
              MAK 25 W Supercharge 3.1 A Wall Charger for Mobile with Detachab
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">40%</span>
            <p className="line-through"> 1499</p> 
            <span className="font-bold">  ₹899</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>



          <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image28} alt="image28" className="w-full" />
                 <p className=" pt-5">3.3⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Earbuds</h3>
            <p className="mt-2 text-gray-500 ">
              BULLSTORM BS ultrapood Bluetooth Gaming Headset (Glossy Black, )
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">38%</span>
            <p className="line-through"> 3999</p> 
            <span className="font-bold">  ₹2499</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>



          <div className="rounded-xl bg-white p-8 text-left shadow-md transition hover:-translate-y-2 hover:shadow-xl  ">
            <div className=" ">
                <img src={image29} alt="image29" className="w-full" />
                 <p className=" pt-5">4.6⭐Ratting</p>
            </div>
            <h3 className="mt-1 text-xl font-bold pr-50">Headphones</h3>
            <p className="mt-2 text-gray-500 ">
              GOBOULT Fluid X 60Hrs, 40mm Drivers, Foldable design, ENC Mic, 5.4v
            </p>
            <div className="flex gap-2 ">
              <span className="text-blue-600 font-bold">40%</span>
            <p className="line-through"> 2499</p> 
            <span className="font-bold">  ₹1499</span>
           </div>
           <button className="bg-yellow-400 w-23  rounded-xl mt-3 md:ml-13 ">Shop Now</button>
          </div>


 
 






 


         




        



         
          
    </div>


</div>
   
    

</>




  );
}

export default Products;