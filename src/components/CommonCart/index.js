import { useRouter } from "next/navigation";
import ComponentLevelLoader from "../Loader/componentlevel";

export default function CommonCart({
  cartItems = [],
  handleDeleteCartItem,
  componentLevelLoader,
}) {
  const router = useRouter();

  return (
    <section className="h-screen bg-gray-100">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white shadow p-4 sm:p-8 max-w-screen-xl w-full">
          <div className="flow-root">
            {cartItems && cartItems.length ? (
              <ul>
                {cartItems.map((cartItem) => (
                  <li className="flex space-x-5 space-y-3 py-6" key={cartItem.id}>
                    <div className="w-1/4">
                      <img
                        src={
                          cartItem &&
                          cartItem.productID &&
                          cartItem.productID.imageUrl
                        }
                        alt="Product image"
                        className="h-24 w-25 max-w-full rounded-lg object-cover"
                      />
                    </div>
                    <div className="w-3/4">
                      <div className="grid grid-cols-2">
                        <div>
                          <p className="text-base font-semibold text-gray-900">
                            {cartItem &&
                              cartItem.productID &&
                              cartItem.productID.name}
                          </p>
                        </div>
                        <div className="flex items-end justify-between">
                          <p className="text-base font-semibold text-gray-950 text-right">
                            $
                            {cartItem &&
                              cartItem.productID &&
                              cartItem.productID.price}
                          </p>
                          <button
                            type="button"
                            className="font-medium text-yellow-700"
                            onClick={() => handleDeleteCartItem(cartItem._id)}
                          >
                            {componentLevelLoader &&
                            componentLevelLoader.loading &&
                            componentLevelLoader.id === cartItem._id ? (
                              <ComponentLevelLoader
                                text={"Removing"}
                                color={"#0000000"}
                                loading={
                                  componentLevelLoader &&
                                  componentLevelLoader.loading
                                }
                              />
                            ) : (
                              "Remove"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <h1 className="font-bold text-lg text-center">Your cart is Empty!</h1>
            )}
          </div>
          <div className="border-t border-b py-2">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">Subtotal</p>
              <p className="text-lg text-black font-semibold">
                $
                {cartItems && cartItems.length
                  ? cartItems.reduce(
                      (total, item) => item.productID.price + total,
                      0
                    )
                  : "0"}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">Shipping</p>
              <p className="text-lg text-black font-semibold">$0</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">Total</p>
              <p className="text-lg text-black font-semibold">
                $
                {cartItems && cartItems.length
                  ? cartItems.reduce(
                      (total, item) => item.productID.price + total,
                      0
                    )
                  : "0"}
              </p>
            </div>
            <div className="mt-5 text-center">
              <button
                onClick={() => router.push("/checkout")}
                disabled={cartItems && cartItems.length === 0}
                className="disabled:opacity-50 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg text-white font-medium uppercase tracking-wide"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
