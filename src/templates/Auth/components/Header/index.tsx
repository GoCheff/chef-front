import { Icon } from "../../../../ui/components";

import { routes } from "../../../../Router/data";

import { S } from "./styles";

function Header(): JSX.Element {
  return (
    <S.C.Header>
      <Icon name="logo" size="150px" fill="primary" />
      <S.C.Nav>
        <S.C.Ul>
          <li>
            <S.C.Link to={routes.home} end>
              Pedidos
            </S.C.Link>
          </li>
          <li>
            <S.C.Link to={routes.recipes} end>
              Receitas
            </S.C.Link>
          </li>
          <li>
            <S.C.Link to={routes.newRecipe} end>
              Nova receita
            </S.C.Link>
          </li>
        </S.C.Ul>
      </S.C.Nav>
    </S.C.Header>
  );
}

export { Header };
