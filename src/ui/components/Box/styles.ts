import styled from "styled-components";

import tw from "twin.macro";

import { InfoIcon } from "../../../assets/icons/InfoIcon";

const _InfoIcon = styled(InfoIcon)`
  ${tw`h-6 w-6 text-primary mr-4`}
`;

const Container = styled.div`
  ${tw`bg-primary-100 border-t-4 border-primary shadow-md w-full`}
`;

const Wrapper = styled.div`
  ${tw`flex items-center px-4 py-3`}
`;

const IconWrapper = styled.div`
  ${tw`py-1`}
`;

const TextWrapper = styled.div``;

const Text = styled.p`
  ${tw`text-sm text-primary-900 font-medium`}
`;

const S = {
  C: {
    InfoIcon: _InfoIcon,
    Text,
  },
  Container,
  Wrapper,
  IconWrapper,
  TextWrapper,
};

export { S };
