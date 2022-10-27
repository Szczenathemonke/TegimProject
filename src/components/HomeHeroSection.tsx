import NavbarElement from "./NavbarElement";
import "../serviceStyle.css";
function HomeHeroSection() {
  return (
    <div>
      <div className="pt-[40px] pl-[100px]">
        <img
          src="src/assets/foto-hero.png"
          className="absolute top-0 right-0"
        ></img>
        <img
          src="src/assets/Vector-hero.png"
          className="absolute right-[138px] top-[325px]  mix-blend-overlay "
        ></img>
        <div className="flex flex-row w-1/2 justify-between">
          <img src="src/assets/Group 1.png"></img>
          <ul className="flex flex-row gap-5 items-center">
            <NavbarElement name="Home" link="#" />
            <NavbarElement name="Usługi" link="#" />
            <NavbarElement name="oferty" link="#" />
            <NavbarElement name="kontakt" link="#" />
          </ul>
        </div>
        <div className="hero min-h-full mt-[177px] mb-[200px] justify-start ">
          <div className="hero-content p-0 flex-col justify-start lg:flex-row-reverse">
            <div>
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
