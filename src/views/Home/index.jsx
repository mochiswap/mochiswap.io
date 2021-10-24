import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid'
import Navbar from '../../components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';

export default function Home() {
  return (
    <div className="bg-gray-900 h-screen">
      <div className="relative overflow-hidden bg-red-900">
        <Navbar />
        <main>
          <Hero />
          {/* <Stats /> */}
        </main>
        {/* <Footer></Footer> */}
      </div>
    </div>
  )
}