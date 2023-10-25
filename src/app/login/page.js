"use client"

import React from 'react';
import { auth } from '../firebase';
import { UserAuth } from '@/context/Authcontext';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';


const page = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        router.push("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);
  


  return (
    <div><div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
        <h1 lassName="text-gray-600 ml-3 cursor-pointer font-bold">{errorMsg}</h1>
        <p className="text-gray-600 mb-6 text-sm">
          Login if you are returning customer
        </p>
        <form action="">
          <div className="space-y-4">
            <div>
              <label className="text-gray-600 mb-2 block">Email Address</label>
              <input
                type="email"
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 input-box"
                placeholder="Enter Your Email"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }
              />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">Password</label>
              <input
                type="password"
                className="block w-full border input-box border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0"
                placeholder="Enter Your Password"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, pass: event.target.value }))
                }
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
            <Link href="#" className="text-orange-400">
              Forgot Password
            </Link>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="block w-full py-2 text-center bg-pink-100 border border-red-700 rounded hover:bg-pink-200 hover:text-pink-400 transition items-center justify-between uppercase font-roboto font-medium"
              disabled={submitButtonDisabled} onClick={handleSubmission}
            >
              Login
            </button>
          </div>
        </form>
        {/*loginwith*/}
        <div className="mt-6 flex justify-center relative">
          <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
            Or Login with
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200" />
        </div>
        <div className="flex mt-4 gap-3">

          <Link
            href="/" onClick={handleSignIn}
            className="w-full py-2 text-center text-white bg-yellow-600 rounded uppercase font-roboto font-medium text-sm  hover:bg-yellow-500"
          >
            Google
          </Link>
        </div>
        <p className="mt-4 text-gray-600 text-center">
          Don't have an account?{" "}
          <Link href="/register" className="text-orange-400">
            Register Now
          </Link>
        </p>
      </div>
    </div>
    </div>
  )
}

export default page