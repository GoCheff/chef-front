import { RecipesTable } from "./components";

function RecipesPage(): JSX.Element {
  const recipes = [
    {
      id: 1,
      name: "Bolo de Cenoura",
      price: 10,
      minServe: 10,
      maxServe: 20,
    },
    {
      id: 2,
      name: "Bolo de Chocolate",
      price: 8.99,
      minServe: 10,
      maxServe: 15,
    },
    {
      id: 3,
      name: "Bolo de Laranja",
      price: 12.1,
      minServe: 10,
      maxServe: 10,
    },
  ];

  return <RecipesTable recipes={recipes} />;
}

export { RecipesPage };
