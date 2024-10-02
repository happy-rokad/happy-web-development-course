import React, {useState} from 'react'
import { Table, Button, Modal } from 'react-bootstrap'

const ListTodo = ({ todo, deleteData }) => {
    
    const [show, setShow] = useState(false);
    const [deleteId, setdeleteId] = useState(null)

    const openModal = (id) => {
        setShow(true);
        setdeleteId(id)
    }

    const handleClose = () => {
        setShow(false);
    }

    const deleteToDo = () => {
        deleteData(deleteId);
        setdeleteId(null);
        handleClose();
    }

  return (
      <>
          
        <Table border='1' style={{backgroundColor:'white'}}>
            <thead>
                <tr>
                    <th> Task </th>
                    <th> Date </th>
                    <th> Action </th>
                </tr>
            </thead>
            <tbody>
                  {todo.length == 0 && <>
                      <tr>
                          <td colSpan={2}> No data found </td>
                      </tr>
                  </>}
                  {todo.length > 0 && <>
                      {todo.map((result, key) => {
                          return (
                              <>
                                  <tr>
                                      <td> {result.task} </td>
                                      <td> {result.date} </td>
                                      <td> <Button className='btn btn-danger' onClick={() => {
                                          openModal(key)
                                      }}> Delete </Button> </td>
                                  </tr>
                              </>
                          )
                      })}
                  </>}
            </tbody>
          </Table>
          
        <Modal show={show} onHide={handleClose}>
            
            <Modal.Body> Are you sure want to delete data ? </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    No delete
                </Button>
                <Button variant="primary" onClick={deleteToDo}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
      
      </>
  )
}

export default ListTodo