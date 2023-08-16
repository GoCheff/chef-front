import { RecipesTitle } from "./components";

import { Icon } from "../../ui/components";

import { S } from "./styles";

function RecipesPage(): JSX.Element {
  return (
    <S.Container>
      <Icon name="logo" size="150px" fill="primary" />
      <RecipesTitle />
    </S.Container>
  );
}

export { RecipesPage };
