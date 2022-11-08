import React, { FC } from "react";
import styled from "@emotion/styled";

export const Wrapper = styled.label({
  display: "flex",
  alignItems: "center",
  // width: "100%",
  borderRadius: 4,
  marginBottom: 8,
  padding: 16,
  background: "white",
  fontWeight: "400",
  fontSize: 14,
  cursor: "pointer",
});

const Label = styled.span<{ checked: boolean }>(({ checked }) => ({
  textDecoration: checked ? "line-through" : "none",
  fontSize: 20,
  margin: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
}));

const LabelInput = styled.input<{ checked: boolean }>
(({checked}) => ({
  textDecoration: checked ? "line-through" : "none",
  fontSize: 20,
  margin: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
}));

const Checkbox = styled.input({
  width: 16,
  height: 16,
  marginRight: 12,
});

const Logo = styled.img<{ src: string | null}>(({src}) => ({
  width: 16,
  height: 16,
  marginRight: 12,
  src
}));

export interface TodoItemProps {
  label: string;
}

export const NodesLabel: FC<TodoItemProps> = ({
  label,
}) => {
  return (
    <Wrapper>
      <LabelInput value={label} checked={false} />
    </Wrapper>
  );
};
