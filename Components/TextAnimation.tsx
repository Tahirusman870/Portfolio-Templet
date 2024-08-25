import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Front-End-Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Ui-Ux Designer',
        1000,
        'SEO Expert',
        1000,
        'Freelancer',
        1000
      ]}
      speed={50}
      className="text-[2rem] md:text-[2rem] text-[#f18720] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextAnimation