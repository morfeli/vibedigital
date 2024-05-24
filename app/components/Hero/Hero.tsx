export const Hero = () => {
  return (
    <section className="bg-hero-pattern2 bg-cover bg-no-repeat	w-screen h-screen text-white">
      <div className="flex flex-col sm:h-screen sm:justify-between pt-20">
        <p className="text-[7vw] self-center sm:text-[5vw] sm:self-start sm:pl-5 font-geist-semibold lg:w-[700px] lg:text-7xl lg:leading-[6rem] lg:uppercase desktop-1440:text-9xl desktop-1440:w-[1200px] desktop-1440:leading-[13rem]">
          We Turn Visions Into Reality
        </p>
        <div className="desktop-1440:flex deskop-1440:items-center desktop-1440:justify-between font-geist-thin">
          <p className=" text-center pt-24 p-4 px-4 text-[3.8vw] mini-tablet:px-6 sm:text-left sm:text-[3vw] sm:pb-40 md:text-sm md:pr-60 md:text-left lg:w-[900px] xl:text-lg xl:w-[1100px]">
            At VibeDigital we embrace a contemporary approach that blends
            cutting-edge technologies, modern design principles, and innovative
            strategies to provide our clients a seamless customer experience.
          </p>
          <button className="hidden desktop-1440:block mt-24 text-md bg-orange1 h-fit px-12 py-4 rounded-full mr-20 text-3xl border-white border-2 shadow-sm shadow-white">
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
};
