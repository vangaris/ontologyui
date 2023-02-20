import { TableBody, TableCell, TableRow } from "@mui/material";
import { useAppSelector } from "../../features/efo/hooks";
import { columns } from "../../constants/constants";
import { useMemo } from "react";

const Body = () => {
  const efoTerms = useAppSelector((state) => state.efoTerms.terms);
  const rowsPerPage = useAppSelector((state) => state.efoTerms.rowsPerPage);
  const page = useAppSelector((state) => state.efoTerms.page);
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, efoTerms.length - page * rowsPerPage);

  const memoizedCellSx = useMemo(
    () => ({
      borderLeft: "1px solid #e0e0e0",
      borderRight: "1px solid #e0e0e0",
    }),
    []
  );

  return (
    <TableBody>
      {(rowsPerPage > 0
        ? efoTerms.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : efoTerms
      ).map((term) => (
        <TableRow key={term.iri}>
          <TableCell sx={memoizedCellSx}>{term.iri}</TableCell>
          <TableCell sx={memoizedCellSx}>{term.label}</TableCell>
          <TableCell sx={memoizedCellSx}>
            {term.synonyms ? term.synonyms.join(", ") : ""}
          </TableCell>
          <TableCell sx={memoizedCellSx}>{term.description}</TableCell>
        </TableRow>
      ))}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={columns.length} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default Body;
