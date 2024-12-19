import React, { useEffect, useState } from "react";
import { Row, Table, Button, Modal, Col } from "react-bootstrap";

const ShowTask = ({ tasklist, deleteData, getData }) => {
  const [show, setShow] = useState(false);
  const [editData, seteditData] = useState({ task: "", date: "", id: "" });

  const handleShow = () => {
    let check = show == true ? false : true;
    setShow(check);
  };

  const updateData = (data) => {
    setShow(true);
    seteditData({ task: data.task, date: data.date, id: data.id });
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    seteditData({ ...editData, [name]: value });
  };

  const submitData = () => {
    fetch(`http://localhost:8000/task/${editData.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    }).then(() => {
      getData();
      setShow(false);
    });
  };

  useEffect(() => {
    console.log(editData);
  }, [editData]);

  return (
    <>
      <Row>
        <Table>
          <thead>
            <tr>
              <th> Task </th>
              <th> Date </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {tasklist.map((result) => {
              return (
                <>
                  <tr>
                    <td> {result.task} </td>
                    <td> {result.date} </td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => {
                          updateData(result);
                        }}
                      >
                        {" "}
                        Edit{" "}
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          deleteData(result.id);
                        }}
                      >
                        {" "}
                        Delete{" "}
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Update </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={6}>
              <label htmlFor=""> Task </label>
              <input
                type="text"
                name="task"
                value={editData.task}
                onChange={handleChange}
                className="form-control"
              />
            </Col>
            <Col xs={6}>
              <label htmlFor=""> Date </label>
              <input
                type="date"
                name="date"
                value={editData.date}
                onChange={handleChange}
                className="form-control"
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={submitData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShowTask;
