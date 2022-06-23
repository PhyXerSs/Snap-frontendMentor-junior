import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import MenuContextProvider from '../appContext/MenuContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex w-screen h-screen bg-[#fafafa]" style={{fontFamily: "'Epilogue', sans-serif"}}>
      <MenuContextProvider>
        <Navbar/>
      </MenuContextProvider>
      <Component {...pageProps} />
    </div>
    )
}

export default MyApp
