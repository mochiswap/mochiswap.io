import React, { Fragment, useEffect } from 'react'
// import { motion } from "framer-motion";

/* This example requires Tailwind CSS v2.0+ */
const stats = [
  { name: 'Liquidity', stat: '1.23mm' },
  { name: 'Trades Last 24 hours', stat: '4.56k' },
  { name: '24 Hour Volume', stat: '1.2mm' },
  { name: 'Total Pairs', stat: '210' },
]

export default function Example() {
  return (
    <div className="bg-gray-800 pb-80">
      {/* <h3 className="bg-gray-800 text-lg leading-6 font-medium text-gray-300 p-10">Current Stats</h3> */}
      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-4">
        {stats.map((item) => (
          <div key={item.name} className="px-4 bg-gray-900 shadow rounded-lg overflow-hidden sm:p-6 mx-5 my-10">
            <dt className="text-3xl font-medium text-gray-300 truncate text-center">{item.stat}</dt>
            <dd className="mt-1 text-sm font-semibold text-gray-500 text-center">{item.name}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}