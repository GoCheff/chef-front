import { S } from "./styles";

interface BoxProps {
  type: "info";
  text: string;
}

function Box({ type, text }: BoxProps): JSX.Element {
  const iconTypes = {
    info: <S.C.InfoIcon />,
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.IconWrapper>{iconTypes[type]}</S.IconWrapper>
        <S.TextWrapper>
          <S.C.Text>{text}</S.C.Text>
        </S.TextWrapper>
      </S.Wrapper>
    </S.Container>
  );
}

const BoxVariants = {
  Info: (props: Omit<BoxProps, "type">) => <Box {...props} type="info" />,
};

export { Box, BoxVariants };
