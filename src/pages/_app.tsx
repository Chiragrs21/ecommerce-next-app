import React from 'react';
import { Toaster } from 'react-hot-toast';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../../components';
import { StateContext } from '../../context/StateContext';



export default function App({ Component, pageProps }: AppProps) {
  return(
    <StateContext> 
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </StateContext>
  
)}
