import React from 'react'

function Hero() {
  return (
    <div>
    
  {/* Hero */}
  <div className=" text-center align-middle justify-center items-center mx-auto px-4 sm:px-6 lg:px-8">
    {/* Grid */}
    <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center gap-2 ">
      <div className="lg:col-span-3 justify-center">
        <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
          Build Better Products
        </h1>
        <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
          Introducing a new way for your brand to reach the creative community.
        </p>

        {/* Brands */}
        <div className="mt-6 lg:mt-12 align-middle items-center justify-center text-center">
          <span className="text-xs font-medium text-gray-800 uppercase dark:text-gray-200">
            Trusted by:
          </span>
       
        </div>
        {/* End Brands */}
      </div>
      {/* End Col */}
      <div className="lg:col-span-4 p-5 mt-10 flex overflow-clip lg:mt-0">
        <img
          className="w-3/4 right-0 flex rounded-xl"
          src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
          alt="Image Description"
        />
        <img
          className="w-3/4 right-0 px-1 flex rounded-xl"
          src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
          alt="Image Description"
        />
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Hero */}


    </div>
  )
}

export default Hero
