import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { toast } from "../../../../libs";

import { services } from "../../../../services";

import { routes } from "../../../../Router/data";

import { Button, Form, Input } from "../../../../ui/layouts";

import { Spacer } from "../../../../ui/components";

import { ResponseType } from "../../../../entities";

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
  const navigate = useNavigate();

  async function onSubmit({
    name,
    email,
    password,
    gender,
    mainCuisine,
    city,
    registerReason,
  }: FieldValues) {
    try {
      const genderTypes = {
        Masculino: "male",
        Feminino: "female",
        Outro: "other",
        "Prefiro não dizer": "preferNotToSay",
      };

      const _gender = Object.entries(genderTypes).find(
        ([key]) => key === gender
      )?.[1];

      const { message } = await services.cheff.requestRegistration({
        name,
        email,
        password,
        gender: _gender || gender,
        mainCuisine,
        city,
        registerReason,
      });

      toast.success(message);

      navigate(routes.login);
    } catch (error) {
      const { message: errorMessage } = error as ResponseType<{}>;

      toast.error(errorMessage);
    }
  }

  function getButtonDisabled() {
    return !!(
      !watch("name") ||
      !watch("email") ||
      !watch("password") ||
      !watch("passwordConfirmation") ||
      !watch("gender") ||
      !watch("mainCuisine") ||
      !watch("city") ||
      !watch("registerReason") ||
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
          minLength: 6,
        })}
        value={watch("password")}
        label="Senha"
        type="password"
        error={errors.password}
        minLength={6}
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
      <Input
        register={register("gender", {
          required: true,
          pattern: /^(Masculino|Feminino|Outro|Prefiro não dizer)$/i,
        })}
        value={watch("gender")}
        label="Gênero"
        error={errors.gender}
        disabled={isSubmitting}
      />
      <Input
        register={register("mainCuisine", {
          required: true,
        })}
        value={watch("mainCuisine")}
        label="Especialidade"
        error={errors.mainCuisine}
        disabled={isSubmitting}
      />
      <Input
        register={register("city", {
          required: true,
        })}
        value={watch("city")}
        label="Cidade"
        error={errors.city}
        disabled={isSubmitting}
      />
      <Input
        register={register("registerReason", {
          required: true,
        })}
        value={watch("registerReason")}
        label="Por que você quer fazer parte da nossa comunidade?"
        error={errors.registerReason}
        disabled={isSubmitting}
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
