
import CommonListing from "@/components/CommonListing";
import { getAllAdminProducts } from "@/services/product";

import { GlobalContext } from "@/context";




export default async function AdminAllProducts() {
  

  const allAdminProducts = await getAllAdminProducts()

  return <CommonListing data={allAdminProducts && allAdminProducts.data} />
}