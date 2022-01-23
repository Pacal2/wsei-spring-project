import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
import { Container ,Paper,Button} from '@material-ui/core';
import { BoyRounded } from '@mui/icons-material';

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
  const[comicbooks, setComicbooks]=useState('');
  const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const comic={title, rating}
    console.log(comic)
    fetch("http://localhost:8080/comic/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(comic)
    }).then(()=>{
      console.log("New Comic added")
    })
  }

  useEffect(()=>{
    fetch("http://localhost:8080/comic/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setComicbooks(result);
    }
  )},
  [])

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
      <Button variant="contained" color="secondary" onClick={handleClick}>
      Submit
      </Button>
    </form>
    </Paper>
    </Container>
  );
}
