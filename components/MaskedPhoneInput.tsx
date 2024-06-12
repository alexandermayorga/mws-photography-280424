import React from "react";
import { useController, Control } from "react-hook-form";

interface MaskedPhoneInputProps {
  name: string;
  control: Control<any>;
  classes: string;
}

const MaskedPhoneInput: React.FC<MaskedPhoneInputProps> = ({
  name,
  control,
  classes,
}) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value.replace(/\D/g, "").substring(0, 10);
    let areaCode = input.substring(0, 3);
    let middle = input.substring(3, 6);
    let last = input.substring(6, 10);

    if (input.length > 6) {
      onChange(`(${areaCode}) ${middle}-${last}`);
    } else if (input.length > 3) {
      onChange(`(${areaCode}) ${middle}`);
    } else if (input.length > 0) {
      onChange(`(${areaCode}`);
    } else {
      onChange("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value || ""}
        onChange={handleInputChange}
        onBlur={onBlur}
        ref={ref}
        placeholder="(000) 000-0000"
        maxLength={14}
        className={classes}
      />
      {/* {error && <p className="mt-4 text-red-500">{error.message}</p>} */}
    </div>
  );
};

export default MaskedPhoneInput;
