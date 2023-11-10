import React from 'react'

export default function home () {
  return (
    
    <div>
        {/*banner*/}
    <div
      className="bg-cover bg-no-repeat bg-center py-36"
      style={{ backgroundImage: 'url("images/logo.jpg")' }}
    >
      <div className="container">
        <h1 className="text-6xl text-white font-medium mb-4">
          This banner is for <br /> only test purposes
        </h1>
        <p className="text-white">
          Rome wasn't build in a day, so keep workind hard daily. <br />
          its a marathon.
        </p>
        <div className="mt-12">
          <a
            href="#"
            className="bg-orange-400 border border-orange-400 text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-orange-400 transition"
          >
            View Products
          </a>
        </div>
      </div>
    </div>
    {/*banner*/}
    {/*features*/}
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
        {/*single feature*/}
        <div className="border border-orange-400 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src="images/logo.jpg"
            alt="Purity"
            className="w-12 h-12 object-cover"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">Example 1</h4>
            <p className="text-gray-500 text-sm">Example text</p>
          </div>
        </div>
        {/*single feature*/}
        {/*single feature*/}
        <div className="border border-orange-400 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src="images/logo.jpg"
            alt="Purity"
            className="w-12 h-12 object-cover"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">Example 1</h4>
            <p className="text-gray-500 text-sm">Example text</p>
          </div>
        </div>
        {/*single feature*/}
        {/*single feature*/}
        <div className="border border-orange-400 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src="images/logo.jpg"
            alt="Purity"
            className="w-12 h-12 object-cover"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">Example 1</h4>
            <p className="text-gray-500 text-sm">Example text</p>
          </div>
        </div>
        {/*single feature*/}
      </div>
    </div>
    {/*features end*/}
    {/*categories*/}
    <div className="container py-16">
      <h2 className="text-3xl font-medium text-gray-600 uppercase mb-6">
        view products by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {/*single category*/}
        <div className="relative rounded-sm overflow-hidden group">
          <img src="images/logo.jpg" alt="Cat1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            CAT!
          </a>
        </div>
        {/*single category end*/}
        {/*single category*/}
        <div className="relative rounded-sm overflow-hidden group">
          <img src="images/logo.jpg" alt="Cat1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            CAT!
          </a>
        </div>
        {/*single category end*/}
        {/*single category*/}
        <div className="relative rounded-sm overflow-hidden group">
          <img src="images/logo.jpg" alt="Cat1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            CAT!
          </a>
        </div>
        {/*single category end*/}
        {/*single category*/}
        <div className="relative rounded-sm overflow-hidden group">
          <img src="images/logo.jpg" alt="Cat1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            CAT!
          </a>
        </div>
        {/*single category end*/}
        {/*single category*/}
        <div className="relative rounded-sm overflow-hidden group">
          <img src="images/logo.jpg" alt="Cat1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            CAT!
          </a>
        </div>
        {/*single category end*/}
        {/*single category*/}
        <div className="relative rounded-sm overflow-hidden group">
          <img src="images/logo.jpg" alt="Cat1" className="w-full" />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            CAT!
          </a>
        </div>
        {/*single category end*/}
      </div>
    </div>
    {/*categories end*/}
    {/*prodcuts*/}
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-geay-800 uppercase mb-6">
        NEW PRODUCTS
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {/*single product*/}
        <div className="bg-white shadow rounded overflow-hiddem group">
          {/*product image*/}
          <div className="relative">
            <img src="images/logo.jpg" className="w-full" />
            <div className="absolute inset-0 flex bg-black bg-opacity-40 items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="fas fa-search" />
              </a>
              <a
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="far fa-heart" />
              </a>
            </div>
          </div>
          {/*product image end*/}
          {/*product content*/}
          <div className="pt-4 pb-3 px-4">
            <a href="#">
              <h4 className="uppercase font-medium text-2xl mb-2 text-gray-800 hover:text-primary transition">
                product 1
              </h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto">
              <p className="text-xl text-orange-400 font-semibold">Rs. 100</p>
              <p className="text-sm text-orange-400 line-through">Rs. 100</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="text-xs text-gray-500 ml-3">150</div>
            </div>
          </div>
          <a
            href="#"
            className="block w-full py-1 text-center text-white bg-orange-400 border-orange-400 rounder-b hover:bg-transparent hover:text-orange-400 transition"
          >
            Add to cart
          </a>
          {/*end of content*/}
        </div>
        {/*End single product*/}
        {/*single product*/}
        <div className="bg-white shadow rounded overflow-hiddem group">
          {/*product image*/}
          <div className="relative">
            <img src="images/logo.jpg" className="w-full" />
            <div className="absolute inset-0 flex bg-black bg-opacity-40 items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="fas fa-search" />
              </a>
              <a
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="far fa-heart" />
              </a>
            </div>
          </div>
          {/*product image end*/}
          {/*product content*/}
          <div className="pt-4 pb-3 px-4">
            <a href="#">
              <h4 className="uppercase font-medium text-2xl mb-2 text-gray-800 hover:text-primary transition">
                product 1
              </h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto">
              <p className="text-xl text-orange-400 font-semibold">Rs. 100</p>
              <p className="text-sm text-orange-400 line-through">Rs. 100</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="text-xs text-gray-500 ml-3">150</div>
            </div>
          </div>
          <a
            href="#"
            className="block w-full py-1 text-center text-white bg-orange-400 border-orange-400 rounder-b hover:bg-transparent hover:text-orange-400 transition"
          >
            Add to cart
          </a>
          {/*end of content*/}
        </div>
        {/*End single product*/}
        {/*single product*/}
        <div className="bg-white shadow rounded overflow-hiddem group">
          {/*product image*/}
          <div className="relative">
            <img src="images/logo.jpg" className="w-full" />
            <div className="absolute inset-0 flex bg-black bg-opacity-40 items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="fas fa-search" />
              </a>
              <a
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="far fa-heart" />
              </a>
            </div>
          </div>
          {/*product image end*/}
          {/*product content*/}
          <div className="pt-4 pb-3 px-4">
            <a href="#">
              <h4 className="uppercase font-medium text-2xl mb-2 text-gray-800 hover:text-primary transition">
                product 1
              </h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto">
              <p className="text-xl text-orange-400 font-semibold">Rs. 100</p>
              <p className="text-sm text-orange-400 line-through">Rs. 100</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="text-xs text-gray-500 ml-3">150</div>
            </div>
          </div>
          <a
            href="#"
            className="block w-full py-1 text-center text-white bg-orange-400 border-orange-400 rounder-b hover:bg-transparent hover:text-orange-400 transition"
          >
            Add to cart
          </a>
          {/*end of content*/}
        </div>
        {/*End single product*/}
        {/*single product*/}
        <div className="bg-white shadow rounded overflow-hiddem group">
          {/*product image*/}
          <div className="relative">
            <img src="images/logo.jpg" className="w-full" />
            <div className="absolute inset-0 flex bg-black bg-opacity-40 items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="fas fa-search" />
              </a>
              <a
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="far fa-heart" />
              </a>
            </div>
          </div>
          {/*product image end*/}
          {/*product content*/}
          <div className="pt-4 pb-3 px-4">
            <a href="#">
              <h4 className="uppercase font-medium text-2xl mb-2 text-gray-800 hover:text-primary transition">
                product 1
              </h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto">
              <p className="text-xl text-orange-400 font-semibold">Rs. 100</p>
              <p className="text-sm text-orange-400 line-through">Rs. 100</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="text-xs text-gray-500 ml-3">150</div>
            </div>
          </div>
          <a
            href="#"
            className="block w-full py-1 text-center text-white bg-orange-400 border-orange-400 rounder-b hover:bg-transparent hover:text-orange-400 transition"
          >
            Add to cart
          </a>
          {/*end of content*/}
        </div>
        {/*End single product*/}
        {/*single product*/}
        <div className="bg-white shadow rounded overflow-hiddem group">
          {/*product image*/}
          <div className="relative">
            <img src="images/logo.jpg" className="w-full" />
            <div className="absolute inset-0 flex bg-black bg-opacity-40 items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="fas fa-search" />
              </a>
              <a
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="far fa-heart" />
              </a>
            </div>
          </div>
          {/*product image end*/}
          {/*product content*/}
          <div className="pt-4 pb-3 px-4">
            <a href="#">
              <h4 className="uppercase font-medium text-2xl mb-2 text-gray-800 hover:text-primary transition">
                product 1
              </h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto">
              <p className="text-xl text-orange-400 font-semibold">Rs. 100</p>
              <p className="text-sm text-orange-400 line-through">Rs. 100</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="text-xs text-gray-500 ml-3">150</div>
            </div>
          </div>
          <a
            href="#"
            className="block w-full py-1 text-center text-white bg-orange-400 border-orange-400 rounder-b hover:bg-transparent hover:text-orange-400 transition"
          >
            Add to cart
          </a>
          {/*end of content*/}
        </div>
        {/*End single product*/}
        {/*single product*/}
        <div className="bg-white shadow rounded overflow-hiddem group">
          {/*product image*/}
          <div className="relative">
            <img src="images/logo.jpg" className="w-full" />
            <div className="absolute inset-0 flex bg-black bg-opacity-40 items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="fas fa-search" />
              </a>
              <a
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="far fa-heart" />
              </a>
            </div>
          </div>
          {/*product image end*/}
          {/*product content*/}
          <div className="pt-4 pb-3 px-4">
            <a href="#">
              <h4 className="uppercase font-medium text-2xl mb-2 text-gray-800 hover:text-primary transition">
                product 1
              </h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto">
              <p className="text-xl text-orange-400 font-semibold">Rs. 100</p>
              <p className="text-sm text-orange-400 line-through">Rs. 100</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="text-xs text-gray-500 ml-3">150</div>
            </div>
          </div>
          <a
            href="#"
            className="block w-full py-1 text-center text-white bg-orange-400 border-orange-400 rounder-b hover:bg-transparent hover:text-orange-400 transition"
          >
            Add to cart
          </a>
          {/*end of content*/}
        </div>
        {/*End single product*/}
        {/*single product*/}
        <div className="bg-white shadow rounded overflow-hiddem group">
          {/*product image*/}
          <div className="relative">
            <img src="images/logo.jpg" className="w-full" />
            <div className="absolute inset-0 flex bg-black bg-opacity-40 items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="fas fa-search" />
              </a>
              <a
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="far fa-heart" />
              </a>
            </div>
          </div>
          {/*product image end*/}
          {/*product content*/}
          <div className="pt-4 pb-3 px-4">
            <a href="#">
              <h4 className="uppercase font-medium text-2xl mb-2 text-gray-800 hover:text-primary transition">
                product 1
              </h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto">
              <p className="text-xl text-orange-400 font-semibold">Rs. 100</p>
              <p className="text-sm text-orange-400 line-through">Rs. 100</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="text-xs text-gray-500 ml-3">150</div>
            </div>
          </div>
          <a
            href="#"
            className="block w-full py-1 text-center text-white bg-orange-400 border-orange-400 rounder-b hover:bg-transparent hover:text-orange-400 transition"
          >
            Add to cart
          </a>
          {/*end of content*/}
        </div>
        {/*End single product*/}
        {/*single product*/}
        <div className="bg-white shadow rounded overflow-hiddem group">
          {/*product image*/}
          <div className="relative">
            <img src="images/logo.jpg" className="w-full" />
            <div className="absolute inset-0 flex bg-black bg-opacity-40 items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <a
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="fas fa-search" />
              </a>
              <a
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="far fa-heart" />
              </a>
            </div>
          </div>
          {/*product image end*/}
          {/*product content*/}
          <div className="pt-4 pb-3 px-4">
            <a href="#">
              <h4 className="uppercase font-medium text-2xl mb-2 text-gray-800 hover:text-primary transition">
                product 1
              </h4>
            </a>
            <div className="flex items-baseline mb-1 space-x-2 font-roboto">
              <p className="text-xl text-orange-400 font-semibold">Rs. 100</p>
              <p className="text-sm text-orange-400 line-through">Rs. 100</p>
            </div>
            <div className="flex items-center">
              <div className="flex gap-1 text-sm text-yellow-400">
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
                <span>
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="text-xs text-gray-500 ml-3">150</div>
            </div>
          </div>
          <a
            href="#"
            className="block w-full py-1 text-center text-white bg-orange-400 border-orange-400 rounder-b hover:bg-transparent hover:text-orange-400 transition"
          >
            Add to cart
          </a>
          {/*end of content*/}
        </div>
        {/*End single product*/}
      </div>
    </div>
    {/*prodcuts end*/}
    </div>
    
  )
  
  
}
