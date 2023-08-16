import { NewRecipeTitle } from "./components";

import { Icon } from "../../ui/components";

import { S } from "./styles";

function NewRecipePage(): JSX.Element {
  return (
    <S.Container>
      <Icon name="logo" size="150px" fill="primary" />
      <NewRecipeTitle />
    </S.Container>
  );
}

export { NewRecipePage };
