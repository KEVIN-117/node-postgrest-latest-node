import React from 'react';
import {Link, Outlet} from 'react-router-dom'


function App() {
  return (
      <>
          <body className="relative md:flex block gap-2 dark:bg-[#020e21] bg-white">
              <aside
                  className="md:sticky top-0 md:h-screen h-auto md:w-[10%] w-full flex flex-col md:border-r rounded-r-xl border-blue-600 md:gap-5 gap-5 px-1">
                  <nav className="">
                      <div
                          className="flex flex-row md:flex-col md:justify-center justify-between items-center border border-blue-600 bg-blue-600/25 rounded-xl">
                          <div className="block p-2">
                              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                                   viewBox="0 0 64 64">
                                  <linearGradient id="7v9jIz6DZNXGp18nfnOPra_ouWtcsgDBiwO_gr1" x1="32" x2="32"
                                                  y1="57.81" y2="6.19" gradientUnits="userSpaceOnUse">
                                      <stop offset="0" stopColor="#e6abff"></stop>
                                      <stop offset="1" stopColor="#6dc7ff"></stop>
                                  </linearGradient>
                                  <path fill="url(#7v9jIz6DZNXGp18nfnOPra_ouWtcsgDBiwO_gr1)"
                                        d="M29.12,33.97h-2.6c-0.2,0-0.4,0.04-0.58,0.11l0.02-5.32c1.31,4.13,6.05,4.98,10.53,5.42	c7.02,0.69,7.02,1.62,7.02,2.23c0,0.9,0,2.56-5.73,2.56c-5.3,0-6.27-1.08-6.65-3.32C30.97,34.68,30.11,33.97,29.12,33.97z M32,6.19	L10,19.01v25.98l7.04,4.1c0.85,0.5,1.62,0.11,1.9-0.06c0.29-0.16,0.96-0.65,0.96-1.64l0.09-27.9c0.01-0.83,0.68-1.5,1.51-1.5l3,0.02	c0.83,0,1.5,0.67,1.49,1.5l-0.01,4.3C27.17,20.17,31.12,18,36.87,18c7.74,0,11.75,2.88,12.25,8.81c0.04,0.46-0.12,0.93-0.44,1.28	c-0.33,0.35-0.78,0.54-1.24,0.54h-2.58c-0.95,0-1.8-0.62-2.03-1.54c-0.49-2.01-1.44-3.08-5.97-3.08c-4.76,0-4.76,1.5-4.76,2.13	c0,0.82,0,1.26,10.79,2.52c4.01,0.47,7.23,3.85,7.11,7.89C49.84,41.85,45.29,45,37.75,45v-0.03c-4.86,0-8.41-1.09-10.56-3.24	c-0.51-0.51-0.94-1.08-1.27-1.69L25.9,47.4c0,2.12-0.82,4.08-2.27,5.53L32,57.81l22-12.82V19.01L32,6.19z"></path>
                                  <linearGradient id="7v9jIz6DZNXGp18nfnOPrb_ouWtcsgDBiwO_gr2" x1="32" x2="32"
                                                  y1="61.97" y2="2.027" gradientUnits="userSpaceOnUse">
                                      <stop offset="0" stopColor="#c822ff"></stop>
                                      <stop offset="1" stopColor="#1a6dff"></stop>
                                  </linearGradient>
                                  <path fill="url(#7v9jIz6DZNXGp18nfnOPrb_ouWtcsgDBiwO_gr2)"
                                        d="M26.904,36.014c0.072,1.75,0.655,3.184,1.735,4.267c1.754,1.756,4.831,2.646,9.147,2.646	v0.026c3.813-0.005,10.168-0.885,10.168-6.689c0-3.789-2.003-5.091-9.315-6.062c-6.379-0.844-8.585-1.278-8.585-4.058	c0-4.178,5.122-4.178,6.804-4.178c4.962,0,7.089,1.187,7.96,4.62h2.219c-0.547-4.521-3.703-6.539-10.168-6.539	c-5.862,0-9.224,2.267-9.224,6.222c0,3.727,2.283,5.209,9.049,5.877c6.795,0.665,8.867,1.661,8.867,4.264	c0,4.087-4.16,4.611-7.784,4.611c-6.276,0-8.077-1.752-8.66-5.007H26.904z M58,18.44v27.12c0,1.07-0.57,2.06-1.49,2.6l-23,13.4	c-0.47,0.27-0.99,0.41-1.51,0.41s-1.04-0.14-1.51-0.41l-10.99-6.4c0.83-0.17,1.64-0.47,2.41-0.91h0.01l9.58,5.58	c0.31,0.19,0.69,0.19,1,0l23-13.4c0.31-0.18,0.5-0.51,0.5-0.87V18.44c0-0.36-0.19-0.69-0.5-0.87l-23-13.4c-0.31-0.19-0.69-0.19-1,0	l-23,13.4C8.19,17.75,8,18.08,8,18.44v27.12c0,0.36,0.19,0.69,0.5,0.87l3.682,2.15l3.784,2.203c1.224,0.713,2.699,0.711,3.946-0.005	c1.242-0.714,1.984-1.982,1.984-3.393L22,19.996l2,0.008l-0.104,27.385c0,2.131-1.117,4.048-2.987,5.123	c-0.938,0.539-1.962,0.808-2.983,0.808c-1.022,0-2.042-0.27-2.968-0.81l-3.78-2.202L7.49,48.16C6.57,47.62,6,46.63,6,45.56V18.44	c0-1.07,0.57-2.06,1.49-2.6l23-13.4c0.93-0.55,2.09-0.55,3.02,0l23,13.4C57.43,16.38,58,17.37,58,18.44z"></path>
                              </svg>
                          </div>
                          <button className="p-4">
                              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                   xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                   viewBox="0 0 24 24">
                                  <path fillRule="evenodd"
                                        d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
                                        clipRule="evenodd"/>
                              </svg>
                          </button>
                      </div>

                      <ul className="md:block flex justify-center items-start">
                          <li className="border border-blue-600 bg-blue-600/25 hover:bg-blue-600 md:flex-auto flex-1 md:rounded-xl md:first:my-2 md:last:my-2 mt-2 first:rounded-l-xl last:rounded-r-xl">
                              <Link
                                  className="flex md:justify-between justify-center items-center w-full h-full gap-5 py-4 px-5 text-gray-800 dark:text-white hover:text-slate-50"
                                  to="/client">
                                  <svg className="w-6 h-6 hover:text-slate-50k:text-white" aria-hidden="true"
                                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                       viewBox="0 0 24 24">
                                      <path fillRule="evenodd"
                                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
                                            clipRule="evenodd"/>
                                  </svg>
                                  <span className="md:block hidden">Client</span>
                              </Link>
                          </li>
                          <li className="border border-blue-600 bg-blue-600/25 hover:bg-blue-600 md:flex-auto flex-1 md:rounded-xl md:first:my-2 md:last:my-2 mt-2 first:rounded-l-xl last:rounded-r-xl">
                              <Link
                                  className="flex md:justify-between justify-center items-center w-full h-full gap-5 py-4 px-5 text-gray-800 dark:text-white hover:text-slate-50"
                             to="/invoices">
                              <svg className="w-6 h-6 hover:text-slate-50k:text-white" aria-hidden="true"
                                   xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M12 12v4m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                              </svg>
                              <span className="md:block hidden">Invoices</span>
                          </Link>
                      </li>
                      <li className="border border-blue-600 bg-blue-600/25 hover:bg-blue-600 md:flex-auto flex-1 md:rounded-xl md:first:my-2 md:last:my-2 mt-2 first:rounded-l-xl last:rounded-r-xl">
                          <Link className="flex md:justify-between justify-center items-center w-full h-full gap-5 py-4 px-5 text-gray-800 dark:text-white hover:text-slate-50"
                             to="/users">
                              <svg className="w-6 h-6 hover:text-slate-50k:text-white" aria-hidden="true"
                                   xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
                              </svg>
                              <span className="md:block hidden">Users</span>
                          </Link>
                      </li>
                      <li className="border border-blue-600 bg-blue-600/25 hover:bg-blue-600 md:flex-auto flex-1 md:rounded-xl md:first:my-2 md:last:my-2 mt-2 first:rounded-l-xl last:rounded-r-xl">
                          <Link className="flex md:justify-between justify-center items-center w-full h-full gap-5 py-4 px-5 text-gray-800 dark:text-white hover:text-slate-50"
                             to="/register">
                              <svg className="w-6 h-6 hover:text-slate-50 dark:text-white" aria-hidden="true"
                                   xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                   viewBox="0 0 24 24">
                                  <path
                                      d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z"/>
                              </svg>

                              <span className="md:block hidden">
                                  Register Invoice
                              </span>
                          </Link>
                      </li>


                  </ul>
              </nav>

                  <Link className="mt-auto group border border-red-600 bg-red-600/25 hover:bg-red-600 py-4 px-5 rounded-xl text-red-600 hover:text-slate-50 flex justify-between gap-5 text-center"
                     to="/">
                      <svg className="w-6 h-6 text-red-600 group-hover:text-slate-50" aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd"
                                d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                                clipRule="evenodd"/>
                      </svg>
                      Home
                  </Link>
              </aside>

              <main className="flex-1 block dark:text-slate-50 text-sky-600 p-3 border border-blue-600 rounded-xl">
                  <Outlet />
              </main>
          </body>
    </>
)
    ;
}

export default App;
