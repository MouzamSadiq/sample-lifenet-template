import React from "react";
import { render } from "@testing-library/react";
import { Actions } from "./Actions";

describe("Actions component", () => {
  test("renders correctly with custom styling", () => {
    const name = "Test Name";
    const icon = <div>Test Icon</div>;
    const count = 5;

    const { getByText } = render(
      <Actions name={name} icon={icon} count={count} />
    );

    const nameElement = getByText(name);
    const countElement = getByText(count.toString());
    const iconElement = getByText("Test Icon");

    expect(nameElement).toBeInTheDocument();
    expect(countElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();

    expect(nameElement).toHaveStyle("font-size: 20px");
    expect(countElement).toHaveStyle("font-size: 25px");
  });
});
