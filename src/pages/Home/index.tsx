import { HomeTitle } from "./components";

import { Icon } from "../../ui/components";

import { S } from "./styles";

function HomePage(): JSX.Element {
  return (
    <S.Container>
      <Icon name="logo" size="150px" fill="primary" />
      <HomeTitle />
    </S.Container>
  );
}

export { HomePage };
