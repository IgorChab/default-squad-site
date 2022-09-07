import React, { FC } from 'react'

interface PlaceCardProps{
    location: string
    coordinates: string
}

export const PlaceCard: FC<PlaceCardProps> = ({coordinates, location}) => {
  return (
    <div className='p-7'>
        <div className='flex justify-between w-full'>
            <p>Локация: {location}</p>
            <p className='break-all'>{coordinates}</p>
        </div>
    </div>
  )
}
