import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
// import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid'

const navigation = [
  { name: 'BSC', href: 'https://bsc.mochiswap.io' },
  { name: 'Harmony', href: 'https://harmony.mochiswap.io' },
  // { name: 'NFTs', href: 'nft.mochiswap.io' },
  { name: 'Docs', href: 'https://docs.mochiswap.io' },
]

export default function Navbar() {
  return (
    <Popover as="header" className="relative">
      <div className="bg-gray-900 pt-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="#">
                <span className="sr-only">MochiSwap</span>
                <img
                  className="h-8 w-auto sm:h-10 rounded-3xl"
                  src="https://s3.us-west-1.amazonaws.com/tokens.mochiswap.io/images/mochi400x400.png"
                  alt=""
                />
              </a>
              <div className="pl-4 text-lg font-bold">Mochiswap</div>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="https://bsc.mochiswap.io"
              className="btn bg-yellow-500 btn-sm"
            >
              BSC
            </a>
            <a
              href="https://harmony.mochiswap.io"
              className="btn bg-cyan-600 btn-sm"
            >
              Harmony
            </a>
          </div>
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
          <div className="rounded-lg shadow-md bg-gray-800 ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto rounded-3xl"
                  src="https://s3.us-west-1.amazonaws.com/tokens.mochiswap.io/images/mochi400x400.png"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-grey-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            
            <div className="pt-5 pb-6">
              <div className="px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover> 
  )
}