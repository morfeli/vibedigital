export const Hero = () => {
  return (
    <section className="bg-hero-pattern2 bg-cover bg-no-repeat	w-screen h-screen text-white">
      <div className="flex flex-col sm:h-screen sm:justify-between pt-20 xl:pl-6 border-white border-1 p">
        <p className="text-[8vw] font-geist-regular self-center pb-10 text-center px-8 sm:text-[7vw] sm:self-start sm:pl-5 sm:text-left sm:w-[80vw] md:text-6xl md:w-[650px] md:leading-[8rem] lg:text-7xl lg:w-[1000px] lg:leading-[8rem] lg:uppercase desktop-1440:text-8xl desktop-1440:w-[1200px] desktop-1440:leading-[13rem] desktop-1440:font-geist-thin">
          Transforming Visions Into Reality
        </p>
        <div className="desktop-1440:flex deskop-1440:items-center desktop-1440:justify-between font-geist-thin">
          <p className=" text-center p-4 px-2 text-[4.5vw] mini-tablet:px-6 sm:text-left sm:text-[3vw] sm:pb-40 md:text-sm md:pr-60 md:text-left lg:w-[900px] xl:text-lg xl:w-[1100px]">
            At VibeDigital we embrace a contemporary approach that blends
            cutting-edge technologies, modern design principles, and innovative
            strategies to provide our clients a seamless customer experience.
          </p>
          <button className="hidden desktop-1440:block text-md bg-orange1 h-fit px-12 py-4 rounded-full mr-20 text-3xl border-white border-2 shadow-sm shadow-white">
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
};
