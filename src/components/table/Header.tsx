import { TableCell, TableHead, TableRow } from "@mui/material";
import { columns } from "../../constants/constants";
import { memo } from "react";

const Header = () => {
  return (
    <TableHead sx={{ background: "#f5f5f5" }}>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column.id} sx={{ fontWeight: "bold", color: "#444" }}>
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default memo(Header);
