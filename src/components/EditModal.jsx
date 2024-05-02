import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";

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

export default function EditModal({ open, handleClose, rowData }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    // Populate input fields with rowData when modal opens
    if (rowData) {
      setFirstName(rowData.firstName || "");
      setLastName(rowData.lastName || "");
      setAge(rowData.age || "");
    }
  }, [open, rowData]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., update user details)
    // You can access the updated values via firstName, lastName, and age states
    handleClose(); // Close the modal after submission
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleFormSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="first-name"
              label="First Name"
              name="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="last-name"
              label="Last Name"
              name="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <Button
              type="submit"
              style={{
                background: "rgb(31 41 55)",
                width: "100%",
                padding: "10px",
                marginTop: "5px",
              }}
            >
              Update User
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
