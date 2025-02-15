

import React, { ReactNode } from 'react'
import BoxReveal from "../../../@/components/magicui/box-reveal";
import DotPattern from '../../../@/components/magicui/dot-pattern';
import { cn } from '../../../@/lib/utils';
interface Props {
    classname?: string
    company: string
    color: string
    c: string
    link: string
    img: string
    firstText?: string
    description?: ReactNode
    children?: React.ReactNode | React.ReactNode[]
}

const CardCompany = (props: Props) => {
    return (
        <div className={`md:flex  relative z-30 style-text overflow-hidden ${props.classname ?? ''} `}>
            <div className={`w-full md:w-1/2 md:mb-20 min-h-[300px] bg-gray pointer-events-auto border-gray-200 rounded-lg relative shadow-[]
               ${props.color} before:w-full before:h-full before:[clip-path:polygon(100%_0%,_100%_100%,_0%_100%)]
             `}>
                 <DotPattern
                    className={cn(
                        "absolute inset-0 h-full w-full fill-neutral-400/80 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                    )}
                />
                <img src={props.img} className=' max-w-full h-auto md:h-[400px] m-auto' alt="" />

            </div>
            <div className="w-full md:w-1/2 pl-5 mb-16 md:mb-0 ">
                <BoxReveal boxColor={props.c} duration={0.5}>
                    <p className="text-[3.5rem] text-[#fff] font-semibold">
                        {props.company}<span className="text-[gray]">.</span>
                    </p>
                </BoxReveal>
                <BoxReveal boxColor={"gray"} duration={0.5}>
                    <h2 className="mt-[.5rem] text-[#fff] text-[1rem]">
                        {props.firstText}
                    </h2>
                </BoxReveal>
                <BoxReveal boxColor={"gray"} duration={0.5} Delay={0.5}>
                    <h3 className="mt-[.5rem] text-[#fff] text-[1rem]">
                        {props.children}
                    </h3>
                </BoxReveal>
                <BoxReveal boxColor={"gray"} duration={0.5} Delay={0.75}>
                    <a href={props.link} target='_blank'><button className={`mt-10 relative z-30 pointer-events-auto rounded-sm p-2 bg-white`}>view Website</button></a>
                </BoxReveal>
            </div>
        </div>
    )


}


export default CardCompany

