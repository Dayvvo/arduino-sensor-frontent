import '../styles/globals.css'
import '../styles/helpers.scss'
import '../styles/style.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [isServer,setIsServer] = useState(true);
  useEffect(()=>{
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
    setIsServer(false);
  },[])
  if (isServer) {
    return(
      <></>
    )
  }
  return <Component {...pageProps} />
}
export default MyApp
