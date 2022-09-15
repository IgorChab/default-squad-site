import React from 'react'
import Head from 'next/head'
export default function statistics() {
  return (
    <>
      <Head>
          <title>Statistics</title>
      </Head>
      <div className='flex w-full h-full'>
          <div className='flex flex-col px-1 py-3 w-full h-full border-purple-800 border-2 rounded'>
            <div className='h-0 grow overflow-x-auto scrollbar px-7'>
              
            </div>
          </div>
      </div>
    </>
  )
}
