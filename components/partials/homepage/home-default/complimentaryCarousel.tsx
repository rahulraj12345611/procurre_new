// // import CustomHeader from "@/components/customHeader";
// import { Avatar, Badge } from "@nextui-org/react";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { FaAngleRight } from "react-icons/fa";
// import DynamicGrid from "@/components/dynamicGrid";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 2.75,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

// const ComplimentaryCarasoul = (props: any) => {

//   const [isMobile, setIsMobile] = useState(false);
//   const [items, setItems] = useState<any>()
//   console.log(items, 'check elec device..')

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768); // You can adjust the breakpoint as needed
//     };

//     handleResize(); // Set initial value
//     window.addEventListener('resize', handleResize);
//     setItems(props?.data?.data?.data)

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <>
//       {/* <CustomHeader title="Complimentary Astrology Services" p={isMobile ? '2' : '10' } /> */}
//       {/* {isMobile && <div className=" rounded-tl-lg rounded-tr-lg p-2 mx-4 sm:mx-8 lg:mx-12 mb-8">
//         <div className="text-sm font-bold float-right">
//             swipe <FaAngleRight size={20} className="inline" />
//         </div>
//       </div>} */}

//       <DynamicGrid width={true} widthType={true} col='1'>
//         <div>
//           <Carousel
//             additionalTransfrom={0}
//             autoPlay={true}
//             autoPlaySpeed={3000}
//             centerMode={false}
//             className=""
//             containerClass="container-with-dots"
//             dotListClass=""
//             draggable={isMobile}
//             focusOnSelect={false}
//             infinite
//             itemClass=""
//             keyBoardControl
//             minimumTouchDrag={80}
//             pauseOnHover
//             arrows={false}
//             renderArrowsWhenDisabled={false}
//             renderButtonGroupOutside={false}
//             renderDotsOutside={false}
//             rewind={false}
//             rewindWithAnimation={false}
//             rtl={false}
//             showDots={false}
//             sliderClass=""
//             slidesToSlide={1}
//             swipeable={isMobile}
//             ssr={true}
//             responsive={responsive}
//           >
            
//             {/* {props?.data?.data?.data?.map((item: any, index: any) => {
//                 return (
//                   <Link href={"/horoscope/daily-horoscope"}>
//                     <CarouselCard title='Daily Horoscope' image="/today-horoscop-icon.webp" desc=' With the help of predictions know what is going to happen tomorrow. Get to read your daily horoscope for free every day.' />
//                   </Link>                
//                 )
//             })
//             } */}
//             <Link href={"/kundli"}>
//               <CarouselCard title='Free Kundli' image="/kundli-my-astroguruji---170.webp" desc='Get access to generate your Free Kundli under a minute at MyAstroguruji.' />
//             </Link>
//             <Link href={"/shubhmuhurat"}>
//               <CarouselCard title='Shubh Muharat' pad={true} image="/subhmuhrat.webp" desc=' Love holds your relationship, but compatibility makes the bond stronger!' />
//             </Link>
//             <Link href={"/match-making"}>
//               <CarouselCard title='Kundli Matching' image="/match-making.webp" desc=' Check your love compatibility calculated with the best Astrologers only at MyAstroguruji. Get your predictions done that too for free!' />
//             </Link>
//         </Carousel>

//         </div>
//       </DynamicGrid>

//     </>
//   );
// };


// const CarouselCard = (props: any) => {
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsMobile(window.innerWidth < 768); // You can adjust the breakpoint as needed
// //     };

// //     handleResize(); // Set initial value
// //     window.addEventListener('resize', handleResize);

// //     return () => {
// //       window.removeEventListener('resize', handleResize);
// //     };
// //   }, []);

//   return (
//     <>
//         <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
//         <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" >
//             <img className="peer absolute top-0 right-0 h-full w-full object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b" alt="product image" />
//             <img className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
//             {/* <div className="absolute  bottom-0 mb-4 flex space-x-4 w-full justify-center">
//             <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div> 
//             <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
//             <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
//             </div>  */}
//             <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
//             <span className="absolute top-0 left-0 m-2 rounded-full bg-red-300 px-2 text-center text-sm font-medium text-white">39% OFF</span> -->
//         </a>
//         <div className="mt-4 px-5 pb-5">
//             <a >
//             <h5 className="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
//             </a>
//             <div className="mt-2 mb-5 flex items-center justify-between">
//             <p>
//                 <span className="text-3xl font-bold text-slate-900">$449</span>
//                 <span className="text-sm text-slate-900 line-through">$699</span>
//             </p>
//             </div>
//             <a  className="flex items-center justify-center rounded-md bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
//             <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//             </svg>
//             Buy Now
//             </a>
//         </div>
//         </div>
//     </>
//   )
// }

// export default ComplimentaryCarasoul;