import { width } from '@fortawesome/free-brands-svg-icons/fa42Group'
import React, {useState, useEffect} from 'react'
import { Container, Card, Row, Button, Col } from 'react-bootstrap'
import ListTodo from './ListTodo';

const AddTodo = () => {

    const [todo, setTodo] = useState([]);
    const [formData, setForm] = useState({ task: null, date: null });
    const [error, seterror] = useState({})

    useEffect(() => {
        console.log(todo); 
    }, [todo])
    
    const addData = (e) => {
        let validate = {}
        if (formData.task == null) {
            validate.task = 'please add task';
        }
        if (formData.date == null) {
            validate.date = 'please add date';
        }

        seterror(validate);
        console.log(validate);
        

        if (Object.keys(validate).length == 0) {
            setTodo([...todo, formData]);
            setForm({ task: null, date: null });
            document.getElementById('task').value = '';
            document.getElementById('date').value = '';
        } 
    }

    const deleteData = (id) => {
        let newData = todo.filter((item, key) => key !== id);
        setTodo(newData);
    }



  return (
      <>
      
          <Container className='d-flex justify-content-center align-items-center mt-5'>
              <Card style={{ width: 'mx-auto', backgroundColor: 'whitesmoke', border: 'none', padding: '5px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <Card.Header style={{ backgroundColor: 'whitesmoke', border: 'none', fontWeight:'bold', fontSize:'24px' }}> Add Todo </Card.Header>
                  <Card.Body>
                      <Row>
                        <Col>
                              <input type="text" id='task' value={formData.task} onChange={(e) => {
                                  setForm({...formData, task:e.target.value})
                            }} placeholder='Add Todo' style={{ paddingLeft:'10px', borderRadius:'3px', border:'none', height:'40px', width:'250px'}}/>
                            <p style={{color:'red'}}>  { error.task ? error.task : ''} </p>
                        </Col>
                        <br />
                        <Col>
                            <input type="date" id='date' value={formData.date} onChange={(e) => {
                                  setForm({...formData, date:e.target.value})
                            }} placeholder='Add Todo' style={{padding:'10px 10px', borderRadius:'3px', border:'none', height:'40px', width:'250px'}}/>
                            <p style={{color:'red'}}>  {  error.date ? error.date : ''} </p>
                        </Col>
                        <br />
                        <Col>
                            <Button type="submit" variant='primary' style={{width:'100px', height:'40px'}} onClick={addData}> Add </Button>
                        </Col>
                      </Row>
                      

                      <ListTodo todo={todo} deleteData={ deleteData } /> 


                  </Card.Body>
              </Card>
          </Container>
      
      
      </>
  )
}

export default AddTodo