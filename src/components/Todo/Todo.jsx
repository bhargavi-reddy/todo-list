import React from "react";
import { Container } from "@material-ui/core";
import { ArrowBack, ArrowForward, Cancel } from "@material-ui/icons";
import { CancelIcon } from "@material-ui/icons/Cancel";
import useStyles from "./todostyle";
const Todo = ({ todoArr, level, setTodoArr }) => {
  const classes = useStyles();
  console.log(todoArr);
  const updateLevel = (val, item) => {
    let updatedTodo = [...todoArr];
    updatedTodo.map((data) => {
      if (data.id === item.id) {
        val === "forward" ? data.level++ : data.level--;
      }
      return data;
    });

    setTodoArr(updatedTodo);
    localStorage.setItem("todoArr", JSON.stringify(updatedTodo));
  };

  const deleteTodo = (item) => {
    let updatedTodo = [...todoArr];
    updatedTodo = updatedTodo.filter((val) => val.id !== item.id);
    setTodoArr(updatedTodo);
    localStorage.setItem("todoArr", JSON.stringify(updatedTodo));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className={classes.wrapper}>
        {level === 0 ? "ToDos" : level === 1 ? "In Progress" : "Completed"}
      </div>
      <Container display="flex" className={classes.box}>
        {todoArr.map(
          (item, i) =>
            item.level === level && (
              <div className={classes.item} key={i}>
                <div>{item.name}</div>
                <div>
                  {item.level === 0 ? (
                    <ArrowForward
                      className={classes.arrow}
                      onClick={() => updateLevel("forward", item)}
                    ></ArrowForward>
                  ) : item.level === 1 ? (
                    <>
                      <ArrowBack
                        className={classes.arrow}
                        onClick={() => updateLevel("backward", item)}
                      ></ArrowBack>
                      <ArrowForward
                        className={classes.arrow}
                        onClick={() => updateLevel("forward", item)}
                      ></ArrowForward>
                    </>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <ArrowBack
                        className={classes.arrow}
                        onClick={() => updateLevel("backward", item)}
                      ></ArrowBack>
                      <Cancel
                        className={classes.cancel}
                        onClick={() => deleteTodo(item)}
                      ></Cancel>
                    </div>
                  )}
                </div>
              </div>
            )
        )}
      </Container>
    </div>
  );
};

export default Todo;
