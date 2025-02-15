

import me from '../../assets/images/me2.png'

interface Props {
    active: boolean
}

const Picture = (props: Props) => {

    return (
        <div className='lg:w-auto md:w-1/2 w-full lg:left-[15%] lg:absolute lg:top-2/4 lg:-translate-y-2/4 flex justify-center items-center mt-2 z-20'>
            <img src={me} alt="" className={`transition-all rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] drop-shadow-10Xl  ${props.active ? 'scall-anim': 'opacity-0'}`} />
        </div>
    )
}

export default Picture