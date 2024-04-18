import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { User } from "../interfaces/userInterface";
import { Alert, AlertProps } from "./Alert";
import { validateUserData } from "../utils/validateUser";
import { signupUser } from "../backendcalls/signup";

export const SignupForm = () => {
    const [details, setDetails] = useState<User>({userName: "null", userPassword: "null"});
    const [alert, setAlert] = useState<AlertProps | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(details);
        const { name, value } = e.target;
        setDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const signup = async () => {
        console.log(details);
        const valid = validateUserData(details);
        if (!valid) {
            setAlert({
                type: 'error',
                heading: 'Validation Error',
                data: 'Please provide valid details for signin.',
            });
            return;
        }

        const successSignIn = await signupUser(details);
        if (!successSignIn) {
            setAlert({
                type: 'error',
                heading: 'Signup Error',
                data: 'Username might be taken.',
            });
            return;
        }
        
        setAlert({
            type: 'success',
            heading: 'Successfully signed up!',
            data: '',
        });
        navigate(`/signin`);
        return;
    }

    return <>
        {alert && <Alert {...alert} />}
        <section className="bg-white dark:bg-gray-900">
            <div className="flex justify-center min-h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/5" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80")' }}>
                </div>

                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full">
                        <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                            Get your free account now.
                        </h1>

                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                            Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                        </p>

                        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Username</label>
                                <input 
                                    type="text" 
                                    placeholder="John"
                                    name="userName" 
                                    id="userName"  
                                    onChange={handleChange}
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                <input 
                                    type="password" 
                                    name="userPassword" 
                                    id="userPassword" 
                                    placeholder="Enter your password"
                                    onChange={handleChange} 
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
                                <input 
                                    type="password" 
                                    name="confirmUserPassword" 
                                    id="confirmUserPassword" 
                                    placeholder="Enter your password"
                                    onChange={handleChange}
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                                />
                            </div>

                            <div></div>

                            {/* <button
                                onClick={signup}
                                className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                <span>Sign Up </span>

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd" />
                                </svg>
                            </button> */}
                            <div className="mt-6">
                                <button 
                                    onClick={signup}
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                >
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}