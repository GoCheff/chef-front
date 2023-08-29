import { PropsWithChildren, useState } from "react";

import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn,
} from "react-hook-form";

import { S } from "./styles";

interface InputProps extends PropsWithChildren {
  register: UseFormRegisterReturn<string>;
  value: string;
  label?: string;
  type?: string;
  minLength?: number;
  maxLength?: number;
  showErrors?: boolean;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  customError?: string;
  disabled?: boolean;
  loading?: boolean;
  textarea?: boolean;
  select?: boolean;
  options?: string[];
}

function Input({
  register,
  value,
  label = "",
  type = "text",
  minLength,
  maxLength,
  showErrors = true,
  error,
  customError,
  disabled = false,
  textarea = false,
  select = false,
  options,
}: InputProps): JSX.Element {
  const [focus, setFocus] = useState(false);

  const hasError = !!error || !!customError;

  const errorTypes = {
    required: "Este campo é obrigatório",
    pattern: "Formato inválido",
    minLength: minLength
      ? `Mínimo de ${minLength} caracteres necessários`
      : "Mínimo de caracteres necessários não atingido",
    maxLength: maxLength
      ? `Máximo de ${maxLength} caracteres permitidos`
      : "Máximo de caracteres permitidos atingido",
    min: "Valor mínimo não atingido",
    max: "Valor máximo atingido",
  };

  const errorType = error?.type as keyof typeof errorTypes;

  const inputOrTextAreaProps = {
    ...register,
    onFocus: () => !disabled && setFocus(true),
    onBlur: () => !disabled && setFocus(false),
    disabled,
  };

  if (select && textarea) {
    throw new Error("Input cannot be both select and textarea");
  }

  if (select && (!options || !options.length)) {
    throw new Error("Select input must have options");
  }

  return (
    <div>
      <S.C.Label $focus={focus} $filled={value} $error={hasError} $type={type}>
        {label && (
          <S.LabelText onClick={() => !disabled && setFocus(true)}>
            {label}
          </S.LabelText>
        )}
        {textarea && <S.C.TextArea {...inputOrTextAreaProps} />}
        {select && (
          <S.C.Select {...inputOrTextAreaProps}>
            <option value="" disabled hidden>
              Selecione uma opção
            </option>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </S.C.Select>
        )}
        {!textarea && !select && (
          <S.C.Input type={type} {...inputOrTextAreaProps} />
        )}
        {showErrors && (
          <S.Error>{customError || errorTypes[errorType] || ""}</S.Error>
        )}
      </S.C.Label>
    </div>
  );
}

export { Input };
