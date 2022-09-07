import { FC } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

interface MainProps{
  children: React.ReactNode
}

export const MainLayaut: FC<MainProps> = ({children}) => {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] h-full'>
      <Header/>
        <div className='text-white w-full px-48 py-5 h-full'>
          {children}
        </div>
      <Footer/>
    </div>
  )
}

export default MainLayaut
