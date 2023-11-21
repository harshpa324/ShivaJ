'use client'

import InputComponent from "@/components/FormElements/InputComponent";
import SelectComponent from "@/components/FormElements/SelectComponent";
import ComponentLevelLoader from "@/components/Loader/componentlevel";
import Notification from "@/components/Notification";
import { GlobalContext } from "@/context";
import { registerNewUser } from "@/services/register";
import { registrationFormControls } from "@/utils";
import { useRouter } from "next/navigation"; // Change this line
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  role: "customer",
};

const handleRegistrationAndLogin = async () => {
  const isValidEmailAddress = validator.isEmail(email);
  setError((e) => ({ ...e, password: null }));
  if (isValidEmailAddress) {
    try {
      
      await app.emailPasswordAuth.registerUser(email, password);
      return await handleLogin();
    } catch (err) {
      handleAuthenticationError(err, setError);
    }
  } else {
    setError((err) => ({ ...err, email: "Email is invalid." }));
  }
};

export default function Register() {
  const [formData, setFormData] = useState(initialFormData);
  const [isRegistered, setIsRegistered] = useState(false);
  const { pageLevelLoader, setPageLevelLoader, isAuthUser } =
    useContext(GlobalContext);

  const router = useRouter();

  function isFormValid() {
    return (
      formData &&
      formData.name &&
      formData.name.trim() !== "" &&
      formData.email &&
      formData.email.trim() !== "" &&
      formData.password &&
      formData.password.trim() !== ""
    );
  }

  async function handleRegisterOnSubmit() {
    setPageLevelLoader(true);
    const data = await registerNewUser(formData);

    if (data.success) {
      toast.success(data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setIsRegistered(true);
      setPageLevelLoader(false);
      setFormData(initialFormData);
    } else {
      toast.error(data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setPageLevelLoader(false);
      setFormData(initialFormData);
    }
  }
  

  useEffect(() => {
    if (isAuthUser) router.back();
  }, [isAuthUser]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl uppercase font-medium mb-1">{isRegistered ? "Registration Successfull!!!!" : "Create an account"}</h2>
        <h1 className="text-gray-600 ml-3 cursor-pointer font-bold"></h1>
        <p className="text-gray-600 mb-6 text-sm">
          {isRegistered ? "Click below to go to login page." : "Register if you don't have an account."}
        </p>
        {isRegistered ? (
          <button
            className="block w-full py-2 text-center bg-pink-100 border border-red-700 rounded hover:bg-pink-200 hover:text-pink-400 transition items-center justify-between uppercase font-roboto font-medium"
            onClick={() => router.push('/login')}
          >
            Login
          </button>
        ) : (
          <div className="space-y-4" >
            {registrationFormControls.map((controlItem) =>
              controlItem.componentType === "input" ? (
                <InputComponent
                  type={controlItem.type}
                  placeholder={controlItem.placeholder}
                  label={controlItem.label}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      [controlItem.id]: event.target.value,
                    });
                  }}
                  value={formData[controlItem.id]}
                />
              ) : controlItem.componentType === "select" ? (
                <SelectComponent
                  options={controlItem.options}
                  label={controlItem.label}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      [controlItem.id]: event.target.value,
                    });
                  }}
                  value={formData[controlItem.id]}
                />
              ) : null
            )}
            {/*<div className="flex items-center justify-between mt-6">
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
                </div>*/}
            <div className="mt-4">
              <button
                type="submit"
                className="block w-full py-2 text-center bg-pink-100 border border-red-700 rounded hover:bg-pink-200 hover:text-pink-400 transition items-center justify-between uppercase font-roboto font-medium"
                disabled={!isFormValid()}
                onClick={handleRegisterOnSubmit}
              >
                Create Account
                
              </button>
            </div>
          </div>
        )}
        {/* Login with 
        <div className="mt-6 flex justify-center relative">
          <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
            Or Signup with
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200" />
        </div>
        <div className="flex mt-4 gap-3">
          <Link
            href="/"
            className="w-full py-2 text-center text-white bg-yellow-600 rounded uppercase font-roboto font-medium text-sm hover:bg-yellow-500"
          >
            Google
          </Link>
        </div>*/}
        {isRegistered?null:(
        <p className="mt-4 text-gray-600 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-400">
            Login here
          </Link>
        </p>)}
      </div>
      <Notification />
    </div>
  );
}
