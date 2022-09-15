import React from 'react'
import Head from 'next/head'
import { StatisticCard } from '../components/StatisticCard'
export default function statistics() {
  return (
    <>
      <Head>
          <title>Statistics</title>
      </Head>
      <div className='flex w-full h-full'>
          <div className='flex flex-col px-1 py-3 w-full h-full border-purple-800 border-2 rounded'>
            <div className='h-0 grow overflow-x-auto scrollbar px-7 grid items-center gap-10 gap-y-10 grid-flow-col media-900:grid-cols-3 media-900:grid-rows-2'>
              <StatisticCard/>
              <StatisticCard/>
              <StatisticCard/>
              <StatisticCard/>
              <StatisticCard/>
              <StatisticCard/>
            </div>
          </div>
      </div>
    </>
  )
}
