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
    <div className="flex flex-col gap-2">
      <label htmlFor="nameAndSurname" className="font-custom4 text-base">
        {label}
      </label>
      <textarea
        className={`input resize-none text-left align top input-bordered rounded-none 
        input-sm text-[#5b5b5b] placeholder-[#5b5b5b] min-h-[186px] ${
          meta.error ? "border-warning placeholder-warning" : "border"
        }`}
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
