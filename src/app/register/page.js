import React from 'react'

const page = () => {
    return (
        <div><div className="min-h-screen flex items-center justify-center bg-white">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl uppercase font-medium mb-1">Create an account</h2>
                <p className="text-gray-600 mb-6 text-sm">
                    Register if you don't have account.
                </p>
                <form action="">
                    <div className="space-y-4">
                        <div>
                            <label className="text-gray-600 mb-2 block">Email Address</label>
                            <input
                                type="fullname"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 input-box"
                                placeholder="Enter Your Full Name"
                            />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">Email Address</label>
                            <input
                                type="email"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 input-box"
                                placeholder="Enter Your Email"
                            />
                        </div>
                        <div>
                            <label className="text-gray-600 mb-2 block">Password</label>
                            <input
                                type="password"
                                className="block w-full border input-box border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0"
                                placeholder="Enter Your Password"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="agree"
                                className="text-orange-400 focus:ring-0 rounded-sm cursor-pointer"
                            />
                            <label htmlFor="agree" className="text-gray-600 ml-3 cursor-pointer">
                                Remember me
                            </label>
                        </div>


                    </div>
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="block w-full py-2 text-center bg-pink-100 border border-red-700 rounded hover:bg-pink-200 hover:text-pink-400 transition items-center justify-between uppercase font-roboto font-medium"
                        >
                            Create account
                        </button>
                    </div>
                </form>
                {/*loginwith*/}
                <div className="mt-6 flex justify-center relative">
                    <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
                        Or Signup with
                    </div>
                    <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200" />
                </div>
                <div className="flex mt-4 gap-3">

                    <a
                        href="#"
                        className="w-full py-2 text-center text-white bg-yellow-600 rounded uppercase font-roboto font-medium text-sm  hover:bg-yellow-500"
                    >
                        Google
                    </a>
                </div>
                <p className="mt-4 text-gray-600 text-center">
                    Already have a account?{" "}
                    <a href="/login" className="text-orange-400">
                        Login here
                    </a>
                </p>

            </div>
        </div>
        </div>
    )
}

export default page