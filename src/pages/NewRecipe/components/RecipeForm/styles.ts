import styled from "styled-components";

import tw from "twin.macro";

const Container = styled.section`
  ${tw`flex items-center justify-center w-screen`}
`;

const Wrapper = styled.div`
  ${tw`flex flex-col items-center justify-center bg-white px-10 pb-4 pt-2 w-full max-w-lg shadow rounded`}
`;

const S = { Container, Wrapper };

export { S };
