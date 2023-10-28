import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function MenAllProducts() {
  const getAllProducts = await productByCategory("diamond");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}