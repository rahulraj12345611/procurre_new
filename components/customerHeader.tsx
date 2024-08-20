import React, {useState,useEffect} from "react";

const CustomHeader = (props: any) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // You can adjust the breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={`flex justify-center ${isMobile ? 'pb-3 pt-5' : `py-${props.p ? props.p : '10'}` }  ${props.mainClass?props.mainClass:''}  w-full `} >
      <div className={`flex`}>
        <div>
          <hr className="w-10 h-[1px]  bg-black float-right translate-y-[10px]" />
          <br />
          <hr className="w-20 h-[1px] bg-black translate-y-[-6px]" />
          <br />
          <hr className="w-10 h-[1px]  bg-black float-right translate-y-[-24px]" />
        </div>
        <h2 className={` ${isMobile ? 'text-xl' : 'text-2xl font-extrabold' }  text-black h1x-5 px-2 capitalize text-center tracking-wide  ${props.className?props.className:''}`}>
          {props.title}
        </h2>
        <div>
          <hr className="w-10 h-[1px]  bg-black  translate-y-[10px]" />
          <br />
          <hr className="w-20 h-[1px] bg-black translate-y-[-8px]" />
          <br />
          <hr className="w-10 h-[1px]  bg-black  translate-y-[-26px]" />
        </div>
      </div>
    </div>
  )
}

export default CustomHeader