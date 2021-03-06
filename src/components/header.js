import React from "react"

function Header() {

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
        <div className="relative h-full max-w-screen-xl mx-auto">
          <svg className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div data-todo-x-data="{ open: false }" className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <img className="h-8 w-auto sm:h-10" src={require('../images/logo.jpeg')} alt="" />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button data-todo-at-click="open = true" type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <span className="inline-flex rounded-md shadow">

              </span>
            </div>
          </nav>
        </div>

        <div className="absolute top-0 inset-x-0 p-2 md:hidden">
          <div className="rounded-lg shadow-md transition transform origin-top-right" data-todo-x-show="open" data-todo-x-transition-enter="duration-150 ease-out" data-todo-x-transition-enter-start="opacity-0 scale-95" data-todo-x-transition-enter-end="opacity-100 scale-100" data-todo-x-transition-leave="duration-100 ease-in" data-todo-x-transition-leave-start="opacity-100 scale-100" data-todo-x-transition-leave-end="opacity-0 scale-95">
            <div className="rounded-lg bg-white shadow-xs overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <img className="h-8 w-auto" src={require('../images/logo.jpeg')} alt="" />
                <div className="-mr-2">
                  <button data-todo-at-click="open = false" type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-4">
          <div className="text-center">
            <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              <span class="text-indigo-600">
                Order </span> your grocery from independent stores now!
          <br class="xl:hidden" />
            </h2>
            <div className={"mt-20"}>
              <iframe src={"https://www.videoask.com/f1rucbjec"}
                allow="camera; microphone; autoplay; encrypted-media;"
                width="100%"
                height="600px"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div class="mt-8 md:mt-0 md:order-1">
            <p class="text-right text-base leading-6 text-gray-400">
              &copy; All rights reserved for MyJam @ 2020
      </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;