import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

import { Button, Form, Input } from "../../../../ui/layouts";

import { Spacer } from "../../../../ui/components";

import { wait } from "../../../../utils";

interface SignupFormProps {
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  errors: FieldErrors<FieldValues>;
  isSubmitting: boolean;
}

function SignupForm({
  register,
  watch,
  handleSubmit,
  errors,
  isSubmitting,
}: SignupFormProps): JSX.Element {
  async function onSubmit(data: FieldValues) {
    await wait({ time: 3000 });

    console.log({ data });
  }

  function getButtonDisabled() {
    return !!(
      !watch("name") ||
      !watch("email") ||
      !watch("password") ||
      !watch("passwordConfirmation") ||
      Object.keys(errors).length ||
      isSubmitting
    );
  }

  return (
    <Form handleSubmit={handleSubmit(onSubmit)} submitDisabled={isSubmitting}>
      <Input
        register={register("name", {
          required: true,
        })}
        value={watch("name")}
        label="Nome completo"
        error={errors.name}
        disabled={isSubmitting}
      />
      <Input
        register={register("email", {
          required: true,
          pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
        })}
        value={watch("email")}
        label="Email"
        error={errors.email}
        disabled={isSubmitting}
      />
      <Input
        register={register("password", {
          required: true,
        })}
        value={watch("password")}
        label="Senha"
        type="password"
        error={errors.password}
        disabled={isSubmitting}
      />
      <Input
        register={register("passwordConfirmation", {
          required: true,
          validate: (value) => value === watch("password"),
        })}
        value={watch("passwordConfirmation")}
        label="Confirmação de senha"
        type="password"
        error={errors.passwordConfirmation}
        disabled={isSubmitting}
        customError={
          errors.passwordConfirmation?.type === "validate"
            ? "As senhas não coincidem"
            : undefined
        }
      />
      <Spacer size={3} />
      <Button
        type="submit"
        disabled={getButtonDisabled()}
        loading={isSubmitting}
      >
        Solicitar cadastro
      </Button>
    </Form>
  );
}

export { SignupForm };
