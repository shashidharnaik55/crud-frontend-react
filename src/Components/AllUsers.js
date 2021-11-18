import { getUsers, deleteUser } from "../Service/api";
import { useEffect, useState } from "react";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  table: {
    width: "90%",
    margin: "2% 0 0 5%",
  },
  thead: {
    "& > * ": {
      background: "#000",
      color: "#fff ",
      fontSize: 18,
    },
  },
  row: {
    "& > * ": {
      fontSize: 12,
    },
  },
});

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const classes = useStyle();

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response);
    setUsers(response.data);
  };
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow className={classes.row}>
            <TableCell>{users.id}</TableCell>
            <TableCell>{users.name}</TableCell>
            <TableCell>{users.username}</TableCell>
            <TableCell>{users.email}</TableCell>
            <TableCell>{users.phone}</TableCell>
            <TableCell>
              <Button
                variant="container"
                color="danger"
                style={{ marginRight: "1%" }}
                onClick={() => deleteUserData(user.id)}
              >
                Delete
              </Button>
              <Button
                variant="container"
                color="primary"
                element={<Link />}
                to={`/edit/${user.id}`}
              >
                Edit
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsers;
