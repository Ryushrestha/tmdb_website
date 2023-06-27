import PostState from '@/context/PostState'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
  <PostState>
  <Component {...pageProps} />
  </PostState>
  )
}
