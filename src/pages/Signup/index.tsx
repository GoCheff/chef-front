import { Fragment } from "react";

import { useForm } from "react-hook-form";

import { BoxVariants as Box, Spacer } from "../../ui/components";

import { SignupForm } from "./components/SignupForm";

function SignupPage() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const text = "Após solicitado o cadastro, aguarde a aprovação.";

  return (
    <Fragment>
      <Box.Info text={text} />
      <Spacer />
      <SignupForm
        register={register}
        watch={watch}
        handleSubmit={handleSubmit}
        errors={errors}
        isSubmitting={isSubmitting}
      />
    </Fragment>
  );
}

export { SignupPage };
