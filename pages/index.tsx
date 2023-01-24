import Head from "next/head";
import HeroBanner from "@/components/HeroBanner";
import GalleryFoto from "@/sections/GalleryFoto";
import TestimoniVideo from "@/sections/TestimoniVideo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Soto Padang Stasiun Pulau Aia 1976</title>
        <meta
          name="description"
          content="Soto Padang Stasiun Pulau Aia 1976. Soto dan Kopi Lamo yang membawa Anda kembali menikmati memori jaman dahulu."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeroBanner />
      <GalleryFoto />
      <TestimoniVideo />
    </>
  );
}
