import Head from 'next/head';
import App from './_app';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather API integration using Next.js and Material UI" />
      </Head>
      <App />
    </div>
  );
};

export default Home;