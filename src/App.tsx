import "./App.css";
import heroPhoto from "src/assets/foto-hero.png";

function App() {
  return (
    <div className="bg-base-100">
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
          <div className="flex flex-row">
            <img src="src/assets/Group 1.png"></img>
            <div>Home</div>
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
                <div className="flex flex-row gap-4">
                  <button className="btn px-16 pt-4 pb-3 h-[62px] bg-base-100 rounded-none font-custom3 text-xl text-primary border-white/90">
                    Zobacz Oferty
                  </button>
                  <button className="btn px-16 pt-4 pb-3 h-[62px] bg-secondary border-none rounded-none font-custom3 text-xl text-base-100">
                    Napisz do Nas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Container pt-[40px] pl-[100px]">
        <div className="flex flex-row items-center gap-4 ">
          <img src="src/assets/bulletpoint.svg" alt="" />
          <h2 className="font-custom2 text-3xl">Usługi</h2>
        </div>
        <div className="flex flex-row gap-4">
          <div className="card w-[298px] rounded-none bg-[#14141414]/60">
            <div className="card-body px-6">
              <div className="flex flex-row gap-12-px ">
                <h2 className="card-title font-custom2 text-2xl">Sprzedaż</h2>
                <img src="src/assets/cardvector-1.svg" alt="" />
              </div>

              <p className="font-custom4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lectus quis est, nec malesuada neque volutpat. Massa semper et
                ut malesuada sit enim amet. Cras massa facilisi in ultrices arcu
                volutpat sapien eget. Adipiscing sodales at id at laoreet sem.
              </p>
            </div>
          </div>
          <div className="card w-[298px] rounded-none bg-[#14141414]/60">
            <div className="card-body px-6">
              <div className="flex flex-row gap-2">
                <h2 className="card-title font-custom2 text-2xl">Zakup</h2>
                <img src="src/assets/cardvector-2.svg" alt="" />
              </div>
              <p className="font-custom4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lectus quis est, nec malesuada neque volutpat. Massa semper et
                ut malesuada sit enim amet. Cras massa facilisi in ultrices arcu
              </p>
            </div>
          </div>
          <div className="card w-[298px] rounded-none bg-[#14141414]/60">
            <div className="card-body px-6">
              <div className="flex flex-row gap-2">
                <h2 className="card-title font-custom2 text-2xl">Wynajem</h2>
                <img src="src/assets/cardvector-4.svg" alt="" />
              </div>
              <p className="font-custom4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lectus quis est, nec malesuada neque volutpat. Massa semper et
                ut malesuada sit enim amet. Cras massa facilisi in ultrices arcu
                volutpat sapien eget. Adipiscing sodales at id at laoreet sem.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              </p>
            </div>
          </div>
          <div className="card w-[298px] rounded-none bg-[#14141414]/60">
            <div className="card-body px-6">
              <div className="flex flex-row gap-2">
                <h2 className="card-title font-custom2 text-2xl">Najem</h2>
                <img src="src/assets/cardvector-3.svg" alt="" />
              </div>
              <p className="font-custom4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lectus quis est, nec malesuada neque volutpat. Massa semper et
                ut malesuada sit enim amet. Cras massa facilisi in ultrices arcu
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Container pt-[40px] pl-[100px]">
        <div className="flex flex-row items-center gap-4 ">
          <img src="src/assets/bulletpoint.svg" alt="" />
          <h2 className="font-custom2 text-3xl">Kontakt</h2>
        </div>
      </div>
      <footer className="min-h-84 bg-base-200">Tegim footer</footer>
    </div>
  );
}

export default App;

// left: 90.38%;
// right: -25.38%;
// top: 12.81%;
// bottom: 78.38%;

// "absolute top-[-49px] right-0"
