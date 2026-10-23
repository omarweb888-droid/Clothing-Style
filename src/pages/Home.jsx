
import Products from "../data/products";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-rose-500">
            Style Store
          </p>

          <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            Our Collection
          </h1>

          <p className="mt-4 text-gray-500">
            Discover your style with our latest collection.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-56 overflow-hidden bg-gray-100">
                <img
                  src={
                    product.id === 1
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfNxKqTzCIH-H4R_4Q1WO29S_mnaQDPi0uh53hWnjGlA&s=10"
                      : product.id === 2
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxslh3tEIKooZxQ7-n7wwVVjZe26Dd7fGmaHUfIblKLA&s=10"
                      : "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT1QAvo-1LgepJSa072TxptbxEB07stwkJrDQC51rvn4WOO2cixETsAxHFJlGJKAjg1U4vzSoG-uh0pnmeggJDigmAB77D7Dq3ciPA1s8oEDLKPcKMExPwQyXt0&usqp=CAc"
                  }
                  alt={product.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="mb-2 text-sm font-medium text-rose-500">
                  {product.color}
                </p>

                <h2 className="text-xl font-bold text-gray-900">
                  {product.title}
                </h2>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-lg font-extrabold text-gray-900">
                    {product.price} EGP
                  </p>

                  <button
                    className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-500"
                    onClick={() =>
                      (window.location.href = `/product/${product.id}`)
                    }
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;