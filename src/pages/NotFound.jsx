import { FaUnlink } from "react-icons/fa";

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="hero min-h-screen bg-base-200 w-200">
      <div class="hero-content flex-col lg:flex-row-reverse w-2/3">
        <img
          src="https://media.istockphoto.com/vectors/page-not-found-error-with-film-flap-design-vector-id1265221960?k=20&m=1265221960&s=170667a&w=0&h=jCITUlo5a7s5fue3XrX2WB8FOK9VnbaWeLCHB8Ovj-c="
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <div class="flex items-center">
            <h1 class="text-5xl font-bold mr-5">Page Not Found!</h1>
            <FaUnlink class="text-4xl" />
          </div>

          <p class="py-6">
            Unfortunately the page you are looking for is not available. To
            visit the main page again and access more movie data, please click
            the button below :
          </p>
          <button class="btn btn-primary">
            <Link to="/">Back to the box office</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
