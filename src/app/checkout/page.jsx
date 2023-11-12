"use client";

export default function Unauthorized() {
  return (
    <div>
      <div className="min-h-screen flex max-w-screen items-center bg-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
            <div className="bg-white shadow">
              <div className="px-4 py-6 sm:px-8 sm:py-10 flex flex-col gap-5">
                <h2 className="font-bold text-lg">
                  <p>Dear Valued Customer,</p>

                  <p> We appreciate your interest in our jewellery collection. Currently, our online purchasing system is undergoing maintenance. We apologize for any inconvenience caused.</p>

                  <p> For your convenience, we invite you to visit our shop locally.</p>

                  <p> Our team will be delighted to assist you in person and ensure a seamless shopping experience.</p>

                  <p> Thank you for your understanding. We look forward to serving you at our physical store.</p>

                  <p> Best regards,</p>

                  <p> Shiva Jewellers</p>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}