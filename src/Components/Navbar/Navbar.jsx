import React from "react";

const Navbar = () => {
  return (
    <main>
      <div className="container mx-auto">
        <header className="flex justify-between mt-5">
          <div className="logo">
            <h2 className="text-3xl font-bold">Logo</h2>
          </div>
          <nav>
            <ul className="flex justify-between gap-5">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
      </div>
    </main>
  );
};

export default Navbar;
