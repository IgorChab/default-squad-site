import React, { FC } from 'react'

interface TopBubblesCardProps {
    id: number
    nickname: string
    quantity: number
}
export const TopBubblesCard: FC<TopBubblesCardProps> = ({id, nickname, quantity}) => {
  return (
    <div className='p-7 border-b-slate-200/30 border-b-[1px]'>
        <div className='flex w-full justify-between'>
            <p className='w-[9px]'>{id}</p>
            <div className='w-[67px] text-center'>
              <p>{nickname}</p>
            </div>
            <p className='w-[37px] text-left'>{quantity}</p>
        </div>
    </div>
  )
}
