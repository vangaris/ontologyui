import { Box, Grid, Paper, Typography } from "@material-ui/core";

import TableContainer from "../table/TableContainer";
import Chart from "../chart/Bar";

const Container = () => {
  return (
    <Grid>
      <Typography variant="h4" align="center">
        EFO Terms
      </Typography>
      <Paper style={{ margin: 50 }}>
        <Box mx={{ margin: 50 }}></Box>
        <Box sx={{ my: 4 }}>
          <TableContainer />
        </Box>
      </Paper>
      <Paper style={{ margin: 50 }}>
        <Box sx={{ my: 4 }}>
          <Chart />
        </Box>
      </Paper>
    </Grid>
  );
};

export default Container;
