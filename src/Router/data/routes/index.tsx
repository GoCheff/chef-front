import { RouteObject } from "react-router-dom";

import {
  AuthTemplate,
  BaseTemplate,
  NonAuthTemplate,
} from "../../../templates";

import {
  HomePage,
  LoginPage,
  NewRecipePage,
  RecipesPage,
  SignupPage,
} from "../../../pages";

const routes = {
  home: "/",
  recipes: "/receitas",
  newRecipe: "/receitas/cadastro",
  login: "/login",
  signup: "/cadastro",
};

const routesObject: RouteObject[] = [
  {
    id: "root",
    element: <BaseTemplate />,
    children: [
      {
        element: <NonAuthTemplate />,
        children: [
          {
            path: routes.login,
            element: <LoginPage />,
          },
          {
            path: routes.signup,
            element: <SignupPage />,
          },
        ],
      },
      {
        element: <AuthTemplate />,
        loader: () => {
          return {
            needAuth: true,
          };
        },
        children: [
          {
            path: routes.home,
            element: <HomePage />,
          },
          {
            path: routes.recipes,
            element: <RecipesPage />,
          },
          {
            path: routes.newRecipe,
            element: <NewRecipePage />,
          },
        ],
      },
    ],
  },
];

export { routes, routesObject };
