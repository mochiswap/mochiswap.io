import React, { Fragment, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { motion } from "framer-motion";
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid'


const steez = {
  width: "600px",
  height: "600px",
};

export default function Hero() {
  
  return (
    <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <a
                href="https://discord.gg/zAD9SAT7Ff"
                className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-pink-500 to-pink-600 rounded-full">
                  Connect with us online
                </span>
                <span className="ml-4 text-sm">Visit our Discord</span>
                <ChevronRightIcon className="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
              </a>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-800 sm:pb-5">
                  Community-driven,
                </span>
                <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-800 sm:pb-5"> Multi-chain Defi
                </span>
              </h1>
              <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl pt-4">
                Mochiswap is an experimental, open-source defi platform featuring an AMM, yield farms, single token auto-compounding vaults and more!
              </p>
              <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    {/* <div className="min-w-0 flex-1">
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                      />
                    </div> */}
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a href="https://bsc.mochiswap.io"
                        type="submit"
                        className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-pink-600 to-cyan-600 text-white font-medium hover:from-pink-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                      >
                        Launch BSC DApp
                      </a>
                    </div>

                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a href="https://harmony.mochiswap.io"
                        type="submit"
                        className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-cyan-600 to-pink-600 text-white font-medium hover:from-pink-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                      >
                        Launch Harmony DApp
                      </a>
                    </div>
                  </div>
               
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
              <motion.img
                className="ml-20 w-full"
                src="images/mochi400x400.png"
                alt=""
                style={steez}
                animate={{
                  delay: 2,
                  scale: [1, 3, 1],
                  opacity: [1, 0.4, 1],
                  rotate: [0, 720, 1440],
                }}
                transition={{
                  delay: 1,
                  ease: 'backInOut'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
