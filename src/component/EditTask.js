import { Button, Modal } from 'react-bootstrap'

import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Revise } from '../redux/action/action'



const EditTask = ({id,show,handleClose,item}) => {
    const dispatch = useDispatch()
    const [revisedOne, setRevisedOne] = useState("");
const Save = () => {
    dispatch(Revise({id,revisedOne}))
    handleClose()
   
};
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fix it !!</Modal.Title>
        </Modal.Header>
        <Form.Control
            type="text"
            placeholder="Normal text"
            onChange={(e) => setRevisedOne(e.target.value)}
          />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Save}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default EditTask;
