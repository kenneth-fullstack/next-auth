/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

// import { BsFillEyeFill } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import products from "../data";

// Components
import Card from "../components/card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const bannerImg = [
    "/assets/images/Banners/Banner1.jpg",
    "/assets/images/Banners/Banner2.jpg",
    "/assets/images/Banners/Banner3.jpg",
    "/assets/images/Banners/Banner4.jpg",
    "/assets/images/Banners/Banner5.jpg",
    "/assets/images/Banners/Banner6.jpg",
  ];

  return (
    <div>
      <Head>
        <title>PC Link | PC Builder and Accessories</title>
        <meta name="description" content="Generated by Mike van Peeren" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {bannerImg.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={img} alt="Banner" width="100%" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="container mx-auto py-4">
          <h1 className="text-3xl font-bold">Components</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => {
              return <Card key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
