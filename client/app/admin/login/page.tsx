"use client"
import Image from "next/image";
import {FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { AppState } from "@/redux/store";
import toast from 'react-hot-toast';
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
import { setIsAuthenticated } from "@/redux/slice/authSlice";



interface LoginDetails {
  email: string;
  password: string;
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    err: unknown;
    message: string;
  } | null>(null);
  const {isAuthenticated} = useSelector((state: AppState) => state.auth);

  const router = useRouter();
  const dispatch = useDispatch()
  


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const body: LoginDetails = {
        email: emailRef.current?.value as string ,
        password: passwordRef.current?.value as string,
    };
    
    try {
        if (body.email === 'owoyeminiyi2@gmail.com' && body.password === 'Niyi090451@') {

            dispatch(setIsAuthenticated(true));

            toast.success('Login successful, Redirecting to Home');
            router.push('/admin')
            
        } else {
            toast.error('Invalid email or password');
        }
    } catch (err: any) {
      let errorMessage = 'Internal server error, please try again';

      if (err.response) {
        // Backend returned a non-2xx status code
        errorMessage = err.response.data?.error || err.response.data?.message || 'Something went wrong';
        console.error('Response Error:', err.response);
      } else if (err.request) {
        // Request was made but no response received
        errorMessage = 'No response from server. Please check your internet or try again later.';
        console.error('Request Error:', err.request);
      } else {
        // Other errors (e.g., bad config)
        errorMessage = err.message || 'Unexpected error occurred.';
        console.error('General Error:', err.message);
      }
      setSubmitStatus({
        success: false,
        err: err,
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  
  return (
    <div className="relative flex justify-center rounded-lg my-24 items-center pt-6 mx-auto w-[99%] md:w-[50%] bg-gradient-to-br from-primary_background to-secondary_background">
      <div className="container mx-auto px-4">
        <div className="text-center items-center  justify-center mb-8 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-delugia italic mb-4">Log
            <span className="text-primary_button">in</span>
          </h2>
        </div>

        <div>
            <form onSubmit={handleSubmit} className="bg-primary_button mb-10 p-8 rounded-xl shadow-lg">
                <div className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#1E1B23] dark:text-[#F2F2F2] mb-2">
                        Email Address
                        </label>
                        <input
                        type="email"
                        id="email"
                        ref={emailRef}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="you@example.com"
                        required
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-[#1E1B23] dark:text-[#F2F2F2] mb-2">
                        Password
                        </label>
                        <input
                        type={showPassword ? 'text' : "password"}
                        id="password"
                        ref={passwordRef}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                        placeholder="Password"
                        required
                        />

                        <button
                        type="button"
                        className="absolute right-3 top-[65%] transform -translate-y-1/2 text-gray-400"
                        onClick={() => setShowPassword(!showPassword)}
                        >
                        {showPassword ? <FaRegEye className="h-5 w-5" /> : <FaRegEyeSlash className="h-5 w-5" />}
                        </button>
                    </div>


                    {submitStatus && (
                        <div
                        className={`p-4 rounded-md ${
                            submitStatus.success
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}
                        >
                        {submitStatus.message}
                        </div>
                    )}

                    <button
                        type="submit"
                        className={`w-full ${
                        isSubmitting
                            ? 'bg-[#D77A8B] cursor-not-allowed'
                            : 'primary'
                        } text-black hover:bg-secondary_button bg-white font-medium py-3 px-6 rounded-lg transition-colors`}
                    >
                        {isSubmitting ? <BiLoaderAlt className="mx-auto text-2xl h-4 w-4 animate-spin"/> : 'Login'}
                    </button>
                </div>
                <div className="flex mt-4 space-x-2 items-center text-center align-middle">
                    <input
                        type='checkbox'
                        id='remember-me'
                        className="checked:bg-pink-500"
                        ref={checkboxRef}
                    />
                    <label htmlFor="remember-me" className="text-sm font-medium text-[#1E1B23] dark:text-[#F2F2F2]">
                        Remember me
                    </label>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
