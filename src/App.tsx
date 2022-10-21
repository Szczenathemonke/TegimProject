import "./App.css";
import heroPhoto from "src/assets/foto-hero.png";
import { useState } from "react";
import NavbarElement from "./components/NavbarElement";
import { Formik } from "formik";
import FormInputComponent from "./components/FormInputComponent";
import FormInputComponentLarge from "./components/FormInputComponentLarge";

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
          <div className="card w-[298px] rounded-none bg-[#141414]/60">
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
          <div className="card w-[298px] rounded-none bg-[#141414]/60">
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
          <div className="card w-[298px] rounded-none bg-[#141414]/60">
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
          <div className="card w-[298px] rounded-none bg-[#141414]/60">
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
        <div className="flex flex-row justify-between">
          <div className="w-1/2">
            <div className="flex flex-row items-center gap-4 mb-[32px]">
              <img src="src/assets/bulletpoint.svg" alt="" />
              <h2 className="font-custom2 text-3xl">Kontakt</h2>
            </div>
            <div className="flex flex-col gap-6 mb-[56px] ">
              <div className="flex flex-row gap-2">
                <img src="src/assets/contact-ico.svg" alt="" />
                <h3 className="text-lg font-custom2">Zadzwoń do nas</h3>
              </div>
              <p className="font-custom4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat, mattis at nisi, ullamcorper sit eu auctor mollis. A,
                eget odio nunc elementum, nec
              </p>
              <h4 className="font-custom5">+48 606 391 959</h4>{" "}
            </div>
            <div>
              <div className="flex flex-row gap-2 mb-[24px]">
                <img src="src/assets/msg-ico.svg" alt="" />
                <h3 className="text-lg font-custom2">
                  Lub napisz do nas wiadomość
                </h3>
              </div>

              <Formik
                initialValues={{
                  nameAndSurname: "",
                  email: "",
                  phone: "",
                  msgContent: "",
                }}
                onSubmit={(values) => alert(JSON.stringify(values))}
              >
                {(formikProps) => (
                  <>
                    <form
                      onSubmit={formikProps.handleSubmit}
                      className="flex flex-col gap-6 mb-[120px]"
                    >
                      <FormInputComponent
                        name="nameAndSurname"
                        type="text"
                        label="Imię i Nazwisko"
                        placeholder="Wpisz imię i nazwisko"
                      />
                      <FormInputComponent
                        name="email"
                        type="text"
                        label="Adres E-mail"
                        placeholder="Wpisz swój adres e-mail"
                      />
                      <FormInputComponent
                        name="phone"
                        type="text"
                        label="Numer Telefonu"
                        placeholder="Wpisz numer telefonu"
                      />
                      <FormInputComponentLarge
                        name="msgContent"
                        type="text"
                        label="Twoja Wiadomość"
                        placeholder="Napisz nam czego potrzebujesz"
                      />
                      <div className="flex gap-2 items-start ">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-xs rounded-none"
                        />
                        <p className="text-xs text-[#909090]">
                          Wyrażam zgodę na przetwarzanie moich danych osobowych
                          dla potrzeb niezbędnych do realizacji procesu
                          rekrutacji zgodnie z Rozporządzeniem Parlamentu
                          Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
                          2016 r. w sprawie ochrony osób fizycznych w związku z
                          przetwarzaniem danych osobowych i w sprawie swobodnego
                          przepływu takich danych oraz uchylenia dyrektywy
                          95/46/WE (RODO).
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="btn px-16 pt-4 pb-3 h-[43px] w-fit bg-base-100 rounded-none font-custom3 text-base text-primary border-white/90"
                      >
                        {" "}
                        Wyślij
                      </button>
                    </form>
                  </>
                )}
              </Formik>
            </div>
          </div>
          <img
            src="src/assets/contact-bg-photo.png"
            className="h-[800px] self-center"
            alt=""
          />
        </div>
      </div>
      <footer className="min-h-[84px] bg-base-200 px-[100px] py-[30px]">
        <div className="container ">
          <div className="flex justify-between items-center">
            <div className="flex justify-center gap-[29px] items-center">
              <img src="src/assets/Group 3.svg"></img>
              <p className="font-custom4 text-[#909090] text-xs leading-[13.37px]">
                © 2022 Tegim Nieruchomości, wszystkie prawa zastrzeżone
              </p>
            </div>
            <ul className="flex justify-center gap-[33px]">
              <li>
                <a
                  href="#"
                  className="font-custom4 text-[#909090] text-xs leading-[13.37px]"
                >
                  Polityka Prywatności
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-custom4 text-[#909090] text-xs leading-[13.37px]"
                >
                  Regulamin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

// left: 90.38%;
// right: -25.38%;
// top: 12.81%;
// bottom: 78.38%;

// "absolute top-[-49px] right-0"
