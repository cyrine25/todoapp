import { MDBAlert, MDBBtn, MDBInput } from "mdbreact";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { More } from "../redux/action/action";

const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const newItem = () => {
    if (task) {
      dispatch(More({ task: task, isDone: false, id: Math.random() }));
      setTask("");
    } else {
      <MDBAlert color="info">Where is the Task !</MDBAlert>;
    }
  };
  return (
    <div>
      <h1>What Do we Have Today ?</h1>
      <MDBInput
        label="new task"
        
        value={task}
        onChange={(e) => 
          setTask(e.target.value)
        }
      />
      <MDBBtn color="unique" onClick={newItem}>
        Add a New Task
      </MDBBtn>
    </div>
  );
};

export default AddTask;
