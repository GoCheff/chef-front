import styled from "styled-components";

import tw from "twin.macro";

interface StatusTagProps {
  $status: string;
}

const StatusTag = styled.span<StatusTagProps>`
  ${tw`px-2 py-1.5 rounded-md text-sm font-bold`}

  ${({ $status }) => {
    switch ($status) {
      case "open":
        return tw`bg-purple-200 text-purple-800`;
      case "sent":
        return tw`bg-blue-200 text-blue-800`;
      case "approved":
        return tw`bg-yellow-200 text-yellow-800`;
      case "paid":
        return tw`bg-green-200 text-green-800`;
      default:
        return tw`bg-gray-200 text-gray-800`;
    }
  }}
`;

const S = { C: { StatusTag } };

export { S };
