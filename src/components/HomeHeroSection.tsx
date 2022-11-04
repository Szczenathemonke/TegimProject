import "../serviceStyle.css";

function HomeHeroSection() {
  return (
    <div>
      <div className="lg:pl-[100px] pl-[20px]">
        <div className="flex min-h-full justify-start ">
          <div className="flex p-0 mb-[40px] lg:mb-0 flex-row-reverse w-screen justify-between lg:flex-row-reverse overflow-hidden">
            <div className="heroImg"></div>

            <div className="flex flex-col justify-center max-w-[218px] lg:max-w-[568px] gap-[24px]">
              <h1
                className="text-3xl lg:text-5xl 
              font-custom2 lg:leading-11 font-bold"
              >
                Znajdźmy razem <br />
                Twój nowy Dom
              </h1>
              <p className=" max-w-[175px] lg:max-w-[568px] lg:mb-[42px] font-custom-3 font-light text-base lg:text-2xl">
                Domy, mieszkania, działki na terenie Dolnego Śląska <br />
                dopasowane do Ciebie
              </p>
              <div className="flex flex-col lg:flex-row gap-4 justify-between">
                <button
                  className="btn max-w-[153px] lg:min-w-[266px] h-[42px] lg:h-[62px] bg-base-100 rounded-none text-primary border-white/90
                font-custom3 text-base lg:text-xl  lg:pt-4 lg:pb-3 
                hover:bg-[#ffffff] hover:text-base-100 hover:border-base-100 hover:border-solid
                active:bg-base-100 active:text-primary active:border-[#ffffff] active:border-6  "
                >
                  Zobacz Oferty
                </button>
                <button
                  className="btn max-w-[153px] lg:min-w-[265px] h-[42px] lg:h-[62px] bg-secondary border-none rounded-none
                 font-custom3 text-base lg:text-xl  lg:pt-4 lg:pb-3  text-base-100 
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
