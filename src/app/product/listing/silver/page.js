import CommonListing from "@/components/CommonListing";
import { productBysubCategory } from "@/services/product";

export default async function MenAllProducts() {
  const getAllProducts = await productsubByCategory("necklace");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
