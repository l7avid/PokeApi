import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logInInReducer } from '../login/slice/LoginSlice';
import { Link } from 'react-router-dom';

const NavBarOut = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loggingIn = async (event) => {
        event.preventDefault();
        navigate('/pokelist')
        dispatch(logInInReducer())
    }

    return (
        <div className="min-h-full">
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-8 w-8" src="https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Pic-Background.png" alt="Workflow" />
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                {/* <!-- Profile dropdown --> */}
                                <div className="ml-3 relative">
                                    <div>
                                        <button onClick={(event) => loggingIn(event)} style={{ color: "white" }} type="button" className="max-w-xs bg-gray-800 flex items-center text-sm focus:outline-none" id="Login" aria-expanded="false" aria-haspopup="true">
                                            Log In
                                        </button>
                                    </div>

                                    {/* <!--
                                  Dropdown menu, show/hide based on menu state.

                                  Entering: "transition ease-out duration-100"
                                  From: "transform opacity-0 scale-95"
                                  To: "transform opacity-100 scale-100"
                                  Leaving: "transition ease-in duration-75"
                                  From: "transform opacity-100 scale-100"
                                  To: "transform opacity-0 scale-95"
              --> */}
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {/* <!-- Mobile menu button --> */}
                            <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                {/* <!--
                              Heroicon name: outline/menu

                              Menu open: "hidden", Menu closed: "block"
            --> */}
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                {/* <!--
                              Heroicon name: outline/x

                              Menu open: "block", Menu closed: "hidden"
            --> */}
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className="md:hidden" id="mobile-menu">
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="mt-3 px-2 space-y-1">
                            <Link to="/pokelist" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Log In</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Please login</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* <!-- Replace with your content --> */}
                    <div className="px-4 py-6 sm:px-0">

                    </div>
                    {/* <!-- /End replace --> */}
                </div>
            </main>
        </div>
    )
}

export default NavBarOut
