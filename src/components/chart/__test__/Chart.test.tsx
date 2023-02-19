import { render } from "@testing-library/react";
import store from "../../../redux/store";
import Chart from "../Bar";
import { Provider } from "react-redux";
import { groupedChartDataData, setTermDataToWordsCount } from "../../../features/efo/utils";

describe("Chart component", () => {
  it("renders without error", () => {
    render(
      <Provider store={store}>
        <Chart />
      </Provider>
    );
  });
});

describe("setTermDataToWordsCount", () => {
  test("should return an array of objects with word count and count of 1", () => {
    const efoTerms = [
      { id: 1, label: "Term 1" },
      { id: 2, label: "Term 2 with more words" },
      { id: 3, label: "Term 3 with even more words" },
    ];

    const expectedOutput = [
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 5, y: 1 },
    ];

    expect(setTermDataToWordsCount(efoTerms)).toEqual(expectedOutput);
  });
});

describe("groupedChartDataData", () => {
  test("should group chart data by word count", () => {
    const chartData = [
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
      { x: 3, y: 1 },
      { x: 3, y: 1 },
      { x: 4, y: 1 },
      { x: 4, y: 1 },
      { x: 4, y: 1 },
      { x: 4, y: 1 },
    ];

    const expectedOutput = [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 4 },
    ];

    expect(groupedChartDataData(chartData)).toEqual(expectedOutput);
  });
});
