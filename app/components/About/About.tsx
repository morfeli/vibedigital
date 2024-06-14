import Logo from "../../../public/assets/vibedigital-icon-white.png";

export const About = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800  items-center justify-center grid md:grid-cols-2 gap-4">
      <div className="">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
          Who we are
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
          Crafting exceptional digital experiences for our clients.
        </p>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Our Values</h3>
          <p className="text-gray-600 dark:text-gray-400">
            At VibeDigital, we are committed to delivering the highest quality
            work while upholding the highest ethical standards. We value
            integrity, innovation, and a relentless pursuit of excellence in
            everything we do.
          </p>
          <h3 className="text-xl font-bold">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Our mission is to empower our clients to achieve their digital goals
            by providing cutting-edge web solutions that drive results. We
            strive to be a trusted partner, guiding our clients through the
            ever-evolving landscape of the digital world.
          </p>
          <h3 className="text-xl font-bold">Our Standards</h3>
          <p className="text-gray-600 dark:text-gray-400">
            At VibeDigital, we hold ourselves to the highest standards of
            quality and professionalism. We are committed to staying at the
            forefront of industry trends and technologies, ensuring that our
            clients receive the most innovative and effective solutions.
          </p>
        </div>
      </div>
      <div className="hidden md:block border border-slate-300 w-fit rounded-lg col-start-2">
        <img
          src={Logo}
          width="500"
          height="500"
          alt="Agency Logo"
          className="mx-auto object-cover"
        />
      </div>
    </section>
  );
};
