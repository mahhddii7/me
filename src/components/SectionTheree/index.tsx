import { useContext } from 'react'
import { contextApi } from '@/context';
import CardCompany from './CardCompany';
import ronix from '../../assets/images/ronix.webp'
import dotin from '../../assets/images/dotin.png'
import otaghak from '../../assets/images/otaghak.png'

const SectionTheree = () => {
  const context = useContext(contextApi)
  return (
    <section className='w-full   z-30 p-10' ref={context.company}>
      <CardCompany
        firstText='It was my first work experience in this company.'
        img={ronix}
        c={'#a30a00'}
        link='https://ronixtools.com/en/'
        color='before:bg-gradient-to-tl from-[#a30a00] via-transparent'
        company='Ronix' >
        At first, the projects were coded with <span className="text-[gray]">HTML, CSS </span> and JavaScript. But after a short time, we updated our codes using <span className="text-[gray]">react js</span>.
         <br></br> I had a good experience with this company
      </CardCompany>
      <CardCompany
      link='https://www.dotin.ir/' img={dotin} c={'#166839'} color='before:bg-gradient-to-tl from-[#166839] via-transparent' company='Dotin' classname=' flex-row-reverse' >
        I am currently working full time in this company. I am responsible for leading the front team. Our main work is to create internal management panels for the organization
      </CardCompany>
      <CardCompany
      link='https://www.otaghak.com/'
        firstText='For a short time, I worked part-time on the projects of this company'
        img={otaghak} c={'#f0455e'} color='before:bg-gradient-to-tl from-[#f0455e] via-transparent to-transparent' company='Otaghak' >
        When I was a soldier
        I implemented a lottery landing page for this company.
        Good motions were used and it was a good challenge for me
      </CardCompany>
    </section>
  )
}

export default SectionTheree