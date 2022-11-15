import { useField } from "formik";
import "../serviceStyle.css";
interface Props {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}
function FormInputComponent({ label, ...props }: Props) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor="nameAndSurname" className="font-custom4 text-base">
        {label}
      </label>
      <input
        autoComplete="off"
        className={`input input-bordered rounded-none input-sm text-[#FFFFFF]/90 placeholder-[#5b5b5b]  
        ${meta.error ? "border-warning placeholder-warning" : "border"}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error text-warning">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default FormInputComponent;
