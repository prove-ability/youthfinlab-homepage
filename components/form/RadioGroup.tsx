import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface RadioGroupProps<T extends FieldValues> {
  options: string[];
  name: Path<T>;
  register: UseFormRegister<T>;
}

const RadioGroup = <T extends FieldValues>({
  options,
  name,
  register,
}: RadioGroupProps<T>) => {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label key={option} className="flex items-center space-x-2">
          <input
            {...register(name)}
            type="radio"
            value={option}
            className="form-radio"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
