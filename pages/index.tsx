import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import HeaderDefault from "../components/shared/headers/HeaderDefault";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ConsumerElectornics from "@/components/partials/homepage/home-default/ConsumerElectronics";
import CategorySection from "@/components/partials/homepage/home-default/categorySection";
import FooterFullwidth from "@/components/shared/footers/FooterFullWidth";
import HomeDefaultDealOfDay from "@/components/partials/homepage/home-default/HomeDefaultDealOfDay";
import { connect, useDispatch, useSelector } from "react-redux";
import { dealOfDayApi } from "@/api/actionreducer/action/Common.action";

export default function IndexPage() {
  const dispatch = useDispatch<any>();

  const [winWidth, setWinWidth] = useState<any>(true);
  const [isLoading, setIsLoading] = useState(false);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  let HomeBannersList = [
    {
        "bannerId": 98,
        "title": "Banner",
        "link": "https://procurre.com/tapes2",
        "content": "<p>banner</p>\n",
        "position": 0,
        "image": "Img_1721903221722.jpeg",
        "imagePath": "banner/",
        "isActive": 1
    },
    {
      "bannerId": 98,
      "title": "Banner",
      "link": "https://procurre.com/tapes2",
      "content": "<p>banner</p>\n",
      "position": 0,
      "image": "Img_1721903221722.jpeg",
      "imagePath": "banner/",
      "isActive": 1
  }
  ]
  let deals = {
      collections: [
        {
            "promotionId": null,
            "promotionFlag": null,
            "promotionType": null,
            "promotionProductYid": null,
            "promotionProductYSlug": null,
            "taxType": 2,
            "taxValue": "5",
            "productId": 7862,
            "productName": "Flipkart Security Bag SB2.5 8.5 inch x 11 inch | Pack 2000 | 55 Microns",
            "skuId": "15745",
            "isSimplified": 0,
            "quantity": 1,
            "rating": null,
            "description": "<p>A simple, sure-fire way to keep your customers happy is ensuring that even small items come in proper packaging. These security bags from Flipkart, which features a multiple-layer 50 (+5) micron plastic construction, hot-melt adhesive, and lip-to-lip closure, ensure that your items reach safely without any damage during the transit.</p>\n",
            "sortOrder": 1,
            "price": "3960.40",
            "productSlug": "flipkart-security-bag-sb25-85-inch-x-11-inch-|-pack-2000-|-55-microns",
            "isActive": 1,
            "hasStock": 0,
            "outOfStockThreshold": null,
            "containerName": "1-rnr-products/",
            "image": "https://assets.hyperpure.com/data/images/data/images/campaign/24835ad5-3a0d-4572-a667-f5b6c466ef421671353854.png",
            // "image": "https://d1jasgl02bodhl.cloudfront.net/category/Img_1717668331989.jpeg",
            "defaultImage": "1",
            "ratingCount": "0",
            "reviewCount": "0",
            "skuName": "SB2.5_2000",
            "productDiscount": null,
            "productSpecial": null,
            "wishlistProductId": null,
            "pricerefer": "",
            "flag": "",
            "stockStatus": "inStock",
            "wishListStatus": 0
        },
        {
            "promotionId": null,
            "promotionFlag": null,
            "promotionType": null,
            "promotionProductYid": null,
            "promotionProductYSlug": null,
            "taxType": 2,
            "taxValue": "18",
            "productId": 7842,
            "productName": "Flipkart Security Bag SB2.5 8.5 inch x 11 inch | Pack 2000 | 55 Microns",
            "skuId": "15705",
            "isSimplified": 0,
            "quantity": 1,
            "rating": null,
            "description": "We are launching this Shipping label seeing to the important of each and every order that process from flipkart seller.Shipping labels need to be handled carefully as they contain vital information about product shipment, customer location and also other critical data that logistics team requires to keep track of order shipment through the supply chain.",
            "sortOrder": 1,
            "price": "3406.78",
            "productSlug": "flipkart-transparent-security-bag-sb35-18-inch-x-14-inch-|-pack-1000-|-52-micron",
            "isActive": 1,
            "hasStock": 0,
            "outOfStockThreshold": null,
            "containerName": "1-rnr-products/",
            "image": "https://assets.hyperpure.com/data/images/data/images/campaign/20f254b7-6300-4ef0-9857-ebec0669844b1671353854.png",
            // "image": "https://d1jasgl02bodhl.cloudfront.net/category/Img_1708270123191.jpeg",
            "defaultImage": "1",
            "ratingCount": "0",
            "reviewCount": "0",
            "skuName": "TSB3.5_1000",
            "productDiscount": null,
            "productSpecial": null,
            "wishlistProductId": null,
            "pricerefer": "",
            "flag": "",
            "stockStatus": "inStock",
            "wishListStatus": 0
        },
        {
            "promotionId": null,
            "promotionFlag": null,
            "promotionType": null,
            "promotionProductYid": null,
            "promotionProductYSlug": null,
            "taxType": 2,
            "taxValue": "18",
            "productId": 7768,
            "productName": "Flipkart Security Bag SB2.5 8.5 inch x 11 inch | Pack 2000 | 55 Microns",
            "skuId": "15557",
            "isSimplified": 0,
            "quantity": 1,
            "rating": null,
            "description": "We are launching this Shipping label seeing to the important of each and every order that process from flipkart seller.Shipping labels need to be handled carefully as they contain vital information about product shipment, customer location and also other critical data that logistics team requires to keep track of order shipment through the supply chain.",
            "sortOrder": 1,
            "price": "3661.02",
            "productSlug": "flipkart-security-bag-sb2-13-inch-x-10-inch-|-2000-pack-|-52-mircron",
            "isActive": 1,
            "hasStock": 0,
            "outOfStockThreshold": null,
            "containerName": "1-rnr-products/",
            "image": "https://assets.hyperpure.com/data/images/data/images/campaign/5c5bee5e-1362-4b43-8c51-8c15af0fb0271671353854.png",
            // "image": "https://d1jasgl02bodhl.cloudfront.net/category/Img_1708270002763.jpeg",
            "defaultImage": "1",
            "ratingCount": "0",
            "reviewCount": "0",
            "skuName": "SB2_2000",
            "productDiscount": "3587.29",
            "productSpecial": null,
            "wishlistProductId": null,
            "pricerefer": "3587.29",
            "flag": 0,
            "stockStatus": "inStock",
            "wishListStatus": 0
        },
        {
            "promotionId": null,
            "promotionFlag": null,
            "promotionType": null,
            "promotionProductYid": null,
            "promotionProductYSlug": null,
            "taxType": 2,
            "taxValue": "18",
            "productId": 7735,
            "productName": "Swiggy Tapes | L : 55 m | W : 1 Inch | T : 42 micron | 120 Rolls",
            "skuId": "16130",
            "isSimplified": 0,
            "quantity": 1,
            "rating": null,
            "description": "<p>Embracing sustainability, we proudly use eco-friendly paper bags for packaging Swiggy Products, reflecting our commitment to a greener planet in every delicious delivery.</p>\n",
            "sortOrder": 1,
            "price": "2224.00",
            "productSlug": "swiggy-tapes-|-l--55-m-|-w--1-inch-|-t--42-micron-|-120-rolls",
            "isActive": 1,
            "hasStock": 0,
            "outOfStockThreshold": null,
            "containerName": "1-rnr-products/",
            "image": "https://assets.hyperpure.com/data/images/data/images/campaign/453d37a0-1fd4-4460-ab94-d02b9f5b7e011671353854.png",
            // "image": "https://d1jasgl02bodhl.cloudfront.net/category/Img_1708270099085.jpeg",
            "defaultImage": "1",
            "ratingCount": "0",
            "reviewCount": "0",
            "skuName": "S17_120",
            "productDiscount": null,
            "productSpecial": null,
            "wishlistProductId": null,
            "pricerefer": "",
            "flag": "",
            "stockStatus": "inStock",
            "wishListStatus": 0
        },
        {
            "promotionId": null,
            "promotionFlag": null,
            "promotionType": null,
            "promotionProductYid": null,
            "promotionProductYSlug": null,
            "taxType": 2,
            "taxValue": "18",
            "productId": 7739,
            "productName": "Swiggy Tapes | L : 55 m | W : 1 Inch | T : 42 micron | 960 Rolls",
            "skuId": "15498",
            "isSimplified": 1,
            "quantity": 1,
            "rating": null,
            "description": "<p>Embracing sustainability, we proudly use eco-friendly paper bags for packaging Swiggy Products, reflecting our commitment to a greener planet in every delicious delivery.</p>\n",
            "sortOrder": 1,
            "price": "20515.25",
            "productSlug": "swiggy-tapes-|-l--55-m-|-w--1-inch-|-t--42-micron-|-960-rolls",
            "isActive": 1,
            "hasStock": 0,
            "outOfStockThreshold": null,
            "containerName": "1-rnr-products/",
            "image": "https://assets.hyperpure.com/data/images/data/images/campaign/8e8965c7-8bcc-4946-a3b9-674f98e4ad4b1671353853.png",
            // "image": "https://d1jasgl02bodhl.cloudfront.net/category/Img_1708153140407.jpeg",
            "defaultImage": "1",
            "ratingCount": "0",
            "reviewCount": "0",
            "skuName": "S17_960-1",
            "productDiscount": null,
            "productSpecial": null,
            "wishlistProductId": null,
            "pricerefer": "",
            "flag": "",
            "stockStatus": "inStock",
            "wishListStatus": 0
        },
        {
            "promotionId": null,
            "promotionFlag": null,
            "promotionType": null,
            "promotionProductYid": null,
            "promotionProductYSlug": null,
            "taxType": 2,
            "taxValue": "18",
            "productId": 7687,
            "productName": "Swiggy Paper Bag | 100 GSM | With Handle | W:9 X G:9 X H:8 Inches | 500 Pack",
            "skuId": "15394",
            "isSimplified": 1,
            "quantity": 1,
            "rating": null,
            "description": "<p>Embracing sustainability, we proudly use eco-friendly paper bags for packaging Swiggy Products, reflecting our commitment to a greener planet in every delicious delivery.</p>\n",
            "sortOrder": 1,
            "price": "6092.37",
            "productSlug": "swiggy-paper-bag-|-100-gsm-|-with-handle-|-w9-x-g9-x-h8-inches-|-500-pack",
            "isActive": 1,
            "hasStock": 0,
            "outOfStockThreshold": null,
            "containerName": "1-rnr-products/",
            "image": "https://assets.hyperpure.com/data/images/data/images/campaign/827dcda2-cc0c-483b-b73f-98ce6a06f9051671353854.png",
            // "image": "https://d1jasgl02bodhl.cloudfront.net/category/Img_1717591507056.jpeg",
            "defaultImage": "1",
            "ratingCount": "0",
            "reviewCount": "0",
            "skuName": "S07_500-1",
            "productDiscount": null,
            "productSpecial": null,
            "wishlistProductId": null,
            "pricerefer": "",
            "flag": "",
            "stockStatus": "inStock",
            "wishListStatus": 0
        },
    ],
  }
  // let deals = useSelector((s: any) => s?.collection);

  const getHomePages = async () => {
    const resData = await dispatch(dealOfDayApi());
    setFeaturedProducts(resData?.data);
    setIsLoading(false);
  };


  useEffect(() => {
    window.innerWidth > 700 ? setWinWidth(true) : setWinWidth(false);
    window.addEventListener("resize", () => {
      window.innerWidth > 700 ? setWinWidth(true) : setWinWidth(false);
    });
  }, [winWidth]);

  useEffect(() => {
    setIsLoading(true);
    getHomePages();
  }, [dispatch]);

  console.log(featuredProducts, 'dealsData...')

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


  return (
    <>
    {/* <HeaderDefault /> */}
    <div className=" w-full md:h-[525px] h-[200px] flex justify-center">
        <div className=" 2xl:h-28 w-full md:h-[525px] h-[200px]">
          <Carousel
            autoPlay={true}
            // autoFocus={true}
            interval={3000}
            className="md:h-[525px] h-150"
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
          >
            {HomeBannersList?.map(
              (items: any, index: any) => {
                return (
                  <div className="w-full  md:h-[500px] h-[200px]" key={index}>

                    <Link
                      // target="_blank"
                      href={`${items?.Link}`}
                      className=" "
                    >
                      <Image 
                        src={`/static/img/Home_banner_1.jpeg`}
                        alt="bannerimg"
                        className="w-full md:h-[480px] h-[200px] object-fill"
                        width="0"
                        height={500}
                        sizes="100vw"
                        unoptimized
                      />
                      {/* <Image src={`https://new-myastroguruji.s3.ap-south-1.amazonaws.com/banners/1709661313255-Consult-India's-Expert-Astrologer.webp`}
                        alt={items?.BannerImage}
                        className="w-full md:h-[480px] h-[200px] object-fill"
                        width="0"
                        height={500}
                        sizes="100vw"
                        unoptimized
                      /> */}
                    </Link>
                  </div>
                );
              }
            )}
          </Carousel>
        </div>
    </div>
    {/* <CategorySection data={deals.collections}/>
    <ConsumerElectornics data={featuredProducts} /> */}
    {/* <HomeDefaultDealOfDay data={deals.collections} /> */}
    {/* <FooterFullwidth /> */}
    </>

  );
}
