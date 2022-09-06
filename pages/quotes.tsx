import React from 'react'
import { QuoteCard } from '../components/QuoteCard'

export default function quotes() {
  return (
    <div className='flex bg-orange-300 w-full h-full'>
      <div className='w-1/2 bg-green-300 h-full overflow-y-auto'>
        <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
        <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
        <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
        <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
        <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
        <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
        <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
      </div>
      <div>
        <form>
          <p>Добавить цитату</p>
          <label htmlFor="autor">Автор</label>
          <input type="text" id='autor'/>
          <label htmlFor="text">Текст</label>
          <input type="text" id='text'/>
        </form>
      </div>
    </div>
  )
}
