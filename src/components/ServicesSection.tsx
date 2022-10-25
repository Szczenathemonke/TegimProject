import ServicesCard from "./ServicesCard";
import cardVector1 from "../assets/cardvector-1.svg";
import "../serviceStyle.css";

console.log(cardVector1);

function ServicesSection() {
  return (
    <div className="Container pt-[40px] pl-[100px]">
      <div className="flex flex-row items-center gap-4 ">
        <img src="src/assets/bulletpoint.svg" alt="" />
        <h2 className="font-custom2 text-3xl">Usługi</h2>
      </div>
      <div className="flex flex-row gap-4">
        {/* <div className="card w-[298px] rounded-none bg-[#141414]/60">
          <div className="card-body px-6">
            <div className="flex flex-row gap-12-px ">
              <h2 className="card-title font-custom2 text-2xl">Sprzedaż</h2>
              <img src="src/assets/cardvector-1.svg" alt="" />
            </div>

            <p className="font-custom4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lectus quis est, nec malesuada neque volutpat. Massa semper et ut
              malesuada sit enim amet. Cras massa facilisi in ultrices arcu
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
              lectus quis est, nec malesuada neque volutpat. Massa semper et ut
              malesuada sit enim amet. Cras massa facilisi in ultrices arcu
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
              lectus quis est, nec malesuada neque volutpat. Massa semper et ut
              malesuada sit enim amet. Cras massa facilisi in ultrices arcu
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
              lectus quis est, nec malesuada neque volutpat. Massa semper et ut
              malesuada sit enim amet. Cras massa facilisi in ultrices arcu
            </p>
          </div>
        </div>*/}
        <ServicesCard
          serviceName="Sprzedaż"
          serviceIco="icon1"
          serviceContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lectus
          quis est, nec malesuada neque volutpat. Massa semper et ut malesuada
          sit enim amet. Cras massa facilisi in ultrices arcu volutpat sapien
          eget. Adipiscing sodales at id at laoreet sem."
        />
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
  );
}

export default ServicesSection;
