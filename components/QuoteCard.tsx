import React, { FC } from 'react'

interface QuoteCardProps{
    nickname: string
    text: string
    date: string
}

export const QuoteCard: FC<QuoteCardProps> = ({date, nickname, text}) => {
  return (
    <div className='p-7 flex justify-between'>
        <div className='flex flex-col gap-2'>
            <p>{nickname}</p>
            <p className='italic w-4/5 break-all'>«{text}»</p>
        </div>
        <div className='flex flex-col-reverse'>
            <p>{date}</p>
        </div>
    </div>
  )
}
