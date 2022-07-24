import React, { useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { RiFacebookFill, RiArrowLeftRightFill } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { BsPlus, BsDash } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Button, HeadingText, Text } from "../../components/global";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const bannerImg = [
    "/assets/images/Products/1.webp",
    "/assets/images/Products/2.webp",
    "/assets/images/Products/3.webp",
    "/assets/images/Products/4.webp",
  ];

  return (
    <div className="container mx-auto">
      <div>
        <p className="text-sm">
          Home <span className="font-black">&gt;</span> Nvision N190HD 19 / N185HD 18.5 / N200HD 20
          / V190H 19 Monitor 60hz, | HDMI | VGA | LED Display
        </p>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-9 grid grid-cols-12">
          <div className="col-span-5">
            <div className="mx-auto">
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {bannerImg.map((img, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="flex justify-center align-middle">
                        <Image src={img} alt="Banner" width="350" height="350" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper3"
              >
                {bannerImg.map((img, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="flex justify-center align-middle">
                        <Image src={img} alt="Banner" width="350" height="350" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="col-span-7 pl-5 pr-12">
            <Text
              text="RAKK"
              fontSize="text-xs"
              textColor="text-gray-400"
              customStyle="mb-2 inline-flex hover:cursor-auto hover:text-amber-500"
            />
            <HeadingText
              text="Rakk Tandus 87 Keys Multi-Color Hotswappable Switch,Outemu Blue switch Clicky and
              Tactile Mechanical Gaming Keyboard"
              fontSize="text-2xl"
              textColor="text-slate-800"
              customStyle="font-sans font-normal tracking-wide"
              customContainerStyle="mb-2"
            />
            <div className="flex justify-items-center mb-2">
              <ReactStars size={25} value={1} edit={false} classNames="mr-1" />
              <Text
                text="28 reviews"
                fontSize="text-sm"
                textColor="text-gray-600"
                customContainerStyle="flex items-center"
              />
            </div>
            <div className="bg-blue-700 flex w-20 justify-center items-center py-1 mb-2">
              <RiFacebookFill className="text-white mr-1" />
              <Text text="share" fontSize="text-sm" textColor="text-white" />
            </div>
            <div className="flex">
              {/* <p className="text-gray-400 text-sm mr-1">Available: </p> */}
              <Text
                text="Available: "
                fontSize="text-sm"
                textColor="text-gray-400"
                customStyle="mr-1"
              />
              <Text
                text="In Stock"
                fontSize="text-sm"
                textColor="text-amber-500"
                customStyle="font-bold mr-1"
              />
            </div>
            <div className="border-t-2 my-4"></div>
            <div className="flex justify-between mb-5">
              <div>
                <Text text="&#8369;1,395.00" fontSize="text-4xl" textColor="text-slate-800" />
              </div>
              <div className="flex items-center">
                <FiHeart className="mr-1 text-xl text-orange-500" />
                <Text text="Add to Wishlist" />
              </div>
              <div className="flex items-center">
                <RiArrowLeftRightFill className="mr-1 text-xl text-orange-500" />
                <Text text="Add to Compare" />
              </div>
            </div>
            <div className="mb-5">
              <Text text="Quantity" fontSize="text-sm" customStyle="font-thin" />
              <div className="inline-flex items-center relative px-2 h-10 w-32 border border-gray-300 rounded-full">
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="h-7 border-none w-full focus:outline-none"
                />
                <div className="flex">
                  <BsPlus className="bg-gray-100 mr-2" />
                  <BsDash className="bg-gray-100" />
                </div>
              </div>
            </div>
            <div className="flex">
              <Button
                icon={<FaCartArrowDown className="mr-2 text-lg" />}
                text="Add to cart"
                bgColor="bg-yellow-400"
                textColor="text-white"
                custonStyle="mr-4 hover:bg-slate-700"
              />
              <Button
                text="Buy It Now"
                bgColor="bg-slate-700"
                textColor="text-white"
                custonStyle="hover:bg-yellow-400"
              />
            </div>
          </div>
        </div>
        <div className="bg-blue-500 col-span-3">HELLO 2</div>
      </div>
    </div>
  );
};

export default Product;
