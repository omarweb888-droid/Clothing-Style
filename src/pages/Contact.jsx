
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for contacting Style Store!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-rose-500">
            Get In Touch
          </p>

          <h1 className="mt-3 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500">
            Have a question about our collection? Send us a message.
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-5">
          <div className="bg-gray-900 p-8 text-white md:col-span-2 md:p-10">
            <h2 className="text-2xl font-bold">
              Let's Talk
            </h2>

            <p className="mt-4 leading-7 text-gray-300">
              We're here to help you with your shopping experience.
            </p>

            <div className="mt-10 space-y-7">
              <div className="flex items-start gap-4">
                <span className="text-2xl">✉</span>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="mt-1 break-all text-sm text-gray-300">
                    support@stylestore.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">⌖</span>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="mt-1 text-sm text-gray-300">
                    Online Store
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">◷</span>
                <div>
                  <h3 className="font-semibold">Working Hours</h3>
                  <p className="mt-1 text-sm text-gray-300">
                    Saturday - Thursday
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-400">
                Style Store — Your Style, Your Story.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 md:col-span-3 md:p-10"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Your Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows={5}
                required
                className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-rose-400 focus:ring-2 focus:ring-rose-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-rose-500 px-6 py-3.5 font-bold text-white transition hover:bg-gray-900"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;