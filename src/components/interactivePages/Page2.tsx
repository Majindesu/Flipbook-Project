
//@ts-ignore
const Page2 = ({ goToPage }) => {
  return (
    <>
      <div className="">
        <div className="relative z-10 h-full w-full grid grid-rows-4 grid-flow-col gap-4 md:gap-6 justify-center items-center top-[20vw] md:top-60">
            {/*1,1*/}
            <button className="text-xs w-32 h-16 px-5 py-2 md:w-72 md:h-24 md:px-10 md:py-2 md:text-xl md:font-bold bg-[#C2A27F] text-white rounded-2xl" onClick={() => goToPage(2)}>
              Pengantar E-Modul
            </button>
            {/*1,2*/}
            <button className="text-xs w-32 h-16 px-5 py-2 md:w-72 md:h-24 md:px-10 md:py-2 md:text-xl md:font-bold bg-[#C2A27F] text-white rounded-2xl" onClick={() => goToPage(4)}>
              Asal-Usul Kota Malang
            </button>
            {/*1,3*/}
            <button className="text-xs w-32 h-16 px-5 py-2 md:w-72 md:h-24 md:px-10 md:py-2 md:text-xl md:font-bold bg-[#C2A27F] text-white rounded-2xl" onClick={() => goToPage(6)}>
              Kerajaan Kanjuruhan
            </button>
            {/*1,4*/}
            <button className="text-xs w-32 h-16 px-5 py-2 md:w-72 md:h-24 md:px-10 md:py-2 md:text-xl md:font-bold bg-[#C2A27F] text-white rounded-2xl" onClick={() => goToPage(8)}>
              Dampak Adanya Pendatang
            </button>
            {/*2,1*/}
            <button className="text-xs w-32 h-16 px-5 py-2 md:w-72 md:h-24 md:px-10 md:py-2 md:text-xl md:font-bold bg-[#C2A27F] text-white rounded-2xl" onClick={() => goToPage(3)}>
              Petunjuk Penggunaan E-Modul
            </button>
            {/*2,2*/}
            <button className="text-xs w-32 h-16 px-5 py-2 md:w-72 md:h-24 md:px-10 md:py-2 md:text-xl md:font-bold bg-[#C2A27F] text-white rounded-2xl" onClick={() => goToPage(5)}>
              Sumber Daya Alam
            </button>
            {/*2,3*/}
            <button className="text-xs w-32 h-16 px-5 py-2 md:w-72 md:h-24 md:px-10 md:py-2 md:text-xl md:font-bold bg-[#C2A27F] text-white rounded-2xl" onClick={() => goToPage(7)}>
              Kerajaan Singasari
            </button>
            {/*2,4*/}
            <button className="text-xs w-32 h-16 px-5 py-2 md:w-72 md:h-24 md:px-10 md:py-2 md:text-xl md:font-bold bg-[#C2A27F] text-white rounded-2xl" onClick={() => goToPage(11)}>
              Profil Penulis & Pembimbing
            </button>
        </div>
        <img className="fixed top-0 left-0 z-0 sm:w-1/2 sm:h-auto md:h-full md:w-full" src={`/flipbook-pages/2_polos.webp`}/>
      </div>
    </>
  );
};

export default Page2;
