import '@/styles/globals.css'
import Head from 'next/head';
import NavBar from '@/components/nav';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>YeungYeah&apos;s tool collection</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />

      <div className='h-8'></div>

      <footer className="mx-auto w-fit fixed bottom-0 inset-x-0 mt-5">@YeungYeah</footer>
    </>
  );
}
