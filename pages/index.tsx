import client from '@/apollo/client';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import { Home } from '@/gql/graphql';
import QUERY_HOME from '@/queries/home';
import Footer from '@/sections/Footer';
import GalleryFoto from '@/sections/GalleryFoto';
import TestimoniVideo from '@/sections/TestimoniVideo';
import Head from 'next/head';

type AppProps = {
  data: {
    home: Pick<
      Home,
      'dataWebsite' | 'fotoSlideshow' | 'galeriFoto' | 'testiVideo' | 'footer'
    >;
  };
};

const App = ({ data }: AppProps) => {
  const { dataWebsite, galeriFoto, fotoSlideshow, testiVideo, footer } =
    data.home;

  return (
    <>
      <Head>
        <title>Soto Padang Stasiun Pulau Aia 1976</title>
        <meta name="description" content={dataWebsite.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header
        title1={dataWebsite.title1}
        title2={dataWebsite.title2}
        title3={dataWebsite.title3}
      />
      <HeroBanner fotoSlideshow={fotoSlideshow.fotoSlideshow} />
      <GalleryFoto webmedia={galeriFoto.webmedia} judul={galeriFoto.judul} />
      <TestimoniVideo judul={testiVideo.judul} webmedia={testiVideo.webmedia} />
      <Footer alamat={footer.alamat} telpon={footer.telpon} />
    </>
  );
};

export default App;

export async function getStaticProps() {
  const { data } = await client.query({
    query: QUERY_HOME,
  });

  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 10,
  };
}
