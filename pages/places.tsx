import React from 'react'
import { PlaceCard } from '../components/PlaceCard'
import Head from 'next/head'
export default function places() {
  return (
    <>
      <Head>
          <title>Places</title>
      </Head>
      <div className='flex w-full h-full'>
          <div className='flex flex-col px-1 py-3 w-full h-full border-purple-800 border-2 rounded'>
            <div className='h-0 grow overflow-y-auto scrollbar px-7'>
                <PlaceCard coordinates={`X: 268 Y: 54 Z: 0`} location='home'/>
                <PlaceCard coordinates={`X: 268 Y: 54 Z: 0`} location='home'/>
                <PlaceCard coordinates={`X: 268 Y: 54 Z: 0`} location='home'/>
                <PlaceCard coordinates={`X: 268 Y: 54 Z: 0`} location='home'/>
                <PlaceCard coordinates={`X: 268 Y: 54 Z: 0`} location='home'/>
                <PlaceCard coordinates={`X: 268 Y: 54 Z: 0`} location='home'/>
                <PlaceCard coordinates={`X: 268 Y: 54 Z: 0`} location='home'/>
                <PlaceCard coordinates={`X: 268 Y: 54 Z: 0`} location='home'/>
                <PlaceCard coordinates={`X: 268 Y: 54 Z: 0`} location='home'/>
            </div>
          </div>
      </div>
    </>
  )
}
