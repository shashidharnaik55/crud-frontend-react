import { useState } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { editUser, getUsers } from "../Service/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: "2%",
    },
  },
});
const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
const EditUser = () => {
  const [user, setUser] = useState(initialValues);
  const { name, username, email, phone } = user;
  const { id } = useParams();
  const classes = useStyle();
  const history = useNavigate();

  useEffect(() => {
    loadUserData();
    // eslint-disable-next-line
  }, []);

  const loadUserData = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetails = async () => {
    await editUser(user);
    history.push("./all");
  };
  return (
    <FormGroup className={classes.container}>
      <Typography variant="h3">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
        ></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="username"
          value={username}
        ></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
        ></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
        ></Input>
      </FormControl>
      <Button
        variant="contained"
        onClick={() => editUserDetails()}
        color="primary"
      >
        Update User
      </Button>
    </FormGroup>
  );
};

export default EditUser;
