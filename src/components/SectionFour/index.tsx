import { contextApi } from '@/context'
import { useContext } from 'react'
import instagram from '../../assets/images/instagram.svg'
import telegram from '../../assets/images/telegram.svg'
import linkedin from '../../assets/images/linkedin.svg'
import github from '../../assets/images/github.svg'

const SectionFour = () => {
  const context = useContext(contextApi)
  return (
    <div className=' relative z-30 mb-4 bottom-16 pointer-events-auto' ref={context.contactUs}>
      <div className="flex justify-center gap-4">
        <a target='_blank' href="https://www.instagram.com/mehdinajafii78/" className=" rounded-full transition-all bg-white p-1 relative group ">
          <img src={instagram} className=' group-hover:-top-2 group-hover:p-1 bg-white rounded-full top-0  relative transition-all' alt="" width={40} />
        </a>
        <a target='_blank' href="https://t.me/Mehdii_najafii" className="rounded-full bg-white p-1 relative group">
          <img src={telegram} alt="" className=' group-hover:-top-2 group-hover:p-1 bg-white rounded-full top-0  relative transition-all' width={40} />
        </a>
        <a target='_blank' href="https://www.linkedin.com/in/mahdinajafi/" className="rounded-full bg-white p-1 relative group">
          <img src={linkedin} alt="" className=' group-hover:-top-2 group-hover:p-1 bg-white rounded-full top-0  relative transition-all' width={40} />
        </a>
        <a target='_blank' href="https://github.com/mahhddii7" className="rounded-full bg-white p-1 relative group">
          <img src={github} alt="" className=' group-hover:-top-2 group-hover:p-1 bg-white rounded-full top-0  relative transition-all' width={40} />
        </a>
      </div>
    </div>
  )
}

export default SectionFour