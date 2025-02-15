

import { cn } from "../../../@/lib/utils";
import LetterPullup from "../../../@/components/magicui/letter-pullup";
import DotPattern from "../../../@/components/magicui/dot-pattern";
import style from './index.module.scss'
const Info = () => {
    return (
        <div className=" lg:w-full md:w-1/2 flex md w-full relative ">
            <div className={`${style.infoContent}  ${style.styleText}
             lg:absolute lg:right-44 md:w-[500px] lg:top-2/4 lg:-translate-y-2/4 z-10 flex h-[500px] flex-col
              items-center justify-center overflow-hidden relative m-auto w-full`}>
                <div className="z-10 w-full  whitespace-pre-wrap text-center md:text-5xl text-3xl font-medium tracking-tighter text-black dark:text-white">
                    <LetterPullup  words={"Hello, I am Mehdi"} className="text-4xl md:text-6xl" delay={0.05} />
                    <span className=" text-base tracking-normal">I work in the front field and I love challenges</span>
                </div>
                <DotPattern
                    className={cn(
                        "absolute inset-0 h-full w-full fill-neutral-400/80 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                    )}
                />
            </div>
        </div>
    )
}

export default Info