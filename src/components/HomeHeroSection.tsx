import "../serviceStyle.css";
import Navbar from "./Navbar";

function HomeHeroSection() {
  return (
    <div>
      <Navbar />
      <div className=" pl-[100px] ">
        <div className="flex min-h-full justify-start ">
          <div className="flex p-0 flex-col w-screen justify-between lg:flex-row-reverse">
            <div className="heroImg "></div>

            <div className="flex flex-col justify-center  min-w-[568px]">
              <h1 className="text-5xl mb-[22px] font-custom2 leading-11 font-bold">
                Znajdźmy razem <br />
                Twój nowy Dom
              </h1>
              <p className=" mb-[66px] font-custom-3 font-light text-2xl">
                Domy, mieszkania, działki na terenie Dolnego Śląska <br />
                dopasowane do Ciebie
              </p>
              <div className="flex flex-row gap-4 justify-between">
                <button
                  className="btn px-16 pt-4 pb-3 h-[62px] bg-base-100 rounded-none 
                font-custom3 text-xl text-primary border-white/90
                hover:bg-[#ffffff] hover:text-base-100 hover:border-base-100 hover:border-solid
                active:bg-base-100 active:text-primary active:border-[#ffffff] active:border-8 active:pb-4 active:pt-2 "
                >
                  Zobacz Oferty
                </button>
                <button
                  className="btn px-16 pt-4 pb-3 h-[62px] bg-secondary border-none rounded-none
                 font-custom3 text-xl text-base-100 
                 hover:bg-base-100 hover:text-secondary hover:border-secondary hover:border-solid"
                >
                  Napisz do Nas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeroSection;
