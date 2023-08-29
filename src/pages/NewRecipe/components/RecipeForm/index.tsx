import { useContext, useEffect } from "react";

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

import { UserContext } from "../../../../context";

import { ResponseType } from "../../../../entities";

import { Button, Form, Input } from "../../../../ui/layouts";

import { Spacer } from "../../../../ui/components";

import { S } from "./styles";
import { routes } from "../../../../Router/data";

interface LoginFormProps {
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  errors: FieldErrors<FieldValues>;
  isSubmitting: boolean;
  setValue: (name: string, value: any) => void;
}

function RecipeForm({
  register,
  watch,
  handleSubmit,
  errors,
  isSubmitting,
  setValue,
}: LoginFormProps): JSX.Element {
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  async function onSubmit({
    name,
    description,
    imageUrl,
    price,
    minServe,
    maxServe,
    cookTime,
    vegetarian,
    vegan,
    glutenFree,
    lactoseFree,
    light,
  }: FieldValues) {
    try {
      const { message } = await services.foodPlates.create({
        token,
        data: {
          name,
          description,
          imageUrl,
          price,
          minServe,
          maxServe,
          cookTime,
          vegetarian,
          vegan,
          glutenFree,
          lactoseFree,
          light,
        },
      });

      toast.success(message);
      navigate(routes.recipes);
    } catch (error) {
      const { message: errorMessage } = error as ResponseType<{}>;

      toast.error(errorMessage);
    }
  }

  function getButtonDisabled() {
    return !!(
      !watch("name") ||
      !watch("description") ||
      !watch("imageUrl") ||
      !watch("price") ||
      !watch("minServe") ||
      !watch("maxServe") ||
      !watch("cookTime") ||
      Object.keys(errors).length ||
      isSubmitting
    );
  }

  useEffect(() => {
    if (!watch("vegan")) return;

    setValue("vegetarian", true);
  }, [watch("vegan"), watch("vegetarian")]);

  return (
    <S.Container>
      <S.Wrapper>
        <Form
          handleSubmit={handleSubmit(onSubmit)}
          submitDisabled={isSubmitting}
        >
          <Input
            register={register("name", {
              required: true,
            })}
            value={watch("name")}
            label="Nome"
            error={errors.name}
            disabled={isSubmitting}
          />
          <Input
            register={register("description", {
              required: true,
            })}
            value={watch("description")}
            label="Descrição"
            error={errors.description}
            disabled={isSubmitting}
            textarea={true}
          />
          <Input
            register={register("imageUrl", {
              required: true,
              pattern: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg)$/,
            })}
            value={watch("imageUrl")}
            label="Imagem"
            error={errors.imageUrl}
            disabled={isSubmitting}
          />
          <div className="flex flex-row justify-between">
            <Input
              register={register("price", {
                required: true,
                min: 0,
                valueAsNumber: true,
              })}
              value={watch("price")}
              label="Preço"
              error={errors.price}
              disabled={isSubmitting}
            />
            <Input
              register={register("cookTime", {
                required: true,
                min: 0,
              })}
              type="number"
              value={watch("cookTime")}
              label="Tempo de preparo (min)"
              error={errors.cookTime}
              disabled={isSubmitting}
            />
          </div>
          <div className="flex flex-row justify-between">
            <Input
              register={register("minServe", {
                required: true,
                min: 1,
              })}
              type="number"
              value={watch("minServe")}
              label="Serve no mínimo"
              error={errors.minServe}
              disabled={isSubmitting}
            />
            <Input
              register={register("maxServe", {
                required: true,
                min: watch("minServe"),
              })}
              type="number"
              value={watch("maxServe")}
              label="Serve no máximo"
              error={errors.maxServe}
              disabled={isSubmitting}
            />
          </div>
          <Spacer size={1} />
          <div className="flex flex-row justify-between">
            <Input
              register={register("vegetarian")}
              type="checkbox"
              value={watch("vegetarian")}
              label="Vegetariano"
              error={errors.vegetarian}
              disabled={isSubmitting}
            />
            <Input
              register={register("vegan")}
              type="checkbox"
              value={watch("vegan")}
              label="Vegano"
              error={errors.vegan}
              disabled={isSubmitting}
            />
            <Input
              register={register("glutenFree")}
              type="checkbox"
              value={watch("glutenFree")}
              label="Sem glúten"
              error={errors.glutenFree}
              disabled={isSubmitting}
            />
            <Input
              register={register("lactoseFree")}
              type="checkbox"
              value={watch("lactoseFree")}
              label="Sem lactose"
              error={errors.lactoseFree}
              disabled={isSubmitting}
            />
            <Input
              register={register("light")}
              type="checkbox"
              value={watch("light")}
              label="Light"
              error={errors.light}
              disabled={isSubmitting}
            />
          </div>
          <Button
            type="submit"
            disabled={getButtonDisabled()}
            loading={isSubmitting}
          >
            Entrar
          </Button>
        </Form>
      </S.Wrapper>
    </S.Container>
  );
}

export { RecipeForm };
