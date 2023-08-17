import styled from "styled-components";

import tw from "twin.macro";

const Container = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
  th {
    ${tw`text-center`}
  }

  td {
    ${tw`text-center`}
    div {
      ${tw`flex justify-center`}
    }
  }
`;

const Wrapper = tw.div`flex flex-col items-center justify-center px-6 py-10 w-full max-w-lg rounded`;

const S = {
  Container,
  Wrapper,
};

export { S };
