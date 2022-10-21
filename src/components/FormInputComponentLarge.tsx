import { FieldConfig, useField } from "formik";
interface Props {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}
function FormInputComponent({ label, ...props }: Props) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col">
      <label htmlFor="nameAndSurname" className="font-custom4 text-base">
        {label}
      </label>
      <textarea
        className="input text-left align top input-bordered rounded-none input-sm text-[#5b5b5b] placeholder-[#5b5b5b] min-h-[186px]"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default FormInputComponent;
