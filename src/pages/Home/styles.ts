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

const S = { Container };

export { S };
