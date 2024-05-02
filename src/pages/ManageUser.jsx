import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { AddUser, ViewModal } from "../components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditModal from "../components/EditModal";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "role",
    headerName: "Role",
    width: 130,
  },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    renderCell: (params) => {
      const [anchorEl, setAnchorEl] = useState(null);
      const [selectedRow, setSelectedRow] = useState(null); // State to hold the selected row for editing
      const [open, setOpen] = useState(false);
const [openView, setOpenView] = useState(false);
      // const handleOpenView = () => setOpenView(true);
      // const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const handleCloseView = () => setOpenView(false);
      const handleEdit = (rowData) => {
        setSelectedRow(rowData); // Set the selected row for editing
        setOpen(true); // Open the modal
      };
      const handleView = (rowData) => {
        setSelectedRow(rowData); // Set the selected row for viewing
        setOpenView(true); // Open the modal
      };
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

      const handleCloseMenu = () => {
        setAnchorEl(null);
      };

      return (
        <div>
          <MoreVertIcon onClick={handleClick} />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={() => handleEdit(params.row)}>Edit</MenuItem>
            <EditModal
              open={open}
              handleClose={handleClose}
              rowData={selectedRow}
            />
            <MenuItem onClick={() => alert(`Deleting ${params.id}`)}>
              Delete
            </MenuItem>
            <MenuItem onClick={() => handleView(params.row)}>Open</MenuItem>
            <ViewModal
              open={openView}
              handleClose={handleCloseView}
              rowData={selectedRow}
            />
          </Menu>
        </div>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, role: "Admin" },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    role: "Public",
  },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, role: "Public" },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, role: "Public" },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    role: "Public",
  },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, role: "Public" },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    role: "Public",
  },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, role: "Public" },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, role: "Public" },
];

export default function ManageUser() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      className="mx-1 "
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Button
        style={{
          background: "rgb(31 41 55)",
          width: "fit-content",
          padding: "10px",
          marginTop: "5px",
        }}
        onClick={handleOpen}
      >
        Add User
      </Button>
      <AddUser open={open} handleClose={handleClose} />
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
