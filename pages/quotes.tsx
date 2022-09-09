import React, {useRef, useState, useEffect} from 'react'
import { QuoteCard } from '../components/QuoteCard'
import { Button } from '@material-ui/core';
import {FormQuote} from '../components/FormQuote';
export default function quotes() {

  const [openForm, setOpenForm] = useState<Boolean>(false)
  const [animationEnd, setAnimationEnd] = useState<Boolean>(false)

  const ref = useRef<HTMLDivElement | null>(null)

  function useOutside(ref: any) {
    useEffect(() => {

      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target)) {
          setAnimationEnd(true)
          setTimeout(() => {
            setOpenForm(false)
          }, 1000)
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutside(ref)

  return (
    <div className='flex w-full h-full gap-10 media-900:relative'>
      <div className='flex flex-col px-1 py-3 w-1/2 media-900:w-full h-full border-purple-800 border-2 rounded relative z-20'>
        <div className='h-0 grow overflow-y-auto scrollbar'>
          <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='03.09.2022'/>
          <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
          <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
          <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
          <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='25.09.2022'/>
          <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
          <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
          <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
        </div>
        {!openForm&&
          <div className='media-900:block hidden'>
            <Button 
                color='primary' 
                variant='contained' 
                onClick={() => {setOpenForm(true); setAnimationEnd(false)}}
                fullWidth>Добавить цитату
            </Button>
          </div>
        }
        {openForm&&
          <div className={`w-full z-10 animate-smoothChange bottom-2 media-min-900:hidden ${animationEnd && 'animate-smoothChangeEnd'}`} ref={ref}>
            <FormQuote openForm={openForm}/>
          </div>
        }
      </div>
      <FormQuote/>
    </div>
  )
}
