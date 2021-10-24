import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid'
import Navbar from '../../components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative overflow-hidden flex-grow">
        <Navbar />
        <main>
          <Hero />
          {/* <Stats /> */}
        </main>
      </div>
      <Footer className="mb-auto"/>
    </div>
  )
}