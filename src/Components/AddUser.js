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
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";

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
const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const { name, username, email, phone } = user;
  const classes = useStyle();
  const history = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
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
        onClick={() => addUserDetails()}
        color="primary"
      >
        Add User
      </Button>
    </FormGroup>
  );
};

export default AddUser;
