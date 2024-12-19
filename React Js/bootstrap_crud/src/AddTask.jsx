import React, {useState, useEffect} from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import ShowTask from './ShowTask';

const AddTask = () => {

    const [task, setTask] = useState({ task: '', date: '' });
    const [Tasklist, setTasklist] = useState([])

    const handdlechange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    }

    const getData = () => {
        fetch('http://localhost:8000/task').then((result) => {
            return result.json();
        }).then((res) => {
            console.log(res);
            setTasklist(res);
        })
    }

    const addData = () => {
        fetch('http://localhost:8000/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        }).then((result) => {
            return result.json()
        }).then((res) => {
            alert('data added successfully');
            getData();
            setTask({ task: '', date: '' });
        }).catch((error) => {
            alert(error.message);
        })
    }

    const deleteData = (id) => {
        console.log("data deleted");
        fetch(`http://localhost:8000/task/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(() => {
            getData();
        })
    }
    
    
    useEffect(() => {
        getData();
    },[])
    

  return (
      <>
      
          <Container>
              
              <Row className='mt-5 p-5'>
                  <Col xs={4}>
                      <input type="text" name='task' className='form-control' onChange={handdlechange} placeholder='Enter Task'/>
                  </Col>
                  <Col xs= {4}>
                      <input type="date" name='date' className='form-control' onChange={handdlechange} placeholder='Enter Date'/>
                  </Col>
                  <Col>
                      <Button variant='primary' onClick={addData}> Add Task </Button>
                  </Col>
              </Row>
              <ShowTask tasklist={Tasklist} deleteData= {deleteData} getData = {getData} />
          </Container>
          
      
      
      </>
  )
}
    

export default AddTask