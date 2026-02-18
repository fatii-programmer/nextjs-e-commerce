"use client"; // <-- Ye line must hai for Client Component
import React from "react";

const Footer: React.FC = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/xyzabcde", { // Replace with your Formspree URL
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          // Redirect to YouTube subscribe page
          window.location.href = "https://www.youtube.com/@fatii_designer?sub_confirmation=1";
        } else {
          alert("There was a problem submitting your form.");
        }
      })
      .catch(() => {
        alert("There was a problem submitting your form.");
      });
  };

  return (
    <footer className="bg-white py-20 border-t border-gray-300">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Address */}
          <div className="text-gray-600 text-1xl ">
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-10">Links</h3>
            <ul className="space-y-6">
              <li><a href="#" className="text-black-800 hover:text-gray-900 transition">Home</a></li>
              <li><a href="#" className="text-black-800 hover:text-gray-900 transition">Shop</a></li>
              <li><a href="#" className="text-black-800 hover:text-gray-900 transition">About</a></li>
              <li><a href="#" className="text-black-800 hover:text-gray-900 transition">Contact</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-10">Help</h3>
            <ul className="space-y-6">
              <li><a href="#" className="text-black-800 hover:text-gray-900 transition">Payment Options</a></li>
              <li><a href="#" className="text-black-800 hover:text-gray-900 transition">Return</a></li>
              <li><a href="#" className="text-black-800 hover:text-gray-900 transition">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div>
            <h3 className="text-gray-400 text-sm font-medium mb-10">Newsletter</h3>
            <form onSubmit={handleFormSubmit} className="flex items-center border-b-2 border-gray-300">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                required
                className="flex-1 px-2 py-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button type="submit" className="text-black px-4 py-2 bg-gray-100 rounded-r-md hover:bg-gray-200 transition">
                Subscribe
              </button>
            </form>

            {/* Optional manual YouTube subscribe button */}
            <a
              href="https://www.youtube.com/@Fatii.Designer?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Subscribe to My Channel
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-4 text-center text-black-600 text-sm">
          <hr />
          <p className="pt-2">2022 Meubel House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
