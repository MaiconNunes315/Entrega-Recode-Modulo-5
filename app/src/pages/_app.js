import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.css";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
