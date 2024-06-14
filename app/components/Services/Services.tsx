export const Services = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Elevate Your Digital Presence
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our team of experts offers a wide range of services to help you
              achieve your digital goals.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="flex h-full flex-col justify-between bg-white p-6 ">
              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  Web Development
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Crafting custom, responsive websites that drive results.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button>Learn More</button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="flex h-full flex-col justify-between bg-white p-6 ">
              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  Mobile App Development
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Crafting intuitive and engaging mobile experiences.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button>Learn More</button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="flex h-full flex-col justify-between bg-white p-6">
              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  Graphic Design
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Crafting visually stunning designs that captivate your
                  audience.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button>Learn More</button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="flex h-full flex-col justify-between bg-white p-6">
              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  Brand Identities
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Crafting memorable and impactful brand identities.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button>Learn More</button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="flex h-full flex-col justify-between bg-white p-6">
              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  Creative Direction
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Guiding your vision and bringing it to life.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button>Learn More</button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="flex h-full flex-col justify-between bg-white p-6">
              <div>
                <h3 className="text-xl font-bold tracking-tight">
                  Code Audits
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  A comprehensive review and examination of your source code.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// function BrushIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
//       <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
//     </svg>
//   )
// }

// function CodeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="16 18 22 12 16 6" />
//       <polyline points="8 6 2 12 8 18" />
//     </svg>
//   )
// }

// function LightbulbIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
//       <path d="M9 18h6" />
//       <path d="M10 22h4" />
//     </svg>
//   )
// }

// function PaletteIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
//       <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
//       <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
//       <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
//       <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
//     </svg>
//   )
// }

// function SmartphoneIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
//       <path d="M12 18h.01" />
//     </svg>
//   )
// }
