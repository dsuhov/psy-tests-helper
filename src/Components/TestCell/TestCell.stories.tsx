import React from "react";
import { TestCell } from "./TestCell";
import { action } from "@storybook/addon-actions";

export default {
  title: "Test Cell",
};

const cellTestProps = [
  ["var1", "я чувствую себя хорошо"],
  ["var2", "мне плохо"],
  ["var3", "мне все время грустно, и я ничего не могу с собой поделать"],
  ["var4", "мне так скучно и грустно, что я не в силах больше терпеть"],
];




export const testCell = () => {
  return <div style={{ maxWidth: 800 }}>
    <TestCell itemVals={cellTestProps} itemNum="item1" onChange={action("Change")} />
  </div>;
}