
function About() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-rose-500">
              About Style Store
            </p>

            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Style That Speaks
              <span className="text-rose-500"> For You.</span>
            </h1>

            <p className="mt-6 leading-8 text-gray-600">
              Welcome to Style Store, your destination for modern
              and stylish clothing. We believe that great style
              starts with simple choices and the confidence to
              express yourself.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              From everyday essentials to timeless pieces, our
              collection helps you find a look that feels like you.
            </p>

            <a
              href="/"
              className="mt-8 inline-block rounded-xl bg-gray-900 px-7 py-3 font-semibold text-white transition hover:bg-rose-500"
            >
              Explore Collection
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-rose-200/60 blur-xl" />

            <div className="relative flex min-h-80 flex-col items-center justify-center overflow-hidden rounded-3xl bg-gray-900 p-10 text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-rose-400">
                Style Store
              </span>

              <h2 className="mt-5 text-4xl font-black text-white md:text-5xl">
                YOUR STYLE.
              </h2>

              <h2 className="mt-2 text-4xl font-black text-rose-400 md:text-5xl">
                YOUR STORY.
              </h2>

              <p className="mt-6 max-w-sm leading-7 text-gray-300">
                Wear what makes you feel confident.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {[
            {
              title: "Our Mission",
              text: "Make everyday fashion simple and accessible.",
            },
            {
              title: "Our Style",
              text: "Modern designs with a clean and timeless feel.",
            },
            {
              title: "Our Promise",
              text: "A smooth and enjoyable shopping experience.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;