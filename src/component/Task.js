import { MDBBtn, MDBBtnGroup } from "mdbreact";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Finish, Remove } from "../redux/action/action";
import EditTask from "./EditTask";

const Task = ({ item }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1 className={item.isDone && "lineTH"}>{item.task}</h1>
      <MDBBtnGroup size="lg" className="mb-4">
        <MDBBtn color="red lighten-3" onClick={() => dispatch(Finish(item.id))}>
          Complete
        </MDBBtn>
        <MDBBtn
          color="red lighten-2"
          onClick={() => {
            handleShow();
            setId(item.id);
          }}
        >
          Edit
        </MDBBtn>
        <MDBBtn color="red lighten-1" onClick={() => dispatch(Remove(item.id))}>
          Delete
        </MDBBtn>
      </MDBBtnGroup>
      <EditTask id={id} show={show} handleClose={handleClose} />
    </div>
  );
};

export default Task;
