import React from "react";

const DynamicGrid = (props: any) => {
    return (
        <div className={`flex ${props.mainClass ? props.mainClass : ''} justify-center  w-full  `}>
            <div className={`grid grid-cols-${props.col ? props.col : 2} gap-${props.gap ? props.gap : '2'} ${props?.width ? (props?.widthType ? 'w-11/12 2xl:w-3/4' : 'w-full') : 'w-11/12 '} ${props.className ? props.className : ''} `}>
                {props.children}
            </div>
        </div>
    )
}

export default DynamicGrid