import tegimLogo2 from "../assets/tegimLogo2.svg";
function FooterSection() {
  return (
    <footer className="min-h-[84px] bg-base-200 lg:px-[100px] lg:py-[30px] pt-7 pb-[22px] px-5 ">
      <div className="container ">
        <div className="flex  flex-col lg:flex-row justify-between lg:items-center gap-6 lg:gap-0">
          <div className="flex flex-col lg:flex-row justify-center gap-4 items-start lg:items-center">
            <img src={tegimLogo2} className="h-[24px]"></img>
            <p className="font-custom4 text-[#909090] text-xs leading-[13.37px] max-w-[239px]">
              © 2022 Tegim Nieruchomości, wszystkie prawa zastrzeżone
            </p>
          </div>
          <ul className="flex flex-col  lg:flex-row justify-center gap-6 ">
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
  );
}

export default FooterSection;
