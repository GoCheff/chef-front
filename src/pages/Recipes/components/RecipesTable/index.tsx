import { headers } from "../../data";

import { Table } from "../../../../ui/layouts";

import { formatPriceToReal } from "../../../../utils";

import { S } from "./styles";

interface RecipesTableProps {
  recipes: {
    id: number;
    name: string;
    price: number;
    minServe: number;
    maxServe: number;
  }[];
}

function RecipesTable({ recipes }: RecipesTableProps) {
  const data = recipes.map((recipe) => {
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
      <Table headers={headers} data={data} />
    </S.C.Section>
  );
}

export { RecipesTable };
