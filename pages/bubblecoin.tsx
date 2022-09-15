import React from 'react'
import { Chart } from '../components/Chart'
import Head from 'next/head'
export default function bubblecoin() {
  return (
    <>
      <Head>
        <title>Bubblecoin</title>
      </Head>
      <div className='flex w-full h-full'>
        <div className='flex flex-col px-1 py-3 w-full h-full border-purple-800 border-2 rounded'>
          <div className='h-0 grow overflow-y-auto scrollbar flex'>
            <div className='relative h-[45vh] w-[69vw] m-auto flex items-center mobile-tablet:h-[70vh] laptop:mx-auto laptop:pt-10'>
              <Chart/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
