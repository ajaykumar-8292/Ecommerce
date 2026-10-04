import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20 md:flex-row">

          {/* Left Content */}
          <div className="flex-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Welcome to My Store
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Shop Smart.
              <br />
              Shop Better.
            </h1>

            <p className="mt-5 max-w-xl text-lg text-gray-300">
              Discover the latest products, amazing deals and quality
              products at the best prices.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/cart"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Shop Now
              </Link>

              <Link
                to="/products"
                className="rounded-lg border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-gray-900"
              >
                View Products
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
              alt="E-commerce shopping"
              className="w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>

        </div>
      </section>


      

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Shop By Category
          </h2>

          <p className="mt-2 text-gray-600">
            Explore our popular categories
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
<Link
            to="/products">
          <div className="rounded-xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl">👕</div>
            <h3 className="mt-4 text-xl font-bold">Fashion</h3>
            <p className="mt-2 text-gray-500">
              Latest fashion products
            </p>
          </div>
          </Link>


<Link to="/products">
          <div className="rounded-xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl">📱</div>
            <h3 className="mt-4 text-xl font-bold">Electronics</h3>
            <p className="mt-2 text-gray-500">
              Latest electronic products
            </p>
          </div>
          </Link>


<Link to="/products">
          <div className="rounded-xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl">👟</div>
            <h3 className="mt-4 text-xl font-bold">Shoes</h3>
            <p className="mt-2 text-gray-500">
              Stylish shoes collection
            </p>
          </div>
          </Link>


<Link to="/products">
          <div className="rounded-xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl">🎧</div>
            <h3 className="mt-4 text-xl font-bold">Accessories</h3>
            <p className="mt-2 text-gray-500">
              Useful accessories
            </p>
          </div>
          </Link>


          <Link to="/products">
             <div className="rounded-xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl">💻</div>
            <h3 className="mt-4 text-xl font-bold">Laptops</h3>
            <p className="mt-2 text-gray-500">
              Powerful laptops for work and study
            </p>
          </div>
          </Link>


   <Link to="/products">
   <div className="rounded-xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl">⌚</div>
            <h3 className="mt-4 text-xl font-bold">Watches</h3>
            <p className="mt-2 text-gray-500">
              Modern watches and fitness bands
            </p>
          </div>
          </Link>

<Link to="/products">
<div className="rounded-xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl">👓</div>
            <h3 className="mt-4 text-xl font-bold">Eyewear</h3>
            <p className="mt-2 text-gray-500">
              Stylish glasses and sunglasses
            </p>
          </div>
          </Link>

<Link to="/products">
          <div className="rounded-xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl">🖥️</div>
            <h3 className="mt-4 text-xl font-bold">Monitors</h3>
            <p className="mt-2 text-gray-500">
              Computer monitors and displays
            </p>
          </div>
          </Link>

<Link to="/products">
          <div className="rounded-xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl">⌨️</div>
            <h3 className="mt-4 text-xl font-bold">Keyboards</h3>
            <p className="mt-2 text-gray-500">
              Mechanical and wireless keyboards
            </p>
          </div>
          </Link>

<Link to="/products">
           <div className="rounded-xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl">🔊</div>
            <h3 className="mt-4 text-xl font-bold">Speakers</h3>
            <p className="mt-2 text-gray-500">
              Bluetooth and home speakers
            </p>
          </div>
          </Link>

<Link to="/products">
           <div className="rounded-xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl">🖱️</div>
            <h3 className="mt-4 text-xl font-bold">Mouse</h3>
            <p className="mt-2 text-gray-500">
              Wireless and gaming mouse
            </p>
          </div>
          </Link>

<Link to="/products">
          <div className="rounded-xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="text-5xl">💄</div>
            <h3 className="mt-4 text-xl font-bold">Beauty</h3>
            <p className="mt-2 text-gray-500">
              Beauty and personal-care products
            </p>
          </div>
          </Link>









        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">

          <div className="text-center">
            <div className="text-4xl">🚚</div>
            <h3 className="mt-4 text-xl font-bold">
              Fast Delivery
            </h3>
            <p className="mt-2 text-gray-500">
              Quick and reliable delivery
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl">🔒</div>
            <h3 className="mt-4 text-xl font-bold">
              Secure Payment
            </h3>
            <p className="mt-2 text-gray-500">
              Safe and secure payment
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl">⭐</div>
            <h3 className="mt-4 text-xl font-bold">
              Quality Products
            </h3>
            <p className="mt-2 text-gray-500">
              Quality products for everyone
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;