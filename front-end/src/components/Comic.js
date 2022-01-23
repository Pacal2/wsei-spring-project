import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Comic() {
  const paperStyle={padding: '50px 20px', width:600, margin: "20px auto"}
  const[title, setTitle]=useState('');
  const[rating, setRating]=useState('');
  const classes = useStyles();

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
      <h1 style={{color:"blue"}}><u>Add Comic Book</u></h1>    
    <form className={classes.root} noValidate autoComplete='off'>
    
      <TextField id="outlined-basic" 
      label="Comic book title" 
      variant="outlined" 
      fullWidth 
      value={title}
      onChange={(e)=>setTitle(e.target.value)} 
      />
      <TextField id="outlined-basic" 
      label="Your rating" 
      variant="outlined" 
      fullWidth 
      value={rating}
      onChange={(e)=>setRating(e.target.value)} 
      />
    
    </form>
    </Paper>
    </Container>
  );
}
