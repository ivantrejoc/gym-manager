import Image from "next/image";

const HorizontalNav = () => {
  return (
    <header className="w-full h-56 lg:h-20 relative bg-zinc-800 flex">
      <div className="flex flex-col lg:flex-row justify-center items-center lg: w-4/5 lg:gap-28 mx-auto my-auto">
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
        <div className="inline-flex rounded-md">
          <a
            href="#"
            className="border rounded-l-md bg-yellow-500   inline-flex items-center justify-center py-2 px-1 text-center text-sm font-normal text-gray-200 transition-all hover:text-white hover:bg-yellow-600 sm:px-6"
          >
            Instructores
          </a>
          <a
            href="#"
            className="border bg-yellow-500   inline-flex items-center justify-center py-2 px-1 text-center text-sm font-normal text-gray-200 transition-all hover:text-white hover:bg-yellow-600 sm:px-6"
          >
            Clases
          </a>
          <a
            href="#"
            className="border bg-yellow-500   inline-flex items-center justify-center py-2 px-1 text-center text-sm font-normal text-gray-200 transition-all hover:text-white hover:bg-yellow-600 sm:px-6"
          >
            Planes
          </a>
          <a
            href="#"
            className="border rounded-r-md bg-yellow-500   inline-flex items-center justify-center py-2 px-1 text-center text-sm font-normal text-gray-200 transition-all hover:text-white hover:bg-yellow-600 sm:px-6"
          >
            Horarios
          </a>
        </div>

        <div className="flex items-center w- mx-auto h-10 rounded-lg">
          <div className="w-full rounded-lg">
            <input
              type="search"
              className="w-full px-4 py-1 h-10 text-gray-800 rounded-l-lg focus:outline-none"
              placeholder="search"
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex items-center bg-zinc-300 justify-center w-12 h-10 text-white rounded-r-lg hover:shadow-lg hover:shadow-yellow-100/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
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
