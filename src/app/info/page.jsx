import React from 'react'

const page = () => {
  return (
    <div><>
    {/*Product View*/}
    <div className="container grid grid-cols-2 gap-8">
      {/*product image*/}
      <div>
        <img src="images/logo.jpg" className="w-full" />
        <div className="grid grid-cols-5 gap-4 mt-4">
          <img
            src="images/logo.jpg"
            className="w-full cursor-pointer border-2 border-pink-400"
          />
          <img src="images/logo.jpg" className="w-full cursor-pointer border-2" />
          <img src="images/logo.jpg" className="w-full cursor-pointer border-2" />
          <img src="images/logo.jpg" className="w-full cursor-pointer border-2" />
          <img src="images/logo.jpg" className="w-full cursor-pointer border-2" />
        </div>
      </div>
      {/*product image end*/}
      {/*product content*/}
      <div>
        <h2 className="text-3xl font-medium uppercase mb-2">Gold NEcklace</h2>
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
        <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
        <div className="space-y-2">
          <p className="text-gray-800 font-semibold space-x-2">
            <span>Avalaibility:</span>
            <span className="text-blue-600">In Stock</span>
          </p>
          <p className="text-gray-800 font-semibold space-x-2">
            <span>Brand:</span>
            <span className="text-blue-600">Shiva Jwellers</span>
          </p>
          <p className="text-gray-800 font-semibold space-x-2">
            <span>Category:</span>
            <span className="text-blue-600">Necklace</span>
          </p>
          {/*<p class="text-gray-800 font-semibold space-x-2">
            <span>Avalaibility:</span>
            <span class="text-blue-600">In Stock</span>
  
        </p>*/}
        </div>
        <div className="flex items-baseline mb-1 space-x-2 font-roboto">
          <p className="text-xl text-orange-400 font-semibold">Rs. 100</p>
          <p className="text-sm text-orange-400 line-through">Rs. 100</p>
        </div>
        <p>
          AND I AM BACK ON MY GRIND A PYSCHIC READ MY LIFELINE TOLD ME IN LIFETIME
          MY NAME WOULD HELP LIGHT UP THE CHICAGO SKYLINE AND THATS WHY I'M 7 O
          CLOCK THAT PRIME TIME
        </p>
        {/*Type of jwellery*/}
        <div className="pt-4">
          <h3 className="text-sm text-gray-800 uppercase font-medium">
            Type Of Jwellery
          </h3>
          <div className="flex items-center gap-2">
            <div className="color-selector">
              <input
                type="radio"
                name="Gold"
                className="hidden"
                id="color-gold"
              />
              <label
                htmlFor="color-gold"
                className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                style={{ backgroundColor: "gold" }}
              />
            </div>
            <div className="color-selector">
              <input
                type="radio"
                name="Gold"
                className="hidden"
                id="color-silver"
              />
              <label
                htmlFor="color-silver"
                className="text-xs border border-gray-200 flex rounded-sm h-5 w-5 cursor-pointer shadow-sm "
                style={{ backgroundColor: "silver" }}
              />
            </div>
          </div>
        </div>
        {/*Type of jwellery*/}
        {/*quantity*/}
        <div className="mt-4">
          <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
          <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
              -
            </div>
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer">
              4
            </div>
            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
              +
            </div>
          </div>
        </div>
        {/*quantity end*/}
        {/*cart button*/}
        <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
          <a
            href="#"
            className="bg-orange-400 border border-orange-400 text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-orange-400 transition"
          >
            <i className="fas fa-shopping-bag" /> Add to cart
          </a>
          <a
            href="#"
            className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2  hover:text-orange-400 transition"
          >
            <i className="fas fa-heart" /> Wishlist
          </a>
        </div>
        {/*cart button end*/}
        {/*social share*/}
        <div className="flex gap-3 mt-4">
          <a
            href="#"
            className="text-gray-400 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:text-gray-500"
          >
            <i className="fab fa-facebook" />
          </a>
          <a
            href="#"
            className="text-gray-400 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:text-gray-500"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="#"
            className="text-gray-400 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:text-gray-500"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
        {/*socila end*/}
      </div>
      {/*product content end*/}
    </div>
    {/*Product View end*/}
    {/*details*/}
    <div className="container pb-16">
      <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
        Product Details
      </h3>
      <div className="w-3/5 pt-6">
        <div className="text-gray-600 space-y-3">
          <p>
            Wear your heart on your sleeve with this pair of stud earrings crafted
            in 18 Karat Yellow Gold with a glossy finish. Stone Clarity I1I2
          </p>
          <p>
            Wear your heart on your sleeve with this pair of stud earrings crafted
            in 18 Karat Yellow Gold with a glossy finish. Stone Clarity I1I2
          </p>
        </div>
      </div>
    </div>
    {/*detaend*/}
  </>
  </div>
  )
}

export default page