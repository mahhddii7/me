import { useContext, useState } from 'react'
import Picture from './Picture'
import Info from './Info'
import { contextApi } from '@/context';


const SectionOne = () => {
    const context = useContext(contextApi)
    const [active, setActive] = useState(false)
    setTimeout(() => {
        setActive(true)
    }, 500);
    return (
        <section className='flex flex-col md:flex-row pt-32 md:pt-0  h-svh relative overflow-hidden' ref={context.information}>
            <Picture active={active} />
            <Info />
            <div className={`md:w-1/2 w-10/12 bg-white absolute rotate-[60deg] md:rotate-[30deg] -top-[65%] md:-top-[40%] h-[150%] z-10 ${active ? 'side-left' : 'opacity-0'}`}></div>
            <div className="scroll-down absolute bottom-20 left-1/2  -translate-x-1/2 z-20">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    )
}

export default SectionOne