import React from "react";
import { Box, Button, InputBase, Typography } from "@material-ui/core";
import useStyles from "./HeaderStyles";

const Header = ({ setTodoArr, todoArr, setInputVal, inputVal }) => {
  const classes = useStyles();
  const updateTodo = () => {
    let arr = [];
    if (todoArr.length) {
      arr = [...todoArr, { name: inputVal, level: 0, id: todoArr.length + 1 }];
    } else {
      arr.push({ name: inputVal, level: 0, id: todoArr.length + 1 });
    }
    setTodoArr(arr);
    setInputVal("");
    localStorage.setItem("todoArr", JSON.stringify(arr));
  };
  return (
    <div>
      <div className={classes.title}>Tasks Dashboard</div>
      <Box className={classes.box}>
        <div className={classes.add}>
          <InputBase
            placeholder="Add a todo..."
            classes={{ root: classes.inputRoot, input: classes.inputInput }}
            onChange={(e) => setInputVal(e.target.value)}
            value={inputVal}
          ></InputBase>
        </div>
        <Button className={classes.button} onClick={updateTodo}>
          Add Task
        </Button>
      </Box>
    </div>
  );
};

export default Header;
