import { useContext } from 'react'
import { VelocityScroll } from "../../../@/components/magicui/scroll-based-velocity";
import IconCloud from "../../../@/components/magicui/icon-cloud";
import { contextApi } from '@/context';
import style from './index.module.scss'
const SectionTwo = () => {
    const context = useContext(contextApi)
    const slugs = [
        "typescript",
        "javascript",
        "dart",
        "react",
        "flutter",
        "html5",
        "css3",
        "postgresql",
        "vercel",
        "docker",
        "git",
        "jira",
        "github",
        "gitlab",
        "visualstudiocode",
        "androidstudio",
        "figma",
        "jquery",
        "adobexd",
        "Axios",
        "canvas",
    ];

    return (
        <section className={` w-full relative overflow-hidden`} ref={context.skills}>
            <div className='mb-[16rem] pt-16'>
                <VelocityScroll
                    text="My Skills"
                    default_velocity={3}
                    className={`${style.styleText}  text-center transition-all z-10 relative text-8xl flex gap-8 font-bold tracking-[0.1em] text-[#fff] drop-shadow-sm  md:text-7xl md:leading-[5rem] whitespace-nowrap`}
                />
            </div>
            <div className=" pointer-events-none  relative z-10 flex m-auto h-auto w-1/2 items-center justify-center overflow-hidden rounded-lg ">
                <IconCloud iconSlugs={slugs} />
            </div>
        </section>
    )
}

export default SectionTwo