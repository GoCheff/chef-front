import styled from "styled-components";

import tw from "twin.macro";

const LabelText = styled.span`
  ${tw`text-sm font-semibold text-gray-500 transition-all duration-300 ease-in-out cursor-text`}
`;

const Input = styled.input`
  ${tw`py-2 font-semibold border-b border-black focus:outline-none focus:border-primary rounded-sm transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-auto`}
`;

const TextArea = styled.textarea`
  ${tw`py-2 font-semibold border-b border-black focus:outline-none focus:border-primary rounded-sm transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-auto resize-none h-20`}
`;

const Select = styled.select`
  ${tw`py-2 font-semibold border-b border-black focus:outline-none focus:border-primary rounded-sm transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-auto`}
`;

interface LabelProps {
  $focus: boolean;
  $filled: string;
  $error: boolean;
  $type: string;
}

const Label = styled.label<LabelProps>`
  ${tw`flex flex-col`}
  ${({ $type }) => $type === "checkbox" && tw`items-center`}
  ${LabelText} {
    ${({ $focus, $filled }) =>
      $focus || $filled ? tw`translate-y-0` : tw`translate-y-6`}
    ${({ $focus }) => $focus && tw`text-primary`}
    ${({ $error }) => $error && tw`text-red-500`}
    ${({ $type }) => $type === "checkbox" && tw` -translate-y-2`}
  }

  ${Input} {
    ${({ $focus }) => ($focus ? tw`border-primary` : tw`border-black`)}
    ${({ $error }) => $error && tw`border-red-500`}
    ${({ $type }) =>
      $type === "checkbox" && tw`w-4 h-4 text-white accent-primary`}
  }
`;

const Error = styled.span`
  ${tw`text-xs font-semibold text-red-500 mt-1 h-5`}
`;

const S = {
  C: { Label, Input, TextArea, Select },
  LabelText,
  Error,
};

export { S };
