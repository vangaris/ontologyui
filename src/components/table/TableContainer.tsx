import React from "react";

import {
  Table,
  TableContainer as TableContainerMUI,
  Paper,
  TablePagination,
} from "@mui/material";
import {
  setModal,
  setPage,
  setRowsPerPage,
} from "../../features/efo/efoTermsSlice";
import { useAppDispatch, useAppSelector } from "../../features/efo/hooks";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import Header from "./Header";
import Body from "./Body";
import { rowsPerPageOptions } from "../../types/constants";

function TableContainer() {
  const efoTerms = useAppSelector((state) => state.efoTerms.terms);
  const dispatch = useAppDispatch();
  const rowsPerPage = useAppSelector((state) => state.efoTerms.rowsPerPage);
  const page = useAppSelector((state) => state.efoTerms.page);

  const handleChangePage = (_event: unknown, newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
    dispatch(setPage(0));
  };

  console.log("table");
  return (
    <ErrorBoundary
      fallback={<div>test</div>}
      onError={() => dispatch(setModal(true))}
    >
      <TableContainerMUI component={Paper}>
        <Table>
          <Header />
          <Body />
        </Table>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={efoTerms.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainerMUI>
    </ErrorBoundary>
  );
}

export default TableContainer;
