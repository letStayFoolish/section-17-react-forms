import { ChangeEvent, useState } from "react";

const useInput = (
  initialValue: string,
  isValidFn: (value: string) => boolean,
) => {
  const [enteredValue, setEnteredValue] = useState<string>(initialValue);
  const [isFocus, setIsFocus] = useState(false);

  const isValid = isValidFn(enteredValue);

  const handleInputBlur = () => {
    setIsFocus(true);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
    setIsFocus(false);
  };

  return {
    value: enteredValue,
    handleInputBlur,
    handleInputChange,
    hasError: isFocus && !isValid,
  };
};

export default useInput;
