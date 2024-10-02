import React, { useState } from 'react';

import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';


const Crud = () => {
        
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState({ framework: '' , use: ''});
    const [isEditing, setIsEditing] = useState(false);

    const handleOpen = (item) => {
        setCurrentItem(item || { framework: '', use: '' });
        setIsEditing(!!item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setCurrentItem({ ...currentItem, framework: event.target.value});
    };

    const newChange = (event) => {
        setCurrentItem({ ...currentItem, use: event.target.value});
    };

    const handleSubmit = () => {
        if (isEditing) {
        setData(data.map((item) => (item.id === currentItem.id ? currentItem : item)));
        } else {
        setData([...data, { ...currentItem, id: data.length + 1 }]);
        }
        handleClose();
    };
    
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    return (

        <>

        <TableContainer  style={{width:'40%', border:'1px solid black', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Button variant="contained" onClick={() => handleOpen(null)} style={{ margin: '16px', width:'150px' }}>
            Add New
        </Button>
            <Table style={{width:'100%'}}>
            <TableHead>
                <TableRow>
                <TableCell>Framework</TableCell>
                <TableCell>Use</TableCell>
                <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((item) => (
                <TableRow key={item.id}>
                    <TableCell>{item.framework}</TableCell>
                    <TableCell>{item.use}</TableCell>
                    <TableCell>
                        <Button variant="outlined" onClick={() => handleOpen(item)}>
                            <EditIcon/>
                        </Button>
                        <Button variant="outlined" color="error" onClick={() => handleDelete(item.id)} style={{marginLeft:'10px'}}>
                            <DeleteIcon/>
                        </Button>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>

        <Dialog open={open} onClose={handleClose} >
            <DialogTitle style={{ width:'500px',display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>{isEditing ? 'Edit Framework' : 'Add Framework'}</DialogTitle>
            <DialogContent>
            <TextField
                label="Framework"
                variant="outlined"
                value={currentItem.framework}
                onChange={handleChange}
                fullWidth
            />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>{isEditing ? 'Update' : 'Add'}</Button>
            </DialogActions>
            
            <DialogTitle>{isEditing ? 'Edit Use' : 'Add Use'}</DialogTitle>
            <DialogContent>
            <TextField
                label="Use"
                variant="outlined"
                value={currentItem.use}
                onChange={newChange}
                fullWidth
            />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>{isEditing ? 'Update' : 'Add'}</Button>
            </DialogActions>
        </Dialog>
    </>
    
  )
}

export default Crud