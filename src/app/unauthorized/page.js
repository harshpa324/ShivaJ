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
                You don't have access to view this page!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}