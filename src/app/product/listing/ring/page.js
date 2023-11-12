import CommonListing from "@/components/CommonListing";
import { productBysubCategory } from "@/services/product";

export default async function MenAllProducts() {
  const getAllProducts = await productBysubCategory("ring");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}