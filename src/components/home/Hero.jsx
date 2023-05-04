import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-gray-900">
      <div className="h-screen absolute inset-0">
        <img
          className="object-cover object-center w-full h-full opacity-30"
          src="https://res.cloudinary.com/dn2oy1djs/image/upload/v1683123393/redd-f-3mWxKnqET3E-unsplash_u2su6l.jpg"
          alt="Background"
        />
      </div>
      <div className="relative container mx-auto h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Level Up Your Gaming Experience
          </h1>
          <p className="text-lg mt-4 2xl:px-96 sm:px-0">
            Explore our wide range of gaming accessories and take your gaming
            sessions to the next level. From high-performance keyboards and
            precision mice to immersive headsets and stylish gaming chairs, we
            have everything you need to enhance your gaming setup.
          </p>
          <a
            href="#"
            className="mt-6 inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
