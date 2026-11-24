import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import Portfolio from '../src/App';

export default function Home() {
  useEffect(() => {
    const loader = document.getElementById('preloader');
    const timeout = window.setTimeout(() => {
      loader.style.visibility = 'hidden';
      loader.style.opacity = '0';
    }, 350);
    function updateScroll() {
      document.getElementById('navbar').classList.toggle('nav-sticky', window.scrollY >= 50);
      document.getElementById('floatingButton').style.display = window.scrollY > 500 ? 'block' : 'none';
    }
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Daylin Armstead</title>
        <meta name="description" content="Daylin Armstead’s web and mobile development portfolio." />
        <meta property="og:image" content="/assets/images/ogimage.png" />
      </Head>
      <Portfolio />
      <Script src="/assets/js/bootstrap.bundle.min.js" />
      <Script src="/assets/js/aos.js" onReady={() => window.AOS.init({ easing: 'ease-in-out-sine', duration: 1000 })} />
    </>
  );
}
