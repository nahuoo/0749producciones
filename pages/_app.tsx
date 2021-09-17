import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import "@fontsource/alegreya-sans-sc"
import { ParallaxProvider } from 'react-scroll-parallax'

const theme = extendTheme({
  fonts: {
    link: 'Alegreya Sans SC',
    heading:'Arimo',
    body: 'Arimo',
  },
})

function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <ChakraProvider theme={theme}>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </ChakraProvider>
  )
}
export default MyApp
