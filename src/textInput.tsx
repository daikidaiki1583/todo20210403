import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = styled.input`
  font-size: 1em;
  padding: 0.25em 0.25em;
  margin: 0;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TextInput: FC<Props> = ({ value, handleChange }) => {
  return (
    <div>
      <Input type="text" value={value} onChange={handleChange} />
    </div>
  );
};

export default TextInput;
