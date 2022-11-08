import React, { FC, useState } from "react";
import styled from "@emotion/styled";

const Form = styled.form({
  width: "100%",
});

const Input = styled.input({
  width: "90%",
  border: "none",
  padding: 16,
  outline: "none",
  borderRadius: 3,
  marginBottom: 8,
});

export interface AddInputProps {
  onAdd: (label: string) => void;
}

export const AddEdgeInput: FC<AddInputProps> = ({ onAdd }) => {
  const [input, setInput] = useState('');

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(input);
        setInput('');
      }}
    >
      <Input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Add a new pair of nodes here, example '1,3'"
      />
    </Form>
  );
};