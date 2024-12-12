import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'Software Developer',
      1500, // wait 1s before replacing "Mice" with "Hamsters"
      'Graphic Designer',
      1500,
      'Computer Operator',
      1500,
      'Typist',
      1500
    ]}
   
    speed={50}
   className='text-[2rem] md:text-[3rem] text-[#55a6a5] font-bold uppercase'
    repeat={Infinity}
  />
  )
}

export default TextEffect