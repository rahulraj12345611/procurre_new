import CustomHeader from "@/components/customerHeader";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselCard from "./carouselCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CategorySection = (props: any) => {
    // console.log(props?.data, 'props?.data?.data...')
  return (
    <>
      {/* <CustomHeader title='Flipkart Products' /> */}

      <div className="w-full flex justify-center">

        <Carousel
          additionalTransfrom={0}
          autoPlay={false}
          // autoPlaySpeed={3000}
          dotListClass="custom-dot-list-style"
          centerMode={false}
          className="px-4 2xl:w-2/3 w-11/12 h-[250px]"
          containerClass="container-with-dots"
          // dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
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
          swipeable
          ssr={true}
          responsive={responsive}
          itemClass="px-4"
        >
          {props?.data?.map((items: any, index: any) => {
            return (
              <CarouselCard key={items.productId} data={items} />
            )
          })
          }

        </Carousel>

      </div>

      {/* <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="container-with-dots"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="px-4"
      >
          {props?.data?.map((items: any, index: any) => {
            return (
              <CarouselCard key={items.productId} data={items} />
            )
          })
          }
      </Carousel> */}

    </>
  );
};

export default CategorySection;
