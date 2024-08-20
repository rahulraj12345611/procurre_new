import React from "react";
// import RV from "../../constants/requiredVariables";
import Link from "next/link";
import {Card,CardHeader, CardFooter, Image, Button} from "@nextui-org/react";

const CarouselCard = (props: any) => {
  const { data } = props
  return (
    <>
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src={data?.image}
        width={200}
      />
      {/* <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Notify me
        </Button>
      </CardFooter> */}
    </Card>

    {/* <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
        <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        // src="https://nextui.org/images/card-example-3.jpeg"
        src={}
      />
    </Card> */}

    </>
  );
};

export default CarouselCard;
