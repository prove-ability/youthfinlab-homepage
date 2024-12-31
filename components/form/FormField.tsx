import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors } from "react-hook-form";
import Typography from "../ui/Typography";

interface FormFieldProps {
  label: string;
  name: string;
  required?: boolean;
  errors: FieldErrors;
  children: React.ReactNode;
}

const FormField = ({
  label,
  name,
  required,
  errors,
  children,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <Typography.Label>
        {label} {required && <span className="text-red-500">*</span>}
      </Typography.Label>
      {children}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <Typography.P className="text-red-500 text-sm">
            {message}
          </Typography.P>
        )}
      />
    </div>
  );
};

export default FormField;
