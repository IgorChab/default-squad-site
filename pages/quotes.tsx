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

  return (
    <div className='flex w-full h-full'>
      <div className='px-1 w-1/2 h-full border-purple-800 border-2 rounded'>
        <div className='h-[500px] overflow-y-auto scrollbar'>
          <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
          <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
          <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
          <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
          <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
          <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
          <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
          <QuoteCard nickname='ruslan perdezh' text='aaaaaaa' date='06.09.2022'/>
        </div>
      </div>
      <div className='flex items-center justify-center grow'>
        <form className='w-96'>
          <p className='mb-10 text-xl'>Добавить цитату</p>
          <div className='relative w-full mb-8'>
            <label htmlFor="autor" className='absolute -top-[14px] left-4 px-1 bg-[#150E14]'>Автор</label>
            <input type="text" autoComplete='off' id='autor' className='w-full text-white outline-none bg-transparent border-2 border-purple-800 rounded-md py-2 px-[10px]'/>
          </div>
          <div className='relative w-full mb-5'>
            <label htmlFor="text" className='absolute -top-[14px] left-4 px-1 bg-[#150E14]'>Текст</label>
            <input type="text" autoComplete='off' id='text' className='w-full outline-none text-white bg-transparent border-2 border-purple-800 rounded-md py-2 px-[10px]'/>
          </div>
          <div className='text-right mb-5'>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Укажите дату"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <Button color='primary' variant='contained' fullWidth >Добавить цитату</Button>
        </form>
      </div>
    </div>
  )
}
