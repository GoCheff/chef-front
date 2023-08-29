import { useForm } from "react-hook-form";

import { RecipeForm } from "./components";

function NewRecipePage(): JSX.Element {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm();

  return (
    <RecipeForm
      register={register}
      watch={watch}
      handleSubmit={handleSubmit}
      errors={errors}
      isSubmitting={isSubmitting}
      setValue={setValue}
    />
  );
}

export { NewRecipePage };
