function FooterSection() {
  return (
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
  );
}

export default FooterSection;
