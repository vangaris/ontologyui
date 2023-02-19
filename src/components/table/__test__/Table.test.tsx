import { TableContainer } from "@mui/material";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Mock the Redux store
jest.mock("../../features/efo/hooks", () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn().mockReturnValue({
    terms: [
      { id: "1", label: "term 1" },
      { id: "2", label: "term 2" },
    ],
    rowsPerPage: 5,
    page: 0,
  }),
}));

describe("TableContainer", () => {
  test("renders a table with data and pagination", () => {
    render(<TableContainer />);

    // Check if the table is rendered
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();

    // Check if the data is rendered
    const cell1 = screen.getByText("term 1");
    const cell2 = screen.getByText("term 2");
    expect(cell1).toBeInTheDocument();
    expect(cell2).toBeInTheDocument();

    // Check if the pagination is rendered
    const pagination = screen.getByRole("navigation");
    expect(pagination).toBeInTheDocument();
  });

  test("updates the page when clicking the pagination", () => {
    render(<TableContainer />);

    // Click on the next page button
    const nextPageButton = screen.getByRole("button", { name: /next page/i });
    userEvent.click(nextPageButton);

    // Check if the page was updated
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.getByText("term 1")).not.toBeInTheDocument();
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.getByText("term 2")).not.toBeInTheDocument();
  });

  test("updates the rows per page and resets the page when selecting a new rows per page value", () => {
    render(<TableContainer />);

    // Select a new rows per page value
    const select = screen.getByLabelText(/rows per page/i);
    userEvent.selectOptions(select, "10");

    // Check if the rows per page was updated
    expect(screen.getAllByRole("row").length).toBe(3);

    // Check if the page was reset
    expect(screen.getByText("term 1")).toBeInTheDocument();
    expect(screen.getByText("term 2")).toBeInTheDocument();
  });
});
