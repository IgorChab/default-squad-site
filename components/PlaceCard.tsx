import React, { FC } from 'react'

interface PlaceCardProps{
    location: string
    coordinates: string
}

export const PlaceCard: FC<PlaceCardProps> = ({coordinates, location}) => {
  return (
    <div className='p-7 border-b-slate-200/30 border-b-[1px]'>
        <div className='flex justify-between w-full'>
            <p>Локация: {location}</p>
            <p className='break-all'>{coordinates}</p>
        </div>
    </div>
  )
}
