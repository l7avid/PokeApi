import React, { useState } from 'react'
import { logOutInReducer } from '../login/slice/LoginSlice';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const NavBarIn = () => {

    const dispatch = useDispatch();

    const loggingOut = async(event) => {
        event.preventDefault();
        dispatch(logOutInReducer())
    }
    
  return (
      <div className="min-h-full">
          <nav className="bg-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between h-16">
                      <div className="flex items-center">
                          <div className="flex-shrink-0">
                              <img className="h-8 w-15" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Workflow" />
                          </div>
                          <div className="hidden md:block">
                              <div className="ml-10 flex items-baseline space-x-4">
                                  <Link to="/pokelist" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">PokeList</Link>

                                  <Link to="/favorites" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Favorites</Link>

                              </div>
                          </div>
                      </div>
                      <div className="hidden md:block">
                          <div className="ml-4 flex items-center md:ml-6">
                              {/* <!-- Profile dropdown --> */}
                              <h3 style={{color: "white"}}>User123</h3>
                              <div className="ml-3 relative"> 
                                  <div>
                                      <button onClick={(event) => loggingOut(event)} style={{ color: "white" }} type="button" className="max-w-xs bg-gray-800 flex items-center text-sm focus:outline-none" id="Login" aria-expanded="false" aria-haspopup="true">
                                          Log Out
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
                          <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                              <span className="sr-only">Open main menu</span>

                              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                              </svg>

                              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                          </button>
                      </div>
                  </div>
              </div>

              <div className="md:hidden" id="mobile-menu">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                      <Link to="/pokelist" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">PokeList</Link>

                      <Link to="/favorites" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Favorites</Link>

                  </div>
              </div>
          </nav>

          {/* <header className="bg-white shadow">
              <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <h1 className="text-3xl font-bold text-gray-900">Poke API</h1>
              </div>
          </header> */}
          {/* <main>
              <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  <div className="px-4 py-6 sm:px-0">
                      
                  </div>
              </div>
          </main> */}
      </div>
  )
}

export default NavBarIn
