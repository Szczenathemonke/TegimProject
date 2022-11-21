import ServicesCard from "./ServicesCard";
import bulletpoint from "../assets/bulletpoint.svg";
import "../serviceStyle.css";

function ServicesSection() {
  return (
    <div
      id="services"
      className="Container flex justify-center mb-[40px] lg:pt-[40px]  px-[20px]  lg:px-[0px]   "
    >
      <div className="flex flex-col gap-8  w-screen max-w-[1490px] lg:px-[100px] md:pl-[85px] 2xl:px-[0px]">
        <div className="flex flex-row items-center gap-4 ">
          <img src={bulletpoint} alt="" />
          <h2 className="font-custom2 text-3xl">Usługi</h2>
        </div>
        <div
          id="servicesSnap"
          className="flex flex-row gap-4 justify-center lg:justify-center flex-wrap  xl:flex-nowrap "
        >
          <div id="servicesSnapMobile">
            <ServicesCard
              serviceName="Sprzedaż"
              serviceIco="icon1"
              serviceContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lectus
          quis est, nec malesuada neque volutpat. Massa semper et ut malesuada
          sit enim amet. Cras massa facilisi in ultrices arcu volutpat sapien
          eget. Adipiscing sodales at id at laoreet sem."
            />
          </div>

          <ServicesCard
            serviceName="Zakup"
            serviceIco="icon2"
            serviceContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          lectus quis est, nec malesuada neque volutpat. Massa semper et ut
          malesuada sit enim amet. Cras massa facilisi in ultrices arcu"
          />

          <ServicesCard
            serviceName="Wynajem"
            serviceIco="icon3"
            serviceContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          lectus quis est, nec malesuada neque volutpat. Massa semper et ut
          malesuada sit enim amet. Cras massa facilisi in ultrices arcu
          volutpat sapien eget. Adipiscing sodales at id at laoreet sem.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus"
          />
          <ServicesCard
            serviceName="Najem"
            serviceIco="icon4"
            serviceContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          lectus quis est, nec malesuada neque volutpat. Massa semper et ut
          malesuada sit enim amet. Cras massa facilisi in ultrices arcu"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
