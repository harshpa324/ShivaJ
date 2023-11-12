import CommonListing from "@/components/CommonListing";
import { productBysubCategory } from "@/services/product";

export default async function earringAllProducts() {
  const getAllProducts = await productBysubCategory("earring");
  
  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}