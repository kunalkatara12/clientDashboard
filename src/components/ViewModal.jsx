import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ViewModal({ open, handleClose, rowData }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" gutterBottom>
            User Details
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            label="First Name"
            value={rowData?.firstName || ""}
            InputProps={{ readOnly: true }}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Last Name"
            value={rowData?.lastName || ""}
            InputProps={{ readOnly: true }}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Age"
            value={rowData?.age || ""}
            InputProps={{ readOnly: true }}
          />
        </Box>
      </Modal>
    </div>
  );
}
