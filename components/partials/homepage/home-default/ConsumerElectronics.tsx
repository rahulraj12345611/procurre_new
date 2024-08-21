import CustomHeader from "@/components/customerHeader";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "@/components/elements/products/product";
import Slider from "react-slick";
// import DynamicGrid from "@/components/dynamicGrid";
import Link from "next/link";
import DynamicGrid from "@/components/dynamicGrid";
import Image from "next/image";
import Config from "../../../../config.json";
import { FaShoppingCart } from "react-icons/fa";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2.75,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ConsumerElectornics = (props: any) => {

    return (
    <>
      <CustomHeader title='Featured Products' />

      <div className="w-full flex justify-center">
        {/* <ComplimentaryCarasoul data={props} /> */}

        <DynamicGrid width={true} widthType={true} col='1'>
        <div>
          <Carousel
            additionalTransfrom={0}
            autoPlay={true}
            autoPlaySpeed={3000}
            centerMode={false}
            className="h-auto w-full"
            containerClass="container-with-dots"
            dotListClass=""
            draggable={true}
            focusOnSelect={false}
            infinite
            itemClass="px-4"
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            arrows={false}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable={true}
            ssr={true}
            responsive={responsive}
          >
            
            {props?.data?.map((item: any, index: any) => {
                return (
                  // <Link href={"/"}>
                    <CarouselCard data={item}/>
                  // </Link>                
                )
            })
            }
        </Carousel>

        </div>
        </DynamicGrid>

      </div>
    </>
  );
};

const CarouselCard = (props: any) => {
  let item = props?.data;
  //   const [isMobile, setIsMobile] = useState(false);
  
  //   useEffect(() => {
  //     const handleResize = () => {
  //       setIsMobile(window.innerWidth < 768); // You can adjust the breakpoint as needed
  //     };
  
  //     handleResize(); // Set initial value
  //     window.addEventListener('resize', handleResize);
  
  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }, []);
  console.log(props, 'item checkkkk')
    return (
      <>
  <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
    <Link 
    href={`/product/${item?.productSlug}`}
    // as={`/product/${item?.productSlug}`}>
    className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
      <img
        className="absolute top-0 left-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        // src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        src={Config.S3URL+item?.containerName+ item?.image}
        alt="product image"
      />
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity group-hover:animate-ping group-hover:opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="1em"
        height="1em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
        />
      </svg>
      <span className="absolute top-0 left-0 m-2 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 px-2 text-center text-sm font-medium text-white">
        39% OFF
      </span>
    </Link>
    <div className="mt-4 px-5 pb-5">
      <Link href="/#">
        <h5 className="text-md tracking-tight text-slate-900">{item?.productName}</h5>
      </Link>
      <div className="mt-2 mb-5 flex items-center justify-between">
        <p>
          {item?.discountPrice ? (
            <>
              <span className="text-lg font-bold text-slate-900">₹{item?.discountPrice}</span>
              <span className="text-sm text-slate-900 line-through">₹{item?.price}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-slate-900">₹{item?.price}</span>
          )}
        </p>
      </div>
      <div className="flex space-x-2">
        <Link href="/#"
          
          className="flex-1 rounded-md bg-red-500 p-2 text-center font-medium text-white flex items-center justify-center space-x-2 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <FaShoppingCart className="text-base" size={10} />
          <span style={{ fontSize: '0.6rem' }}>ADD TO CART</span>
        </Link>
        <Link href="/#"
          className="flex-1 rounded-md bg-green-500 p-2 text-center font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <span style={{ fontSize: '0.6rem' }}>BUY NOW</span>
        </Link>
      </div>
    </div>
  </div>



      </>
    )
  }

export default ConsumerElectornics;
