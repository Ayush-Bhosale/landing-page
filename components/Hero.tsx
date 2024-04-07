import Link from 'next/link';
import Button from './Button';
import Image from 'next/image';


const Hero = () => {
  
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row mt-10">
      <div className="hero-map " />
      <div className="relative flex flex-1 items-start justify-center mt-4 lg:w-2/3">
  <video
    src="/Flexagram.mp4"
    className="featured-video"
    autoPlay
    loop
    style={{ width: '200%', maxWidth: '100%', height: 'auto', objectFit: 'cover' }}
  />
</div>
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <div className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]">
        </div>
        <h1 className="bold-52 lg:bold-86">Unleash Your Talent On Ultimate Platform</h1>
        <p className="regular-16 mt-6 text-white xl:max-w-[520px]">
          Empower Yourself with top-tier talent and collabroate with industry leaders to drive success.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-violet-500">
            1k+
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
        <button className='btn_green rounded-full font-bold'>
        <Link href="https://flexagram.vercel.app">       
        <span className="flex items-center">
          Explore Now!
        </span>
          </Link>
        </button>
         

        <button className='btn_white_text rounded-full font-bold'>
        <Link href="https://flexagram.vercel.app">       
        <span className="flex items-center">
          <img src="/play.svg" alt="Play icon" className="mr-2" /> {/* Assuming play.svg is in the public folder */}
          Get Started?
        </span>
          </Link>
        </button>
        
        </div>
      </div>

    

    </section>
  );
};

export default Hero;
