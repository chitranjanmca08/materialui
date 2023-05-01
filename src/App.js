import React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import { Delete } from '@mui/icons-material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';
import { Box } from '@mui/material';

function App() {
  return (
    <>
    <h1>Text Button</h1>
     <Button >Click Me</Button>
     <Button color="secondary">Click Me</Button>
     <Button href="https://google.com">link</Button>
     <Button disabled>Disabled</Button>
     <h3>Contained Variant</h3>
     <Button variant="contained" >Click Me</Button>
     <Button  variant="contained" color="secondary">Click Me</Button>
     <Button  variant="contained" href="https://google.com">link</Button>
     <Button variant="contained" disabled>Disabled</Button>

     <h3>Contained Outlined</h3>
     <Button variant="outlined" >Click Me</Button>
     <Button  variant="outlined" color="secondary">Click Me</Button>
     <Button  variant="outlined" href="https://google.com">link</Button>
     <Button variant="outlined" disabled>Disabled</Button>

     <h3>Button Icons</h3>
     <Button variant="outlined" startIcon={<Delete/>}>Delete</Button>
     <Button  variant="outlined" color="secondary">Click Me</Button>
     <Button  variant="outlined" href="https://google.com">link</Button>
     <Button variant="outlined" disabled>Disabled</Button>

     <h3>Floating ActionButton</h3>
     <Fab color="primary"><AddIcon/></Fab>
     <Fab color="secondary"><EditIcon/></Fab>
     <Fab variant="extended"><NavigationIcon/>Navigate</Fab>
     
     <h3>Color</h3>
     <Box color="primary.main">primary</Box>
     <Box color="secondary.main">primary</Box>
     <Box color="error.main">error</Box>
     <h3>BGColor</h3>
     <Box bgcolor="primary.main">primary</Box>
     <Box bgcolor="secondary.main">primary</Box>
     <Box bgcolor="error.main">error</Box>
    </>
  );
}

export default App;
