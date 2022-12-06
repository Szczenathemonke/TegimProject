import { Formik } from "formik";
import FormInputComponent from "./FormInputComponent";
import FormInputComponentLarge from "./FormInputComponentLarge";
import * as Yup from "yup";
import "../serviceStyle.css";
import bulletPoint from "../assets/bulletpoint.svg";
import contactIco from "../assets/contact-ico.svg";
import msgIco from "../assets/msg-ico.svg";
// import contactBgPhoto from "../assets/contact-bg-photo.png";
import contactBgPhoto from "../assets/contact-img.png";

function ContactSection() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <div id="contact" className="2xl:flex  scroll-mt-16 pl-[0px] lg:pl-[100px]">
      <div className="Container flex max-w-[1690px] w-fit justify-center  lg:pt-[40px] px-[20px] lg:px-0">
        <div className="flex flex-row items-center justify-between mb-[120px] w-[1690px]    gap-16">
          <div className="max-w-[320px]  w-full sm:max-w-[550px] lg:max-w-[800px]">
            <div className="flex flex-row items-center gap-4 mb-[32px]">
              <img src={bulletPoint} alt="" />
              <h2 className="font-custom2 text-3xl">Kontakt</h2>
            </div>
            <div className="flex flex-col gap-6 mb-[56px] ">
              <div className="flex flex-row gap-2">
                <img src={contactIco} alt="" />
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
                <img src={msgIco} alt="" />
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
                  termsOfCondition: false,
                }}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={Yup.object({
                  nameAndSurname: Yup.string().required("Pole jest wymagane!"),
                  email: Yup.string()
                    .email(
                      "Adres email jest niepoprawny, wpisz poprawny format."
                    )
                    .required("Pole jest Wymagane!"),
                  phone: Yup.string()
                    .matches(
                      phoneRegExp,
                      "Numer Telefonu jest niepoprawny, wpisz poprawny format."
                    )
                    .min(9)
                    .required("Pole jest Wymagane!"),
                  msgContent: Yup.string().required("Pole jest Wymagane!"),
                  termsOfCondition: Yup.boolean().oneOf([true], "* Wymagane!"),
                })}
                onSubmit={(values) => alert(JSON.stringify(values))}
              >
                {(formikProps) => (
                  <>
                    <form
                      onSubmit={formikProps.handleSubmit}
                      className="flex flex-col gap-6 "
                    >
                      <FormInputComponent
                        name="nameAndSurname"
                        type="text"
                        label="Imię i Nazwisko *"
                        placeholder="Wpisz imię i nazwisko"
                      />
                      <FormInputComponent
                        name="email"
                        type="text"
                        label="Adres E-mail *"
                        placeholder="Wpisz swój adres e-mail"
                      />
                      <FormInputComponent
                        name="phone"
                        type="text"
                        label="Numer Telefonu *"
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
                          id="termsOfCondition"
                          type="checkbox"
                          className="checkbox checkbox-xs rounded-none"
                          {...formikProps.getFieldProps("termsOfCondition")}
                        />
                        <div>
                          <p
                            className={`text-xs text-[#909090] ${
                              formikProps.errors.termsOfCondition
                                ? "text-warning"
                                : ""
                            }`}
                          >
                            Wyrażam zgodę na przetwarzanie moich danych
                            osobowych dla potrzeb niezbędnych do realizacji
                            procesu rekrutacji zgodnie z Rozporządzeniem
                            Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia
                            27 kwietnia 2016 r. w sprawie ochrony osób
                            fizycznych w związku z przetwarzaniem danych
                            osobowych i w sprawie swobodnego przepływu takich
                            danych oraz uchylenia dyrektywy 95/46/WE (RODO).
                          </p>
                          {formikProps.touched.termsOfCondition &&
                          formikProps.errors.termsOfCondition ? (
                            <div className="text-warning">
                              {formikProps.errors.termsOfCondition}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn px-16 pt-3 pb-3 h-[42px] lg:w-fit 
                      bg-base-100 rounded-none text-primary border-white/90
                      font-custom3 text-base lg:text-xl lg:h-[62px] lg:pt-4 lg:pb-3 
                    hover:bg-[#ffffff] hover:text-base-100 hover:border-base-100 hover:border-solid
                      active:bg-base-100 active:text-primary active:border-[#ffffff] active:border-6  "
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
          <div>
            <img
              src={contactBgPhoto}
              className="hidden xl:block w-[726px] h-[726px] self-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
