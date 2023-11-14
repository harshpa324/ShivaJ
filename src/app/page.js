import CommonListing from "@/components/CommonListing";
import { getAllAdminProducts } from "@/services/product";
import { productBysubCategory } from "@/services/product";
import Link from "next/link";

export default async function Home() {
  const getAllProducts = await getAllAdminProducts();
  const firstEightProducts = getAllProducts?.data.slice(1, 5);

  const getp = await productBysubCategory("necklace");
  const s1 = getp?.data.slice(0, 4);

  return (
    <div>
      {/* banner */}
      <div
        className="bg-cover bg-no-repeat bg-center py-20 md:py-36"
        style={{ backgroundImage: 'url("images/banner.jpg")' }}
      >
        <div className="container pt-32">
          <div className="mt-14 pt-2">
            <Link
              href="/product/listing/all-products"
              className="bg-orange-400 border border-orange-400 text-white px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-orange-400 transition"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
      {/* banner */}
      
      {/* categories */}
      <div className="container py-8 md:py-16">
        <h2 className="text-2xl font-medium text-red-700 uppercase mb-6">
          View products by category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* single category (repeat for each category) */}
          <div className="relative rounded-sm overflow-hidden group">
            <img src="images/gold.jpg" alt="Cat1" className="w-full" />
            <Link
              href="/product/listing/gold"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              Gold
            </Link>
          </div>
          {/* single category end */}
        </div>
      </div>
      {/* categories end */}
      
      {/* products */}
      <div className="container pb-8">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          NEW PRODUCTS
        </h2>
        <CommonListing data={firstEightProducts} />
        <CommonListing data={s1} />
      </div>
      {/* products end */}
      
      {/* features */}
      <div className="container py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
          {/* single feature (repeat for each feature) */}
          <div className="border border-orange-400 rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img
              src="images\Bureau_of_Indian_Standards_Logo.png"
              alt="Purity"
              className="w-12 h-12 object-cover"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">Hallmark Jewellery</h4>
              <p className="text-gray-500 text-sm">
                All Jewellery sold here is attested by Hallmark confirming purity of material used.
              </p>
            </div>
          </div>
          {/* single feature end */}
        </div>
      </div>
      {/* features end */}
    </div>
  );
}
