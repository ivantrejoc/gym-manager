import Image from "next/image";

const HorizontalNav = () => {
  return (
    <header className="w-full h-56 lg:h-20 relative bg-zinc-800 flex">
      <div className="flex flex-col lg:flex-row justify-center items-center lg: w-4/5 lg:gap-44 mx-auto my-auto">
        <div className="w-44 h-11 mx-auto mb-3 lg:mb-0 justify-center items-center inline-flex">
          <Image
            className="w-12 h-12"
            width={30}
            height={30}
            alt="Gym"
            src="/images/icons8-gym-50.png"
          />
          <p className="w-96 h-6 text-center text-white text-base font-medium leading-normal">
            Gym Manager
          </p>
        </div>
        <div className="w-96 h-6 mt-1 mb-3 lg:mb-0 justify-center items-center gap-4 lg:gap-10 inline-flex mx-auto">
          <a className="rounded-lg bg-yellow-500 py-2 px-2 lg:px-4 text-xs lg:text-base  text-white transition-all hover:shadow-lg hover:shadow-yellow-100/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer" data-ripple-light="true">
            Instructores
          </a>
          <a className="rounded-lg bg-yellow-500 py-2 px-2 lg:px-4 text-xs lg:text-base  text-white transition-all hover:shadow-lg hover:shadow-yellow-100/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer" data-ripple-light="true">
            Clases
          </a>
          <a className="rounded-lg bg-yellow-500 py-2 px-2 lg:px-4 text-xs lg:text-base  text-white transition-all hover:shadow-lg hover:shadow-yellow-100/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer" data-ripple-light="true">
            Planes
          </a>
          <a className="rounded-lg bg-yellow-500 py-2 px-2 lg:px-4 text-xs lg:text-base  text-white transition-all hover:shadow-lg hover:shadow-yellow-100/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer" data-ripple-light="true">
            Horarios
          </a>
        </div>

        <div className="flex items-center w-64 mx-auto h-10 bg-white rounded-lg ">
          <div className="w-full">
            <input
              type="search"
              className="w-full px-4 py-1 h-10 text-gray-800 rounded-full focus:outline-none"
              placeholder="search"
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex items-center bg-zinc-300 justify-center w-12 h-10 text-white rounded-r-lg hover:shadow-lg hover:shadow-lg hover:shadow-yellow-100/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
            >
              <Image
                className="search-alt"
                width={20}
                height={20}
                alt="Search alt"
                src="/images/lupa.png"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HorizontalNav;
