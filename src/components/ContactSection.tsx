import { Formik } from "formik";
import FormInputComponent from "./FormInputComponent";
import FormInputComponentLarge from "./FormInputComponentLarge";

function ContactSection() {
  return (
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
                        dla potrzeb niezbędnych do realizacji procesu rekrutacji
                        zgodnie z Rozporządzeniem Parlamentu Europejskiego i
                        Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
                        ochrony osób fizycznych w związku z przetwarzaniem
                        danych osobowych i w sprawie swobodnego przepływu takich
                        danych oraz uchylenia dyrektywy 95/46/WE (RODO).
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="btn px-16 pt-3 pb-3 h-[43px] w-fit bg-base-100 rounded-none font-custom3 text-base text-primary border-white/90"
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
  );
}

export default ContactSection;
