import React, { FormEvent, useState } from 'react'
import { QuoteCard } from '../components/QuoteCard'
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import { Button } from '@material-ui/core';
export default function quotes() {

  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date(),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const [autor, setAutor] = useState<string | null>('')
  const [quote, setQuote] = useState<string | null>('')
  const [startValidation, setStartValidation] = useState<Boolean>(false)

  return (
    <div className='flex w-full h-full'>
      <div className='flex flex-col px-1 py-3 w-1/2 h-full border-purple-800 border-2 rounded'>
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
      </div>
      <div className='flex items-center justify-center grow'>
        <form className='w-96'>
          <p className='mb-10 text-xl'>Добавить цитату</p>
          <div className='relative w-full mb-8'>
            <label htmlFor="autor" className='absolute -top-[14px] left-4 px-1 bg-[#150E14]'>Авторы{startValidation && !autor? <span className='text-red-600'>*</span> : ''}</label>
            <input 
              type="text" 
              autoComplete='off' 
              id='autor' 
              onChange={(e) => {setAutor(e.target.value)}}
              className={`w-full text-white outline-none bg-transparent border-2 rounded-md py-2 px-[10px] ${startValidation && !autor? 'border-red-600' : 'border-purple-800'}`}
            />
          </div>
          <div className='relative w-full mb-5'>
            <label htmlFor="text" className='absolute -top-[14px] left-4 px-1 bg-[#150E14]'>Текст{startValidation && !quote? <span className='text-red-600'>*</span> : ''}</label>
            <textarea 
              autoComplete='off' 
              id='text' 
              onChange={(e) => {setQuote(e.target.value)}}
              className={`w-full h-28 resize-none outline-none text-white bg-transparent border-2 border-purple-800 rounded-md py-2 px-[10px] ${startValidation && !quote? 'border-red-600' : 'border-purple-800'}`}
              ></textarea>
          </div>
          <div className='text-right mb-5'>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Укажите дату"
                format="dd/MM/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                  }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <Button 
            color='primary' 
            variant='contained' 
            onClick={() => {setStartValidation(true)}}
            fullWidth>Добавить цитату</Button>
        </form>
      </div>
    </div>
  )
}
