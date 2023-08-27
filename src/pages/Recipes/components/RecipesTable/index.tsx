import { headers } from "../../data";

import { Table } from "../../../../ui/layouts";

import { formatPriceToReal } from "../../../../utils";

import { FoodPlateType } from "../../../../entities";

import { S } from "./styles";

interface RecipesTableProps {
  recipes: FoodPlateType[] | null;
  loading?: boolean;
  setNeedRetry: (value: boolean) => void;
}

function RecipesTable({ recipes, loading }: RecipesTableProps) {
  const data = (recipes || []).map((recipe) => {
    const _serve =
      recipe.minServe !== recipe.maxServe
        ? `${recipe.minServe} - ${recipe.maxServe}`
        : recipe.minServe;

    return {
      id: recipe.id,
      name: recipe.name,
      price: formatPriceToReal(recipe.price),
      _serve,
    };
  });

  return (
    <S.C.Section>
      <Table headers={headers} data={data} loading={loading} />
    </S.C.Section>
  );
}

export { RecipesTable };
