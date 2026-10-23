
import { Link, useParams } from "react-router-dom";
import Products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = Products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Product Not Found
        </h1>

        <p className="mt-4 text-gray-500">
          Sorry, this product does not exist.
        </p>

        <Link
          to="/"
          className="mt-6 rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-rose-500"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const image =
    product.id === 1
      ? "https://placehold.co/600x600?text=Black+T-Shirt"
      : product.id === 2
      ? "https://placehold.co/600x600?text=White+Hoodie"
      : "https://placehold.co/600x600?text=Blue+Jeans";

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="mb-8 inline-block font-semibold text-gray-500 transition hover:text-rose-500"
        >
          ← Back to Products
        </Link>

        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">
          <div className="flex items-center justify-center bg-gray-100 p-8">
            <img
              src={image}
              alt={product.title}
              className="w-full max-w-md rounded-2xl object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="font-semibold uppercase tracking-[0.25em] text-rose-500">
              Style Store Collection
            </p>

            <h1 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
              {product.title}
            </h1>

            <p className="mt-5 text-3xl font-black text-gray-900">
              {product.price} EGP
            </p>

            <div className="mt-6 border-y border-gray-100 py-5">
              <p className="text-sm text-gray-500">Product Color</p>

              <p className="mt-2 font-bold text-gray-900">
                {product.color}
              </p>
            </div>

            <p className="mt-6 leading-7 text-gray-600">
              Discover your style with this piece from our collection.
              A simple choice for your everyday look.
            </p>

            <Link
              to="/"
              className="mt-8 rounded-xl bg-gray-900 px-6 py-4 text-center font-bold text-white transition hover:bg-rose-500"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;