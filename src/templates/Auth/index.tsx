import { useContext } from "react";

import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../../context";

import { routes } from "../../Router/data";

import { LoadingVariants as Loading } from "../../ui/components";

import { Header } from "./components";

import { S } from "./styles";

function AuthTemplate(): JSX.Element {
  const { user, loadingUser } = useContext(UserContext);

  if (!user) {
    Navigate({
      to: routes.login,
    });
  }

  if (loadingUser || !user) {
    return <Loading.Screen />;
  }

  return (
    <S.Container>
      <S.Wrapper>
        <Header />
        <Outlet />
      </S.Wrapper>
    </S.Container>
  );
}

export { AuthTemplate };
