
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState } from "react";

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

export default function AddUser({open,handleClose}) {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [age,setAge]=useState();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <TextField
              margin="normal"
              required
              fullWidth
              id="first name"
              label="First Name"
              name="first name"
              autoComplete="first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="last name"
              label="Last Name"
              name="last name"
              autoComplete="last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age"
              name="age"
              autoComplete="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              autoFocus
            />
            <Button
              style={{
                background: "rgb(31 41 55)",
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
            >
              Add User
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
