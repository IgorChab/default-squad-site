import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayaut from '../components/MainLayout'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayaut>
      <Component {...pageProps} />
    </MainLayaut>
  )
}

export default MyApp
