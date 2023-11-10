"use client";

import { GlobalContext } from "@/context";
import { getAllAdminProducts } from "@/services/product";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";

import Link from "next/link";

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  const [products, setProducts] = useState([]);
  const router = useRouter();

  async function getListOfProducts() {
    const res = await getAllAdminProducts();

    if (res.success) {
      setProducts(res.data);
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  console.log(products);

  return<>
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
          <Link
            href="#"
            className="bg-orange-400 border border-orange-400 text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-orange-400 transition"
          >
            View Products
          </Link>
        </div>
      </div>
    </div>
    {/*banner*/}
    
    {/*categories*/}
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-red-700 uppercase mb-6">
        view products by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {/*single category*/}
        <div className="relative rounded-sm overflow-hidden group">
          <img src="images/gold.jpg" alt="Cat1" className="w-full" />
          <Link
            href="/product/listing/gold"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Gold
          </Link>
        </div>
        {/*single category end*/}
        {/*single category*/}
        <div className="relative rounded-sm overflow-hidden group">
          <img src="images/silver.jpg" alt="Cat2" className="w-full" />
          <Link
            href="/product/listing/silver"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Silver
          </Link>
        </div>
        {/*single category end*/}
        {/*single category*/}
        <div className="relative rounded-sm overflow-hidden group">
          <img src="images/diamond.jpg" alt="Cat3" className="w-full" />
          <Link
            href="/product/listing/diamond"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Diamond
          </Link>
        </div>
        {/*single category end*/}
        {/*single category*/}
        <div className="relative rounded-sm overflow-hidden group">
          <img src="images/rings.jpg" alt="Cat 4" className="w-full" />
          <Link
            href="product/listing/ring"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Rings
          </Link>
        </div>
        {/*single category end*/}
        {/*single category*/}
        <div className="relative rounded-sm overflow-hidden group">
          <img src="images/earring.jpg" alt="Cat1" className="w-full" />
          <Link
            href="product/listing/earring"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Earrings
          </Link>
        </div>
        {/*single category end*/}
        {/*single category*/}
        <div className="relative rounded-sm overflow-hidden group">
          <img src="images/all.jpg" alt="Cat3" className="w-full" />
          <Link
            href="product/listing/all-products"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            All Jewellery
          </Link>
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
              <Link
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="fas fa-search" />
              </Link>
              <Link
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="far fa-heart" />
              </Link>
            </div>
          </div>
          {/*product image end*/}
          {/*product content*/}
          <div className="pt-4 pb-3 px-4">
            <Link href="#">
              <h4 className="uppercase font-medium text-2xl mb-2 text-gray-800 hover:text-primary transition">
                product 1
              </h4>
            </Link>
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
          <Link
            href="#"
            className="block w-full py-1 text-center text-white bg-orange-400 border-orange-400 rounder-b hover:bg-transparent hover:text-orange-400 transition"
          >
            Add to cart
          </Link>
          {/*end of content*/}
        </div>
        {/*End single product*/}
        {/*single product*/}
        <div className="bg-white shadow rounded overflow-hiddem group">
          {/*product image*/}
          <div className="relative">
            <img src="images/logo.jpg" className="w-full" />
            <div className="absolute inset-0 flex bg-black bg-opacity-40 items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <Link
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="fas fa-search" />
              </Link>
              <Link
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="far fa-heart" />
              </Link>
            </div>
          </div>
          {/*product image end*/}
          {/*product content*/}
          <div className="pt-4 pb-3 px-4">
            <Link href="#">
              <h4 className="uppercase font-medium text-2xl mb-2 text-gray-800 hover:text-primary transition">
                product 1
              </h4>
            </Link>
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
          <Link
            href="#"
            className="block w-full py-1 text-center text-white bg-orange-400 border-orange-400 rounder-b hover:bg-transparent hover:text-orange-400 transition"
          >
            Add to cart
          </Link>
          {/*end of content*/}
        </div>
        {/*End single product*/}
        {/*single product*/}
        <div className="bg-white shadow rounded overflow-hiddem group">
          {/*product image*/}
          <div className="relative">
            <img src="images/logo.jpg" className="w-full" />
            <div className="absolute inset-0 flex bg-black bg-opacity-40 items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <Link
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="fas fa-search" />
              </Link>
              <Link
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="far fa-heart" />
              </Link>
            </div>
          </div>
          {/*product image end*/}
          {/*product content*/}
          <div className="pt-4 pb-3 px-4">
            <Link href="#">
              <h4 className="uppercase font-medium text-2xl mb-2 text-gray-800 hover:text-primary transition">
                product 1
              </h4>
            </Link>
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
          <Link
            href="#"
            className="block w-full py-1 text-center text-white bg-orange-400 border-orange-400 rounder-b hover:bg-transparent hover:text-orange-400 transition"
          >
            Add to cart
          </Link>
          {/*end of content*/}
        </div>
        {/*End single product*/}
        {/*single product*/}
        <div className="bg-white shadow rounded overflow-hiddem group">
          {/*product image*/}
          <div className="relative">
            <img src="images/logo.jpg" className="w-full" />
            <div className="absolute inset-0 flex bg-black bg-opacity-40 items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <Link
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="fas fa-search" />
              </Link>
              <Link
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="far fa-heart" />
              </Link>
            </div>
          </div>
          {/*product image end*/}
          {/*product content*/}
          <div className="pt-4 pb-3 px-4">
            <Link href="#">
              <h4 className="uppercase font-medium text-2xl mb-2 text-gray-800 hover:text-primary transition">
                product 1
              </h4>
            </Link>
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
          <Link
            href="#"
            className="block w-full py-1 text-center text-white bg-orange-400 border-orange-400 rounder-b hover:bg-transparent hover:text-orange-400 transition"
          >
            Add to cart
          </Link>
          {/*end of content*/}
        </div>
        {/*End single product*/}
        {/*single product*/}
        <div className="bg-white shadow rounded overflow-hiddem group">
          {/*product image*/}
          <div className="relative">
            <img src="images/logo.jpg" className="w-full" />
            <div className="absolute inset-0 flex bg-black bg-opacity-40 items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <Link
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="fas fa-search" />
              </Link>
              <Link
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="far fa-heart" />
              </Link>
            </div>
          </div>
          {/*product image end*/}
          {/*product content*/}
          <div className="pt-4 pb-3 px-4">
            <Link href="#">
              <h4 className="uppercase font-medium text-2xl mb-2 text-gray-800 hover:text-primary transition">
                product 1
              </h4>
            </Link>
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
          <Link
            href="#"
            className="block w-full py-1 text-center text-white bg-orange-400 border-orange-400 rounder-b hover:bg-transparent hover:text-orange-400 transition"
          >
            Add to cart
          </Link>
          {/*end of content*/}
        </div>
        {/*End single product*/}
        {/*single product*/}
        <div className="bg-white shadow rounded overflow-hiddem group">
          {/*product image*/}
          <div className="relative">
            <img src="images/logo.jpg" className="w-full" />
            <div className="absolute inset-0 flex bg-black bg-opacity-40 items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <Link
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="fas fa-search" />
              </Link>
              <Link
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="far fa-heart" />
              </Link>
            </div>
          </div>
          {/*product image end*/}
          {/*product content*/}
          <div className="pt-4 pb-3 px-4">
            <Link href="#">
              <h4 className="uppercase font-medium text-2xl mb-2 text-gray-800 hover:text-primary transition">
                product 1
              </h4>
            </Link>
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
          <Link
            href="#"
            className="block w-full py-1 text-center text-white bg-orange-400 border-orange-400 rounder-b hover:bg-transparent hover:text-orange-400 transition"
          >
            Add to cart
          </Link>
          {/*end of content*/}
        </div>
        {/*End single product*/}
        {/*single product*/}
        <div className="bg-white shadow rounded overflow-hiddem group">
          {/*product image*/}
          <div className="relative">
            <img src="images/logo.jpg" className="w-full" />
            <div className="absolute inset-0 flex bg-black bg-opacity-40 items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <Link
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="fas fa-search" />
              </Link>
              <Link
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="far fa-heart" />
              </Link>
            </div>
          </div>
          {/*product image end*/}
          {/*product content*/}
          <div className="pt-4 pb-3 px-4">
            <Link href="#">
              <h4 className="uppercase font-medium text-2xl mb-2 text-gray-800 hover:text-primary transition">
                product 1
              </h4>
            </Link>
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
          <Link
            href="#"
            className="block w-full py-1 text-center text-white bg-orange-400 border-orange-400 rounder-b hover:bg-transparent hover:text-orange-400 transition"
          >
            Add to cart
          </Link>
          {/*end of content*/}
        </div>
        {/*End single product*/}
        {/*single product*/}
        <div className="bg-white shadow rounded overflow-hiddem group">
          {/*product image*/}
          <div className="relative">
            <img src="images/logo.jpg" className="w-full" />
            <div className="absolute inset-0 flex bg-black bg-opacity-40 items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
              <Link
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="fas fa-search" />
              </Link>
              <Link
                href="#"
                className="text-white text-lg w-9 h-8 rounded-full bg-orange-400 flex items-center justify-center hover:bg-gray-800 transition"
              >
                <i className="far fa-heart" />
              </Link>
            </div>
          </div>
          {/*product image end*/}
          {/*product content*/}
          <div className="pt-4 pb-3 px-4">
            <Link href="#">
              <h4 className="uppercase font-medium text-2xl mb-2 text-gray-800 hover:text-primary transition">
                product 1
              </h4>
            </Link>
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
          <Link
            href="#"
            className="block w-full py-1 text-center text-white bg-orange-400 border-orange-400 rounder-b hover:bg-transparent hover:text-orange-400 transition"
          >
            Add to cart
          </Link>
          {/*end of content*/}
        </div>
        {/*End single product*/}
      </div>
    </div>
    {/*prodcuts end*/}
    </div>
    {/*features*/}
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-2 gap-6 mx-auto justify-center">
        {/*single feature*/}
        <div className="border border-orange-400 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src="images\Bureau_of_Indian_Standards_Logo.png"
            alt="Purity"
            className="w-16 h-12 object-cover"
            
          ></img>
          <div>
            <h4 className="font-medium capitalize text-lg">Hallmark Jewellery</h4>
            <p className="text-gray-500 text-sm">All Jewellery sold here is attested by Hallmark confirming purity of material used.</p>
          </div>
        </div>
        {/*single feature*/}
        {/*single feature*/}
        <div className="border border-orange-400 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src="images/customer.jpg"
            alt="Purity"
            className="w-12 h-12 object-cover"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">Best Customer Service</h4>
            <p className="text-gray-500 text-sm">Your comfort and satisfaction is out top priority.We are commited to answering all your problems and concerns anytime.</p>
          </div>
        </div>
        {/*single feature*/}
        
      </div>
    </div>
    {/*features end*/}
  </>
}