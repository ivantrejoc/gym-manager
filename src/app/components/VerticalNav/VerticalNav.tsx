

const VerticalNav = () => {
  return (
    <div className="w-[280px] h-[927px] bg-neutral-100 flex-col justify-start items-start inline-flex">
    <div className="w-[280px] py-10 bg-white shadow flex-col justify-between items-start flex">
        <div className="flex-col justify-start items-start gap-[35px] flex">
            <div className="flex-col justify-start items-start gap-[15px] flex">
                <div className="w-[280px] h-[30px] pl-[35px] pr-[30px] py-2.5 bg-white bg-opacity-0 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-gray-500 text-base font-medium font-['Inter'] leading-normal">Home</div>
                </div>
                <div className="w-[280px] h-[30px] pl-[35px] pr-[30px] py-2.5 bg-white bg-opacity-0 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-gray-500 text-base font-medium font-['Inter'] leading-normal">Dashboard</div>
                </div>
                <div className="w-[280px] h-[30px] pl-[35px] pr-[22px] py-2.5 bg-blue-600 bg-opacity-5 border-r-2 border-blue-600 justify-between items-center inline-flex">
                    <div className="text-gray-500 text-base font-medium font-['Inter'] leading-normal">Clientes</div>
                    <div className="w-5 h-5 px-[2.10px] pt-[5.73px] pb-[5.75px] justify-center items-center flex" />
                </div>
                <div className="pl-[50px] flex-col justify-start items-start gap-[18px] flex">
                    <div className="w-[88px] h-[18px] text-yellow-400 text-sm font-medium font-['Inter'] leading-normal">Crear Cliente</div>
                    <div className="w-[88px] h-[18px] text-gray-500 text-sm font-medium font-['Inter'] leading-normal">Editar cliente</div>
                    <div className="w-[102px] h-[18px] text-gray-500 text-sm font-medium font-['Inter'] leading-normal">Eliminar cliente</div>
                </div>
                <div className="w-[280px] h-[30px] pl-[35px] pr-[22px] py-2.5 bg-blue-600 bg-opacity-5 border-r-2 border-blue-600 justify-between items-center inline-flex">
                    <div className="text-gray-500 text-base font-medium font-['Inter'] leading-normal">instructores</div>
                    <div className="w-5 h-5 px-[2.10px] pt-[5.73px] pb-[5.75px] justify-center items-center flex" />
                </div>
                <div className="pl-[50px] flex-col justify-start items-start gap-[18px] flex">
                    <div className="w-[107px] h-[18px] text-yellow-400 text-sm font-medium font-['Inter'] leading-normal">Crear Instructor</div>
                    <div className="w-[109px] h-[18px] text-gray-500 text-sm font-medium font-['Inter'] leading-normal">Editar Instructor</div>
                    <div className="w-[123px] h-[18px] text-gray-500 text-sm font-medium font-['Inter'] leading-normal">Eliminar Instructor</div>
                </div>
                <div className="w-[280px] h-[30px] pl-[35px] pr-[22px] py-2.5 bg-blue-600 bg-opacity-5 border-r-2 border-blue-600 justify-between items-center inline-flex">
                    <div className="text-gray-500 text-base font-medium font-['Inter'] leading-normal">Clases </div>
                    <div className="w-5 h-5 px-[2.10px] pt-[5.73px] pb-[5.75px] justify-center items-center flex" />
                </div>
                <div className="pl-[50px] flex-col justify-start items-start gap-[18px] flex">
                    <div className="w-[79px] h-[18px] text-yellow-400 text-sm font-medium font-['Inter'] leading-normal">Crear Clase</div>
                    <div className="w-[81px] h-[18px] text-gray-500 text-sm font-medium font-['Inter'] leading-normal">Editar Clase</div>
                    <div className="w-[95px] h-[18px] text-gray-500 text-sm font-medium font-['Inter'] leading-normal">Eliminar Clase</div>
                </div>
                <div className="w-[280px] h-[30px] pl-[35px] pr-[22px] py-2.5 bg-blue-600 bg-opacity-5 border-r-2 border-blue-600 justify-between items-center inline-flex">
                    <div className="text-gray-500 text-base font-medium font-['Inter'] leading-normal">Planes</div>
                    <div className="w-5 h-5 px-[2.10px] pt-[5.73px] pb-[5.75px] justify-center items-center flex" />
                </div>
                <div className="pl-[50px] flex-col justify-start items-start gap-[18px] flex">
                    <div className="w-[70px] h-[18px] text-yellow-400 text-sm font-medium font-['Inter'] leading-normal">Crear Plan</div>
                    <div className="w-[72px] h-[18px] text-gray-500 text-sm font-medium font-['Inter'] leading-normal">Editar Plan</div>
                    <div className="w-[86px] h-[18px] text-gray-500 text-sm font-medium font-['Inter'] leading-normal">Eliminar Plan</div>
                </div>
            </div>
        </div>
        <div className="bg-white bg-opacity-0 flex-col justify-start items-center gap-5 flex">
            <div className="flex-col justify-start items-start flex">
                <div className="w-[280px] h-[30px] pl-[35px] pr-[30px] py-2.5 bg-white bg-opacity-0 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-gray-500 text-base font-medium font-['Inter'] leading-normal">Nueva Venta</div>
                </div>
                <div className="w-[280px] h-[30px] pl-[35px] pr-[30px] py-2.5 bg-white bg-opacity-0 justify-start items-center gap-2.5 inline-flex">
                    <div className="text-zinc-800 text-base font-medium font-['Inter'] leading-normal">Log out</div>
                </div>
            </div>
        </div>
        <div className="w-[280px] h-10 pl-[35px] justify-start items-center gap-[15px] inline-flex">
            <div className="flex-col justify-start items-start inline-flex">
                <div className="text-gray-900 text-base font-medium font-['Inter'] leading-normal">Musharof</div>
                <div className="text-gray-500 text-sm font-normal font-['Inter'] leading-snug">hello@tailgrids.com</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default VerticalNav