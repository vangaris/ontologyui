import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Typography from "@mui/material/Typography";
// import { setModal } from "../../features/map/vesselSlice";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../features/efo/hooks";
import { setModal } from "../../features/efo/efoTermsSlice";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Modal = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.efoTerms.isModalOpen);

  const handleClose = () => {
    dispatch(setModal(false));
  };

  return (
    <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={modal}>
      <Box margin={2}>
        <Typography variant="h6">Vessel API</Typography>
      </Box>

      <DialogContent dividers>
        <Typography gutterBottom>
          Sorry, we could not retrieve data for the requested vessel. Please make sure the MMSI and
          IMO and DAYS values are correct and try again.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          OK
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default Modal;
