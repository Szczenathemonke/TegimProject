import "./App.css";
import heroPhoto from "src/assets/foto-hero.png";

function App() {
  return (
    <div>
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
          </div>
          <div className="hero min-h-screen justify-start ">
            <div className="hero-content p-0 flex-col justify-start lg:flex-row-reverse">
              <div>
                <h1 className="text-5xl mb-[22px] font-custom2 leading-11 font-bold">
                  Znajdźmy razem <br />
                  Twój nowy Dom
                </h1>
                <p className=" mb-[66px] font-custom3 font-light text-2xl">
                  Domy, mieszkania, działki na terenie Dolnego Śląska <br />
                  dopasowane do Ciebie
                </p>
                <div className="flex flex-row gap-4">
                  <button className="btn px-16 pt-4 pb-3 bg-base-100 font-normal rounded-none font-custom3 text-xl text-primary border-white/90">
                    Zobacz Oferty
                  </button>
                  <button className="btn px-16 pt-4 pb-3 bg-secondary font-normal rounded-none font-custom3 text-xl text-base-100">
                    Napisz do Nas
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>usługi</div>
      <div>kontakt</div>
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
